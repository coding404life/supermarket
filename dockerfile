# Base Stage
FROM node:18-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
EXPOSE 3000

# Development Stage
FROM base AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY . .
CMD ["yarn", "run", "dev"]
