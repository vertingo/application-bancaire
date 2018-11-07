# MEA2N + User Authentification avec JWT

Une application MEAN simple utilisant Angular 2, avec une authentification intégrée à l'aide de JWT (Web Tokens) JSON.

## Usage

 Simplement "npm install" installe vos dépendances, puis démarrez votre MongoDb en ouvrant deux lignes de commandes et en exécutant les deux commandes suivantes(Changer le chemin en fonction du dossier dans lequel vous avez installé MongoDb):
La commande sans les accolades:  

```
{C:\DevelopeWithVertin\MEAN\env\mongodb\bin\mongod.exe --dbpath C:\DevelopeWithVertin\MEAN\env\data} 
et
{C:\DevelopeWithVertin\MEAN\env\mongodb\bin\mongo.exe}
puis exécutez la commande npm start.
```

Cela démarre un serveur local, lance le processus pm2 et génère le dossier dist Angular 2.
Dans votre navigateur, allez à localhost: 3000 pour voir l'application. Les modifications seront rechargées en direct dans votre navigateur. Pour arrêter, tapez 'ctrl + c', puis 'pm2 stop 0'. Cela va couper votre serveur local et arrêter les builds ng

## Détails

Dans la racine du projet on créer un dossier http qui contient un autre dossier nommé controlleurs et middleware.

Ce dernier contient des controlleurs de 
 + l'utilisateur : user.js 
 + le mouvement  : mouvement.js
 + le chat       : chat.js

Chaque controlleur contient le routing des différentes méthodes qui vont interagir avec la base de données a savoir : get, post, put ou delete...(exemple voir mouvement)

Middleware contient un fichier auth.js qui va développer une fonction verify token. cette méthode prends le login tapé par l'utilisateur ensuite elle va décrypter le mot de passe de la base pour faire la comparaison entre les deux. 

Le dossier models se compose des trois schéma qui vont être utilisés au sein de notre projet,et qui vont permettre de créer des collections dans la base MongoDb tout en définissant les attributs nécessaires de chaque model. 

Le dossier config contient le fichier token, ce dernier définie le chemin pour la connexion avec la base et aussi la clé sécrète de jwt qui vas nous permettre de générer un hash

/*************/

Passons maintenant à la partie front-end celle d'angular.

#SERVICE
On a créer trois services à l'aide de la commande ng generate service -nom_du_service:
- auth.service.ts  
- mouv.service.ts
- chat.service

Ces services vont nous permettre de faire une correspondance entre les méthodes déjà défini sur nos controlleurs  et les méthodes du services. Ensuite on pourra les exploiter dans nos components 

#COMPONENT
Pour réaliser l'authentification on avait besoin de créer deux components à l'aide de la commande:
ng generate component -nom_du_component

- register: ce dernier vas assurer la partie enregistrement de nouveau utilisateur
- login: est pour permettre a un utilisateur déjà enregistrer

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

```
A little boost follow us on YouTube and Facebook!
[You Tube]: https://www.youtube.com/channel/UC2g_-ipVjit6ZlACPWG4JvA?sub_confirmation=1
[Facebook]: https://www.facebook.com/vertingo/
```

<p align="center">
  <a href="https://www.youtube.com/channel/UC2g_-ipVjit6ZlACPWG4JvA?sub_confirmation=1"><img src="https://platform-media.herokuapp.com/assets/images/reseaux-sociaux/youtube2.png" width="400" height="250"/></a>
  <a href="https://www.facebook.com/vertingo/"><img src="https://platform-media.herokuapp.com/assets/images/reseaux-sociaux/rejoins_nous.png" width="400" height="250"/></a>
</p>

