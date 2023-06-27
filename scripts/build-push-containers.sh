# Build and push the api container
cd ../api
docker build . -t simaoarrais/gic_api:latest
docker tag client:latest simaoarrais/gic_api:latest
docker push simaoarrais/gic_api:latest

# Build and push the client container
cd ../client
docker build . -t simaoarrais/gic_client:latest
docker tag api:latest simaoarrais/gic_client:latest
docker push simaoarrais/gic_client:latest