# MEA2N + User Authentification avec JWT

Une application MEAN simple utilisant Angular 2, avec une authentification intégrée à l'aide de JWT (Web Tokens) JSON.

## Usage

 Simplement "npm install" vos dépendances, puis démarrez votre mongodb en ouvrant deux lignes de commandes et en exécutant les deux commandes suivantes(Changer le chemin en fonction du dossier dans lequelle vous avez installé MongoDb):
`C: \ DevelopeWithVertin \ MEAN \ env \ mongodb \ bin \ mongod.exe - chemin C: \ DevelopeWithVertin \ MEAN \ env \ data` et` C: \ DevelopeWithVertin \ MEAN \ env \ mongodb \ bin \ mongo.exe` puis exécutez `npm start`.
  Cela démarre un serveur local, lance pm2 et génére le dossier dist Angular 2. Dans votre navigateur, allez à localhost: 3000 pour voir l'application. Les modifications seront rechargées en direct dans votre navigateur. Pour arrêter, tapez `ctrl + c`, puis` pm2 stop 0`. Cela va couper votre serveur local et arrêter les builds ng

## Details

Dans la racine du projet on créer un dossier http qui contient un autre dossier nommé controllers et middleware.

Ce dernier contient des controllers de 
 + l'utilisateur : user.js 
 + le mouvement  : mouvement.js
 + le chat       : chat.js

Chaque controller contient le routing des différentes méthodes qui vont interagir avec la base de données a savoir : get, post, put ou delete...(exemple voir mouvement)

Middelware contient un fichier auth.js qui va développer une fonction verify token. cette méthode prends le login tapé par l'utilisateur ensuite elle va décrypter le mot de passe de la base pour faire la comparaison entre les deux. 


Le dossier models se compose des trois schéma qui vont être utilisés au sein de notre projet,et qui vont permettre de créer des collections dans la base MongoDb tout en définissant les attributs nécessaires de chaque model. 

Le dossier config contient le fichier token, ce dernier définie le chemin pour la connection avec la base et aussi la clé sécrète de jwt qui vas nous permettre de générer un hash


/*************/


Passons maintenant à la partie front-end celle d'angular.


#SERVICE
on a créer trois service : 
auth.service.ts  
mouv.service.ts
chat.service

Ces services vont nous permettre de faire une correspondance entre les méthodes déjà défini sur nos controllers  et les méthodes du services. Ensuite on pourra les exploiter dans nos components 


#COMPONENT
Pour realiser l'authentification on avait besoin de créer deux components:
-register: ce dernier vas assurer la partie enregistrement de nouveau utilisateur
-login: est pour permettre a un utilisateur déjà enregistrer

Pour gérer nos transaction ou mouvement(retrait/virement) on a créé cinq components:
- home : le composant qui vas afficher l'interface ou il y a un menu pour choisir son action
- mouvement : ce composant liste tout les mouvement propose différente opérations sur le compte
- mouvement-create : pour ajouter nouveau composant
- mouvement-détail: affiche les détail du mouvement
- mouvement-edit: pour modifier un mouvement 

Finalement arrive le component du chat qui servira à implémenter la partie chat

#Routing
Ensuite on a créé un fichier app-routing.module.ts afin de définir toutes les routes (PATH) ou redirection dont on aura besoin, ceci est pour permettre la navigation entre différents components. 


## Contributions

Pull requests always welcome.
