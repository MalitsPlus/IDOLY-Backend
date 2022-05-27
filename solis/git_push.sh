#!/bin/bash

# init
KEY_URL=$1
REPO_NAME="ipr-master-diff"
ARTIFACT_DIR_NAME="masterdata"
VERSION_FILE='!version.txt'
REPO_SSH="git@github.com:Stilamcat/ipr-master-diff.git"
KEY_CACHE=`pwd`/cache/id_ed25519

# Check ssh key
checkKeyCache() {
  if [ ! -f ${KEY_CACHE} ]; then
    echo ">>> Getting ssh key from remote server..."
    curl --get ${KEY_URL} > ${KEY_CACHE}
    if [ $? -ne 0 ]; then
      echo ">>> Failed to get ssh key."
      rm -f ${KEY_CACHE}
      exit 1
    fi
    if [ -f ${KEY_CACHE} ]; then
      chmod 600 ${KEY_CACHE}
    fi
    if [ $? -ne 0 ]; then
      echo ">>> Failed to change permission."
      exit 1
    fi
  fi
}

# Check repo directory
if [ ! -d ${REPO_NAME} ]; then
  # checkKeyCache
  echo ">>> Cloning repo from remote..."
  # git -c core.sshCommand="ssh -i ${KEY_CACHE}" clone ${REPO_SSH}
  git clone ${REPO_SSH}
  if [ $? -ne 0 ]; then
    echo ">>> Failed to clone repo."
    exit 1
  fi
fi

# Get master version
pre_ver=`cat ${REPO_NAME}/${VERSION_FILE}`
cur_ver=`cat ${ARTIFACT_DIR_NAME}/${VERSION_FILE}`

# Exit if no changing
echo ">>> Previous version: ${pre_ver}"
echo ">>> Current version:  ${cur_ver}"
if [ "${pre_ver}" = "${cur_ver}" ]; then
  echo ">>> Exiting..."
  exit 0
fi

# Check ssh key
# checkKeyCache

# Set git configurations
git -C ${REPO_NAME} config user.name "ServerAccount"
git -C ${REPO_NAME} config user.email "anonymous@e.mail"

echo ">>> Pulling from remote..."
# git -c core.sshCommand="ssh -i ${KEY_CACHE}" -C ${REPO_NAME} pull
git -C ${REPO_NAME} pull

if [ $? -ne 0 ]; then
  echo ">>> Failed to pull repo."
  exit 1
fi

# Check remote version
rmt_ver=`cat ${REPO_NAME}/${VERSION_FILE}`
echo ">>> Remote version:   ${cur_ver}"
if [ "${rmt_ver}" = "${cur_ver}" ]; then
  echo ">>> Exiting..."
  exit 0
fi

echo ">>> Copy artifacts to repo."
for file in masterdata/*; do
  cp ${file} "${REPO_NAME}/${file##*/}"
done

echo ">>> git adding..."
git -C ${REPO_NAME} add .
echo ">>> git committing..."
git -C ${REPO_NAME} commit -m "version: ${cur_ver}"
echo ">>> Pushing to remote..."
# git -c core.sshCommand="ssh -i ${KEY_CACHE}" -C ${REPO_NAME} push

ssh-add -D
ssh-add ~/.ssh/id_rsa_b9bb68b85a5390e2c4d102fb972bdf7a
GIT_SSH_COMMAND="ssh -o IdentitiesOnly=yes -i ~/.ssh/id_rsa_b9bb68b85a5390e2c4d102fb972bdf7a"
git config core.sshCommand "ssh -o IdentitiesOnly=yes -i ~/.ssh/id_rsa_b9bb68b85a5390e2c4d102fb972bdf7a"

git -C ${REPO_NAME} push
echo ">>> Done."
