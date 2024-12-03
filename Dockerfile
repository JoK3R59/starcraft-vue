# Étape 1 : Build (construction du projet)
FROM node:14.21.3-alpine3.16 AS build-stage

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tout le contenu du projet dans le conteneur
COPY . /app/

# Construire le projet Vue.js pour la production
RUN npm run build

# Étape 2 : Serveur web (Nginx pour servir l'application)
FROM nginx:stable-alpine AS production-stage

# Copier le fichier de configuration personnalisé de Nginx si nécessaire
COPY ./nginx/prod.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers construits depuis la première étape vers le dossier de Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exposer le port par lequel l'application sera accessible
EXPOSE 80

# Lancer Nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]
