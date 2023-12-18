# Usa una imagen base 
FROM node:20.10-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el contenido del directorio actual al directorio /app en el contenedor
COPY . .

# Expone el puerto 8000
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]