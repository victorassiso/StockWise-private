FROM node:20.3.0 AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# as build step

FROM node:20.3.0

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]