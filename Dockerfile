FROM node:18.15-alpine3.17
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]