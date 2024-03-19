FROM node:16.20.1
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm","run","start" ]
