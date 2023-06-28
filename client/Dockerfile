# Base image
FROM node:16.14.2-alpine as build

# Set working directory
WORKDIR /client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build React app
RUN npm run build

# Specify port number
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
