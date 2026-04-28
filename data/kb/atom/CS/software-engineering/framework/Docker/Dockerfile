FROM --platform=linux/x86_64 nvidia/cuda:12.1.1-runtime-ubuntu22.04

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -O https://repo.anaconda.com/miniconda/Miniconda3-py311_24.4.0-0-Linux-x86_64.sh \
    && bash Miniconda3-py311_24.4.0-0-Linux-x86_64.sh -b -p /opt/miniconda \
    && rm Miniconda3-py311_24.4.0-0-Linux-x86_64.sh

ENV PATH="/opt/miniconda/bin:$PATH"