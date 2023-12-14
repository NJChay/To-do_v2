FROM node:20.10.0 as build-step
WORKDIR /app
RUN npm cache clean -f

COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:latest as nginx
COPY --from=build-step /app/dist/todo/browser /usr/share/nginx/html
COPY ./nginx  /etc/nginx/conf.d/
EXPOSE 80