# Docker

## Images

### Create image using current directory's Dockerfile

```sh
docker build .
```

### Build image with a name

```sh
docker build . -t my-image
```

### Tag with repo name, image name, and version.

```sh
docker build . -t my-repo/my-image:1.0
```

### Tag an image and push it

```sh
docker -t my-image:tagname my-repo:tagname
docker push my-repo:tagname
```

### Load zip file into Docker

```sh
docker save -o comfy_image.tar primetimetran/comfy:latest
```

## Containers

### Run container using image IMAGE_ID & map container port `8188` to host port `80`

```sh
docker run IMAGE_ID -p 80:8188
```

### SSH into container IMAGE_ID

```sh
docker exec -it IMAGE_ID /bin/bash
```

### View logs of CONTAINER_ID

```sh
docker logs CONTAINER_ID
```

### View Docker Containers

### Stop Container

```sh
docker stop my-container
```

### Start Container

```sh
docker start my-container
```

### CLI Arguments

#### Detached mode

```sh
docker run IMAGE_ID -d
```

#### Running with NVIDIA

```sh
docker run IMAGE_ID --gpus all
```

## Workflows

### Build & Immediately Run

```sh
docker build -t comfy .

# One liner
docker build -t comfy . && IMAGE_ID=$(docker images | awk 'NR==2 {print $3}') && docker run --platform=linux/amd64 -p 8080:80 $IMAGE_ID
```

### Stop containers & remove. remove images & builds.

```sh
docker container prune
docker image prune
docker image prune -a
docker volume prune
docker network prune
docker system prune
docker system prune -a --volumes

# One liner
docker rm -f $(docker ps -aq) && docker rmi -f $(docker images -aq) && docker builder prune -a -f && docker image prune -a -y
```
