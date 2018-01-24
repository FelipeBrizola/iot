FROM node:6
WORKDIR /server
COPY . .
RUN npm install
EXPOSE 3000
RUN npm start
