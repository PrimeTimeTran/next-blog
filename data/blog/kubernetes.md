---
title: 'Kubernetes'
date: '2022-09-02'
tags: ['Kubernetes']
draft: true
summary: 'Kubernetes'
layout: PostSimple
bibliography: references-data.bib
---

```sh
kubectl version
```

```sh
kubectl get nodes
```

```sh
kubectl create deployment hello-world --image=primetimetran/micro-client
```

```sh
kubectl get deployments
```

```sh
echo -e "\n\n\n\e[92mStarting Proxy. After starting it will not output a response. Please click the first Terminal Tab\n";
kubectl proxy
```

```sh
curl http://localhost:8001/version
```

```sh
kubectl get pods
```

```sh
export POD_NAME=
```

```sh
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/
```

```sh
kubectl get pods
```

```sh
kubectl describe pods
```

```sh
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME/proxy/
```

```sh
kubectl logs $POD_NAME
```

```sh
kubectl exec $POD_NAME -- env
```

```sh
kubectl exec -ti $POD_NAME -- /bin/sh
```

## Expose

k get pods

kubectl get services

kubectl expose deployment/hello-world --type="NodePort" --port 80
