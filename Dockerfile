FROM node:14.0-slim as base

#---------- PRE-REQS ----------
FROM base as backend

RUN useradd -ms /bin/bash sensor
WORKDIR /home/sensor/backend

COPY backend/*.json ./
COPY backend/.env ./

COPY backend/src ./src/

RUN npm install  --silent



FROM base as frontend
RUN useradd -ms /bin/bash sensor
WORKDIR /home/sensor/frontend

COPY frontend/*.json ./

COPY frontend/src ./src/
COPY frontend/public ./public/

RUN npm install  --silent