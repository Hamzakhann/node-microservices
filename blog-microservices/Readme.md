### configuration basic commands

- kubectl apply -f posts.yaml
- kubectl get pods

- kubectl delete -f infra/k8s/

- kubectl logs podname
- kubectl delete pod podname
- kubectl describe pod podname

- kubectl exec -it podname cmd-eg


### deployment commands

- kubectl get deployments
- kubectl describe deployment dep-name
- kubctl delete deployment dep-name
- kubectl rollout restart deployment dep-name
- kubectl get services

- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf