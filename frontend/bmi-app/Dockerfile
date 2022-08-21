FROM node:latest as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm i
RUN npm run build


FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/ngnix/html