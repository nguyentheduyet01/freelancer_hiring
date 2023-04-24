FROM node:18.15.0-slim AS build

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./ ./

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]