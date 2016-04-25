FROM node:latest

ADD ./files /feedify

WORKDIR /feedify/

# Cleaning present modules
RUN rm -rfv ./node-modules/*
RUN rm -rfv ./app/bower_components/*

RUN npm install -g bower
RUN echo '{ "allow_root": true, "interactive": false }' > /root/.bowerrc
RUN npm install
RUN bower install

EXPOSE 8000

CMD ["node", "server.js"]
