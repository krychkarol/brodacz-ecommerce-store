FROM node:18-alpine

WORKDIR /brodacz

COPY public/ /brodacz/public
COPY src/ /brodacz/src
COPY package.json /brodacz/

RUN npm install

CMD ["npm", "start"]