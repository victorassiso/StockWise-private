FROM node:20.3.0

WORKDIR /usr/app
COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 3333
CMD ["npm", "run", "start"]