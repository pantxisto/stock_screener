FROM node:14.16.0

RUN apt-get update && apt-get install -y dos2unix

#DEPENDENCIES FOR PUPPETER
RUN apt-get install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils -y

WORKDIR /app

ENV ENVIRONMENT=DEVELOPMENT

ENV NODE_OPTIONS=--max-old-space-size=20000

COPY ./package.json /app

RUN npm install

COPY . /app

RUN dos2unix ./wait-for-it.sh && apt-get --purge remove -y dos2unix && rm -rf /var/lib/apt/lists/*

RUN chmod +x ./wait-for-it.sh

EXPOSE 3000
