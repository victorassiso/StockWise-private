FROM node:20.3.0 AS builder

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

# as build step

FROM node:20.3.0

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app ./

EXPOSE 3333

CMD ["npm", "run", "start:migrate"]