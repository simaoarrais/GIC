cd ../k8s
kubectl apply -f namespace.yaml
kubectl apply -f api-svc.yaml
kubectl apply -f api-deployment.yaml
kubectl apply -f client-svc.yaml
kubectl apply -f client-deployment.yaml
