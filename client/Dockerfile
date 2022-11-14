FROM node:alpine
WORKDIR /usr/src/client
COPY package*.json /usr/src/client/
RUN npm i -g nodemon
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]