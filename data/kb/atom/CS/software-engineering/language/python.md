## Setup

```sh
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Pip

```sh
pip freeze > requirements.txt
pip install -r requirements.txt
deactivate

pip list --format=freeze > requirements.txt

# Properly save requirements.txt
pip install pipreqs
pipreqs  . --force
```

## Conda

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
conda list --export | grep -v "\-e" > requirements.

```

```sh
# Anaconda paths
C:\ProgramData\anaconda3
C:\ProgramData\anaconda3\condabin
C:\ProgramData\anaconda3\Scripts


# Conda envs
C:\Users\seepd\.conda\envs
```

```sh
set PATH=C:\Anaconda\envs\ldm\Scripts;C:\Anaconda\envs\ldm;%PATH%

set PATH=C:\Users\seepd\.conda\ldm\Scripts;C:\Users\seepd\.conda\ldm;%PATH%ldm
```
