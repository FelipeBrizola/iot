FROM node:6
RUN npm install -g pm2 && npm install
WORKDIR /server
COPY . .
EXPOSE 3000
RUN pm2 start server.js
