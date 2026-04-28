# Create Base Docker Image

## Create Base NVIDIA/Cuda/Conda Image

Use Nvidia's base image so we don't have to install CUDA Drivers. Use python 3.11 so some dependencies don't complain.

```dockerfile
FROM --platform=linux/x86_64 nvidia/cuda:12.1.1-runtime-ubuntu22.04

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -O https://repo.anaconda.com/miniconda/Miniconda3-py311_24.4.0-0-Linux-x86_64.sh \
    && bash Miniconda3-py311_24.4.0-0-Linux-x86_64.sh -b -p /opt/miniconda \
    && rm Miniconda3-py311_24.4.0-0-Linux-x86_64.sh

ENV PATH="/opt/miniconda/bin:$PATH"
```

# Create Base Image

- Cuda 12.1, Miniconda3, Python 3.11, Ubuntu22.04

```sh
docker build -t base-cuda-conda .
docker pull nvidia/cuda:12.1.1-runtime-ubuntu22.04 && docker build -t base-cuda-conda .
```
