# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to /app
COPY . .

# Build the app
RUN npm run build --prod

# Expose the port that the app is running on
EXPOSE 4200

# Start the app
CMD ["npm", "start"]
