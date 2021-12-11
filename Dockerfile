# Use node 14
FROM node:14

# Create app Work Directory
WORKDIR /app

# Copy app dependencies file into the Work Directory
COPY package.json /app

# Install app dependencies file
RUN npm install

# Copy the rest of the proyect into the Work Directory
COPY . /app

# Bind app with port 3000
EXPOSE 3000

# Commands to run
CMD ["node", "./bin/www"]