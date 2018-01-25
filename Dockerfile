FROM node:6
RUN npm install -g pm2
WORKDIR /server
COPY . .
EXPOSE 3000
CMD [ "pm2", "start", "server.js" ]
