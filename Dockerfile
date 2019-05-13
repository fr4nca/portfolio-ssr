FROM node

WORKDIR /usr/src/app

ARG github_key=none
ENV GITHUB_KEY=$github_key

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
