# # Install dependencies only when needed
# FROM node:18-alpine

# # Create a directory where our app will be placed
# RUN mkdir -p /app

# # Change directory so that our commands run inside this new dir
# WORKDIR /app

# # Copy dependency definitions
# COPY package.json /app
# COPY yarn.lock /app

# RUN apk add --no-cache git openssh
# # Install dependecies
# RUN npm install

# COPY . /app

# RUN npm run build

# # Expose the port the app runs in
# EXPOSE 3030

# # Serve the app
# CMD ["npm", "run", "start"]



# FROM node:18-alpine

# RUN apt-get update -y && apt-get install -y \
#     rsync

# # Add docusaurus config
# ADD docusaurus /documentation

# # Set our working directory
# WORKDIR /documentation

# # Node
# RUN npm ci

# # Expose port for local development
# EXPOSE 3000

FROM node:lts

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]