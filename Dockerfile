FROM node:16.13.0 as build-step
WORKDIR /dist/src/app
RUN npm cache clean -f

COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:latest as nginx
COPY --from=build-step /dist/src/app/dist/todo /usr/share/nginx/html
COPY ./nginx  /etc/nginx/conf.d/
EXPOSE 443