# Base image
FROM node:16.14.2-alpine as build

# Set working directory
WORKDIR /api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Specify port number
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
