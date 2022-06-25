import re
from pathlib import Path
from typing import Tuple

meta_enum = "cache/ProtoEnum.proto"
meta_master = "cache/ProtoMaster.proto"
meta_api = "cache/ProtoApi.proto"
meta_transaction = "cache/ProtoTransaction.proto"

pkg_mapping = {
  "ProtoEnum": "proto_enum",
  "master": "proto_master",
  "transaction": "proto_transaction",
  "api": "proto_api",
}

type_mapping = {
  "double": "number",
  "float": "number",
  "int32": "number",
  "int64": "string",
  "uint32": "number",
  "uint64": "string",
  "sint32": "number",
  "sint64": "string",
  "fixed32": "number",
  "fixed64": "string",
  "sfixed32": "number",
  "sfixed64": "string",
  "bool": "boolean",
  "string": "string",
  "bytes": "string",
}

def deals_enum() -> str:
  txt = "// Generated from ProtoEnum.proto\n"

  # output templates
  wrapper_template = """
export enum {name} {
{pairs}}
"""
  pair_template = "  {v_name} = {v_val},"
  
  meta_txt = Path(meta_enum).read_text()
  enum_ptn = r"enum (?P<name>\w+) \{(?P<contents>[\s\S]+?)\}"
  for matched in re.finditer(enum_ptn, meta_txt):
    name = matched.group("name")
    contents = matched.group("contents")

    pair_txt = ""
    pair_ptn = name + r"_(?P<v_name>\w+) \= (?P<v_val>\d+);"

    for pair in re.finditer(pair_ptn, contents):
      v_name = pair.group("v_name")
      v_val = pair.group("v_val")

      pair_txt += pair_template\
        .replace("{v_name}", v_name)\
        .replace("{v_val}", v_val)\
        + "\n"
    wrapper_txt = wrapper_template\
      .replace("{name}", name)\
      .replace("{pairs}", pair_txt)
    txt += wrapper_txt
  return txt

def deals_message(file_name: str) -> str:
  txt = ""
  # output templates
  wrapper_template = """
export type {name} = {
{pairs}}
"""
  pair_template = "  {v_name}: {v_type}"

  meta_txt = Path("cache").joinpath(file_name + ".proto").read_text()
  message_ptn = r"message (?P<name>\w+) \{(?P<contents>[\s\S]+?)\}"
  imports = {
    "ProtoEnum": [],
    "master": [],
    "transaction": [],
    "api": [],
  }

  proto_pkg = ""
  if file_name == "ProtoApi":
    proto_pkg = "api"
  elif file_name == "ProtoMaster":
    proto_pkg = "master"
  elif file_name == "ProtoTransaction":
    proto_pkg = "transaction"

  for matched in re.finditer(message_ptn, meta_txt):
    name = matched.group("name")
    contents = matched.group("contents")

    pair_txt = ""
    pair_ptn = r"(?P<rpt>repeated )?(?P<v_pkg>\w+\.)?(?P<v_type>\w+) (?P<v_name>\w+) \= (?P<v_val>\d+);"

    for pair in re.finditer(pair_ptn, contents):
      group_dict = pair.groupdict()
      rpt = group_dict["rpt"]
      v_pkg = group_dict["v_pkg"]
      v_type = group_dict["v_type"]
      v_name = group_dict["v_name"]
      v_val = group_dict["v_val"]

      if v_pkg:
        pkg = v_pkg.rstrip(".")
        if pkg != proto_pkg:
          if v_type not in imports[pkg]:
            imports[pkg].append(v_type) 

      txt_type = v_type
      try: 
        txt_type = type_mapping[v_type]
      except:
        pass
      
      if rpt:
        txt_type += "[]"

      pair_txt += pair_template\
        .replace("{v_name}", v_name)\
        .replace("{v_type}", txt_type)\
        + "\n"

    wrapper_txt = wrapper_template\
      .replace("{name}", name)\
      .replace("{pairs}", pair_txt)
      
    txt += wrapper_txt
  
  import_txt = ""
  for (k, v) in imports.items():
    if v.__len__() > 0:
      import_txt += "import type {\n"
      for it in v:
        # exceptions 
        if it == "UserDeckPosition":
          continue
        import_txt += f"  {it},\n"
      import_txt += "} from './" + pkg_mapping[k] + "'\n"
  txt = f"// Generated from {file_name}.proto\n\n" + import_txt + txt
  return txt


def main():
  enum_txt = deals_enum()
  Path("cache/proto_enum.ts").write_text(enum_txt)
  api_txt = deals_message("ProtoApi")
  Path("cache/proto_api.ts").write_text(api_txt)
  master_txt = deals_message("ProtoMaster")
  Path("cache/proto_master.ts").write_text(master_txt)
  transaction_txt = deals_message("ProtoTransaction")
  Path("cache/proto_transaction.ts").write_text(transaction_txt)

if __name__ == "__main__":
  main()
