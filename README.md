# IDOLY-Backend

| Package Build                    | Data Validation                           | Data Update                             |
| -------------------------------- | ----------------------------------------- | --------------------------------------- |
| [![Build][build-svg]][build-yml] | [![Validate][validate-svg]][validate-yml] | [![Data update][data-svg]][data-status] |

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) for all the components of the backend of [info-pride](https://github.com/outloudvi/info-pride).

## Packages

### Non-publishing packages (Node)

* [`@hoshimi/parser`](packages/parser)
* [`@hoshimi/validator`](packages/validator)

### Published packages (Node)

* [`hoshimi-types`](packages/types)

### Projects (Deno)

* [backend](denoland/backend)

## Scripts

* [`upload.py`](scripts/upload.py) / [`upload.sh`](scripts/upload.sh)
  * Used to update data on Workers KV.
* [`SolisClient`](solis)
  * An observer that keeps backend data up-to-date with server timely.

## License

All components in IDOLY-Backend are licensed under the [AGPL-3.0 license](LICENSE)

[build-svg]: https://github.com/MalitsPlus/IDOLY-Backend/actions/workflows/build.yml/badge.svg
[build-yml]: https://github.com/MalitsPlus/IDOLY-Backend/actions/workflows/build.yml
[validate-svg]: https://github.com/MalitsPlus/IDOLY-Backend/actions/workflows/validate.yml/badge.svg
[validate-yml]: https://github.com/MalitsPlus/IDOLY-Backend/actions/workflows/validate.yml
[data-svg]: https://circleci.com/gh/MalitsPlus/SolisClient.svg?style=svg
[data-status]: https://app.circleci.com/pipelines/github/MalitsPlus/SolisClient/240/workflows/08606004-73af-4fbf-993b-83e209ee58f5
