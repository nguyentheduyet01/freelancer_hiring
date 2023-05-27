FROM node:16.20.0-slim AS build
# Set working directory
WORKDIR /app
#
COPY package.json ./

COPY yarn.lock ./
# Same as npm install
RUN yarn install

COPY . /app

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
