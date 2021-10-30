FROM node:16-alpine

VOLUME ./:/app
COPY . /app
WORKDIR /app

#RUN #sh -c "yarn install"
#RUN #sh -c " && yarn run start"

#ENTRYPOINT ["sh -c \"yarn install\"", "sh -c \" && yarn run start\""]
ENTRYPOINT["starter.sh"]
