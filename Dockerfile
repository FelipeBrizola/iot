FROM mhart/alpine-node:6
WORKDIR /home/briza/iot
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]