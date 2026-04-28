## Install

- Default Comfy Port
  8188

### MacOS

```sh
# Try Conda first. If unsuccessful in installing dependencies in one go from file, install them one by one
conda env create -n comfy --file=environment-windows.yaml
conda activate comfy
conda install --file requirements.txt
python main.py

python -m venv venv
pip install -r requirements.txt
source venv/bin/activate
python main.py
```

### Windows

- Happy case. You've alread setup Cuda/Pytorch for another project

```sh
conda env create -n comfy --file=environment-windows.yml -y

# If install fails
conda config --set restore_free_channel true
conda env create -n comfy --file=environment-windows.yml

conda activate comfy
```

- First time Cuda/Pytorch setup on your machine

- NIVIDA Cuda(GPU)
  Find your version of CUDA.

```sh
# View the defined Cuda driver for your machine.
# Make sure to run in Git Bash.
# The Powershell & Command prompt has been observed to spit out stale results.

nvcc --version

# Prints something like this. Version 12.1 is the Cuda version configured(if multiple versions are installed)

# nvcc: NVIDIA (R) Cuda compiler driver
# Copyright (c) 2005-2023 NVIDIA Corporation
# Built on Wed_Feb__8_05:53:42_Coordinated_Universal_Time_2023
# Cuda compilation tools, release 12.1, V12.1.66
# Build cuda_12.1.r12.1/compiler.32415258_0

# View the highest version of Cuda your GPU supports.
nvidia-smi
```

Find it's supported Pytorch version to install

```sh
python
python -m venv venv
source venv/Scripts/activate

pip uninstall torch torchvision torchaudio -y

pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121 --use-deprecated=legacy-resolver
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install -r requirements.txt
pip install torchsde
```

### Run app

```sh
python main.py
```

split terminal
focus terminal
new terminal beside
new terminal same workspace
toggle size

https://emeritus.org/blog/ai-and-ml-machine-learning-projects/

masterpiece, model, beautiful girl, pretty face, seductive, large breasts

#########################
#########################
#########################

## Setup

```sh
$ which conda
/c/ProgramData/anaconda3/Scripts/conda

$ conda --version
conda 24.5.0

# Highly recommend that pip & python are installed/managed by anaconda.
# Worth uninstall python/pip entirely to ensure this is the case.
$ pip --version
pip 24.0 from C:\ProgramData\anaconda3\Lib\site-packages\pip (python 3.11)
$ which pip
/c/ProgramData/anaconda3/Scripts/pip

$ python --version
Python 3.11.7
$ which python
/c/ProgramData/anaconda3/python

```

```sh
# Install the CUDA built primary torch libs so other packages don't complain later.
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install torchsde
pip install -r requirements.txt
```

```sh
# Verfiy CUDA Installation works
python
import torch
x = torch.rand(5, 3)
print(x)
# Should print this.
# tensor([[0.3380, 0.3845, 0.3217],
#         [0.8337, 0.9050, 0.2650],
#         [0.2979, 0.7141, 0.9069],
#         [0.1449, 0.1132, 0.1375],
#         [0.4675, 0.3947, 0.1426]])
```

```sh
docker build .
docker build -t primetimetran/comfy .
docker images
docker run IMAGE_ID -p 8080:8188 --gpus all

docker build -t primetimetran/comfy . && IMAGE_ID=$(docker images | awk 'NR==2 {print $3}') && docker run -p 8080:8188 $IMAGE_ID
```

```sh
# Run container from image and map ports
docker run IMAGE_ID -p 8080:8188

# Pass CLI arguments before image_id
docker run --platform=linux/x86_64 -p 808080:8188 --gpus all 3acc6c7db9dc
docker exec -it CONTAINER_ID /bin/bash
```

- Install package before running container
  - Use wrapper.sh
  - Install additional pacakges after image is built

```sh
docker run -p 8080:8188 IMAGE_ID "<additional-package>"

docker run -p 8080:8188 --gpus all -e ADDITIONAL_PACKAGES="" IMAGE_ID
```

#########################
#########################
#########################

- If using Conda to manage environments.

```sh
conda env create -n comfy --file=environment.yml

# If you failed to install previously you'll need to remove the environment before trying to install again.
# conda remove env -n comfy -y
```

## Fix Requirements.txt issues

- Create requirements.in
- Create convert_requirements.txt

```sh
with open('requirements-windows.txt', 'r') as f:
    lines = f.readlines()

with open('requirements.in', 'w') as f:
    for line in lines:
        if line.startswith('#') or not line.strip():
            continue
        package = line.split('==')[0].split('>=')[0].split('<')[0].strip()
        f.write(package + '\n')
```

- Run

```sh
python convert_requirements.txt
```

- Install & use pip compil

```sh
pip install pip-tools
pip-compile requirements.in
```
