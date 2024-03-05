FROM node:current-alpine3.18

WORKDIR /app

COPY vite_fast/ ./

RUN apk update

CMD ["yarn", "dev", "--host"]
