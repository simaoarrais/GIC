cd ./k8s

# Namespace
kubectl apply -f namespace.yaml

# Mongodb
kubectl apply -f mongodb-svc.yaml
kubectl apply -f mongodb-statefulset.yaml

# Api
kubectl apply -f api-svc.yaml
kubectl apply -f api-deployment.yaml

# Client
kubectl apply -f client-svc.yaml
kubectl apply -f client-deployment.yaml

# Autoscalers
kubectl apply -f mongodb-autoscaling.yaml
kubectl apply -f api-autoscaling.yaml
kubectl apply -f client-autoscaling.yaml
