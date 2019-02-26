FROM node

WORKDIR /usr/src/app

ARG github_key=none
ENV GITHUB_KEY=$github_key

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]
