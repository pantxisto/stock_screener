FROM mongo:5.0.2

ENV MONGO_INITDB_ROOT_USERNAME=stock
ENV MONGO_INITDB_ROOT_PASSWORD=stock
ENV MONGO_INITDB_DATABASE=stock_screener

COPY ./initData.js /docker-entrypoint-initdb.d/

RUN chmod o+rw /docker-entrypoint-initdb.d/initData.js

EXPOSE 27017