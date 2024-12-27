FROM node:18

WORKDIR /app

COPY package*.json ./ 

RUN npm install --save --force
RUN npm install --save-dev --force

COPY ./prisma/ /app/prisma/
RUN npx prisma migrate dev --name "init docker"
RUN npx prisma generate

COPY . .

EXPOSE 3000 

CMD [ "npm","run","start:prod" ]