cd ./k8s

# Namespace
kubectl delete -f namespace.yaml

# Api
kubectl delete -f api-svc.yaml
kubectl delete -f api-deployment.yaml

# Client
kubectl delete -f client-svc.yaml
kubectl delete -f client-deployment.yaml

# Mongodb
kubectl delete -f mongodb-svc.yaml
kubectl delete -f mongodb-statefulset.yaml

# Ingress
kubectl delete -f ingress.yaml