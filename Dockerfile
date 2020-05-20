#FROM mysql:latest
#COPY ./dbscripts/apibase-db.sql /docker-entrypoint-initdb.d/
#ENV MYSQL_ROOT_PASSWORD root
#ENV MYSQL_DATABASE apibase
#EXPOSE 3308

FROM node:lts-alpine

# Create app directory
WORKDIR /opt/apibase

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /opt/apibase/

#RUN npm install
# If you are building your code for production
 RUN npm ci --only=production

# Bundle app source
COPY . /opt/apibase/

EXPOSE 8081
CMD [ "node", "server.js" ]