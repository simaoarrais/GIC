# Build and push the api container
cd ./api
docker build -t gic_api:latest .
docker tag gic_api:latest simaoarrais/gic_api:latest
docker push simaoarrais/gic_api:latest
# Build and push the client container
cd ../client
docker build -t gic_client:latest .
docker tag gic_client:latest simaoarrais/gic_client:latest
docker push simaoarrais/gic_client:latest