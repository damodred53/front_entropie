FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./

RUN npm ci --silent

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

