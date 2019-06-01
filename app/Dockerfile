FROM node:10.15
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["./wait-for-it.sh", "db:3306", "-t", "0", "-s", "--", "npm", "start"]