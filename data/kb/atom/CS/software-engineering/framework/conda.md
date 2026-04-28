# Conda

## Cheatsheet

```sh
conda --version
conda info --envs

conda env list
conda create --name my-new-env
conda create -n my-new-env
conda create -n my-new-env python=3.7
conda env list

conda install pytorch
conda install pytorch -y --force-reinstall

conda install --file requirements.txt
conda install -f requirements.txt

conda env export > environment.yml
conda activate my-new-env
conda activate ldm
conda list torch
conda env create -f environment.yml -n my_new_environment

# Freeze requirements without the local path
conda list --export | grep -v "\-e" > requirements.txt

## Save only the packages I specifically installed
conda env export --from-history > environment.yml

# Install pytorch on MacOS
conda install pytorch::pytorch torchvision torchaudio -c pytorch
```

## Workflow

Tt's generally recommended to manage packages within Conda environments to leverage its environment management capabilities effectively. Conda provides a consistent environment where package versions and dependencies are carefully managed, which helps avoid conflicts and ensures reproducibility across different systems.

However, there are situations where using `pip` alongside Conda is necessary or preferred:

1. **Package Availability**: Some packages might not be available in Conda repositories but are available on PyPI (Python Package Index), which `pip` can access directly.

2. **Package Updates**: `pip` sometimes provides more up-to-date versions of packages than what is available in Conda channels.

3. **Compatibility**: In some cases, certain packages or specific versions might work better when installed via `pip`, especially when dealing with packages that have complex dependencies or need the latest updates.

### Best Practices for Using Conda and `pip`

To make the best use of both Conda and `pip`:

- **Start with Conda**: Always try to install packages using Conda first (`conda install ...`). This ensures that packages are managed by Conda and are part of the environment's specifications.

- **Use `pip` When Necessary**: If a package is not available in Conda or if you need a specific version not provided by Conda, use `pip` (`pip install ...`). It's important to do this within an activated Conda environment to avoid conflicts with the system Python.

- **Generate `requirements.txt`**: After setting up your environment with Conda and `pip`, generate a `requirements.txt` file using `pip freeze`. This file captures all installed Python packages and versions, ensuring others can recreate the environment easily.

- **Documentation**: Document your environment setup process clearly, mentioning which packages were installed via Conda and which were installed via `pip`. This helps others understand the environment's dependencies and reproduce it correctly.

### Outline

Here’s a refined workflow based on the best practices:

1. **Create a Conda Environment**:

   ```bash
   conda create -n myenv python=3.10
   conda activate myenv
   ```

2. **Install Packages Using Conda**:

```sh
conda install -c conda-forge numpy pandas scikit-learn
conda install pytorch::pytorch torchvision torchaudio -c pytorch
```

3. **Install Additional Packages Using `pip`**:

   ```bash
   pip install tensorflow matplotlib
   ```

4. **Generate `requirements.txt`**:

   ```bash
   pip freeze > requirements.txt
   ```

5. **Deactivate and Share Environment**:

   ```bash
   conda deactivate
   ```

6. **Recreate Environment from `requirements.txt`**:
   ```bash
   python -m venv myenv
   source myenv/bin/activate  # On Windows use `myenv\Scripts\activate`
   pip install -r requirements.txt
   ```

By following these practices, you can harness the strengths of both Conda and `pip` to manage Python environments effectively, ensuring your projects are reproducible and portable across different systems.

### Workflow including both Conda & PiP

```sh
./setup_env.sh
conda activate clean_env
touch install_packages.sh
chmod +x install_packages.sh
./install_packages.sh
pip freeze > requirements.txt
conda deactivate
```

## Resources

https://conda.io/projects/conda/en/latest/commands/create.html
