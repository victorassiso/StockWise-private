FROM node:20.3.0

WORKDIR /usr/app
COPY package.json package-lock.json ./

RUN npm install
RUN npx generate
RUN npx migrate dev

COPY . .

EXPOSE 3333
CMD ["npm", "run", "start"]