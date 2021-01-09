# AKSの準備

AKSをデプロイ後、クレデンシャルを取得

RG_NAME
AKS_NAME

```
az aks get-credentials -g $RG_NAME -n $AKS_NAME
```


kubectl create ns api
kubectl create ns web

kubectl create secret generic sql \
    --namespace api \
    --from-literal=SQL_USER=myadmin@keomizosingle \
    --from-literal=SQL_PASSWORD=@dmin12345678\
    --from-literal=SQL_SERVER=keomizosingle.postgres.database.azure.com \
    --from-literal=SQL_DBNAME=mydrivingdb

kubectl apply -f poi.yaml
kubectl apply -f trips.yaml
kubectl apply -f tripviewer.yaml
kubectl apply -f user-java.yaml
kubectl apply -f userprofile.yaml

kubectl exec poi-deployment-5b8c854cfb-2tcwj -n api -- curl http://localhost:8080/api/poi/healthcheck

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

kubectl create ns ingress-basic
helm install nginx-ingress ingress-nginx/ingress-nginx \
    -f nginx-helm-values.yaml \
    --namespace ingress-basic \
    --set controller.replicaCount=2 \
    --set controller.nodeSelector."beta\.kubernetes\.io/os"=linux \
    --set defaultBackend.nodeSelector."beta\.kubernetes\.io/os"=linux \
    --set controller.admissionWebhooks.patch.nodeSelector."beta\.kubernetes\.io/os"=linux

kubectl --namespace ingress-basic get services -o wide -w nginx-ingress-ingress-nginx-controller

