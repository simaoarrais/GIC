cd ./k8s

# Namespace
kubectl apply -f namespace.yaml

# Api
kubectl apply -f api-svc.yaml
kubectl apply -f api-deployment.yaml

# Client
kubectl apply -f client-svc.yaml
kubectl apply -f client-deployment.yaml

# Mongodb
kubectl apply -f mongodb-svc.yaml
kubectl apply -f mongodb-statefulset.yaml
