FROM node:14-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# ENV port 
EXPOSE 3000
CMD ["node", "server.js"]