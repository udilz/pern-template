FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g bun
RUN bun install

EXPOSE 8000

CMD [ "bun", "dev" ]
