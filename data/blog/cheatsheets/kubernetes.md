---
draft: false
date: 2017-11-12
title: 'Cheat Sheet: Kubernetes commands/shortcuts'
summary: 'Kubernetes commands to get you up and running quick & easy.'
tags: ['Cheat Sheet', 'Kubernetes']
---

# Introduction

Start local cluster

```sh
minikube start
```

Check kubernetes version

```sh
kubectl version
```

Check nodes

```sh
kubectl get nodes
```

Create a deployment using image `primetimetran/micro-client`

```sh
kubectl create deployment hello-world --image=primetimetran/micro-client
```

View status of deployments

```sh
kubectl get deployments
```

Open proxy to cluster from host

```sh
echo -e "\n\n\n\e[92mStarting Proxy. After starting it will not output a response. Please click the first Terminal Tab\n";
kubectl proxy
```

Check if proxy allows access to cluster VPN via host machine

```sh
curl http://localhost:8001/version
```

View pod status

```sh
kubectl get pods
```

Setup `POD_NAME` env variable to check namespace momentarily

```sh
export POD_NAME=
```

```sh
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/
```

```sh
kubectl get pods
```

View more detailed information about pods

```sh
kubectl describe pods
```

```sh
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/proxy/
```

View logs from pod

```sh
kubectl logs $POD_NAME
```

Execute commands on `POD_NAME`

```sh
kubectl exec $POD_NAME -- env
```

Open shell to `POD_NAME`

```sh
kubectl exec -ti $POD_NAME -- /bin/sh
```

## Expose

k get pods

kubectl get services

Expose deployment `deployment/hello-world` on port 80 to host machine

```sh
kubectl expose deployment/hello-world --type="NodePort" --port 80
```

# Conclusion
