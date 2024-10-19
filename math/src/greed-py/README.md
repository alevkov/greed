## To run:

### Install poetry package manager

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

### Initialize environment and run scripts

```bash
poetry install
poetry run python dose_analysis/setup.py build_ext --inplace
poetry run python -m dose_analysis.main
```

Result is written to `dose_tiers_output.json`.
