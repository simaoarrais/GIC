cd k8s
kubectl delete -f namespace.yaml
kubectl delete -f api-deployment.yaml
kubectl delete -f api-svc.yaml
kubectl delete -f client-deployment.yaml
kubectl delete -f client-svc.yaml