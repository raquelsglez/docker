FROM node:latest

#indicamos donde vamos a guardar la dockerizacion con la que vamos a trabajar
# -p (si no existe que la cree, para que no de error)
RUN mkdir -p /home/appnode

#indicamos donde nos vamos a mover, hacia donde tenemos que ir para luego trabajar, la dirección donde vamos a trabajar
WORKDIR /home/appnode

COPY package*.json . /

RUN npm install

#todos los archivos que tenemos donde estamos trabajando, nos lo copie de aquí al otro sitio -> , a /home/appnode (. .)
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
