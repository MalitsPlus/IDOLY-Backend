# IDOLY-Backend

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) for all the components of the backend of [info-pride](https://github.com/outloudvi/info-pride).

## Packages

### Non-publishing packages

* [`@hoshimi/backend`](packages/backend)
* [`@hoshimi/parser`](packages/parser)
* [`@hoshimi/validator`](packages/validator)

### Published packages

* [`hoshimi-types`](packages/types)

## Scripts

* [`upload.py`](scripts/upload.py) / [`upload.sh`](scripts/upload.sh)
  * Used to update data on Workers KV.
* [`SolisClient`](solis)
  * An observer that keeps backend data up-to-date with server timely.

## License

All components in IDOLY-Backend are licensed under the [AGPL-3.0 license](LICENSE)
