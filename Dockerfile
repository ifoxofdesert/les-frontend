FROM node:20.12.0

ENV HOST='0.0.0.0'
ENV PORT='3000'

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY package.json /usr/src/nuxt-app
COPY . /usr/src/nuxt-app/


RUN yarn
RUN yarn build

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]
