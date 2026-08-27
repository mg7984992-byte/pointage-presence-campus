# Pointo — Pointage & Présence Campus

Plateforme de gestion du pointage et de la présence des étudiants et du staff.

## Stack technique

- **Frontend** : React + TypeScript + Tailwind CSS
- **Backend** : NestJS
- **Base de données** : MySQL + Prisma

## Structure du projet

```
pointage-presence-campus/
├── src/            → frontend (React)
├── database/       → schéma Prisma, migrations, seed
└── README.md
```

## Installation de la base de données (dossier `database/`)

1. Installer les dépendances :
   ```
   cd database
   npm install
   ```

2. Créer une base MySQL nommée `pointage_campus` (via phpMyAdmin ou en ligne de commande).

3. Copier `.env.example` en `.env` et adapter les identifiants si besoin :
   ```
   DATABASE_URL="mysql://root:@localhost:3306/pointage_campus"
   ```

4. Appliquer les migrations (crée les 8 tables) :
   ```
   npx prisma migrate dev
   ```

5. Remplir la base avec des données de test :
   ```
   npx prisma db seed
   ```

6. (Optionnel) Visualiser les données :
   ```
   npx prisma studio
   ```

## Comptes de test créés par le seed

| Rôle     | Email               |
|----------|---------------------|
| Admin    | admin@campus.sn     |
| Étudiant | etudiant@campus.sn  |

*(mots de passe placeholders — le vrai système d'authentification est géré par le backend)*

## Équipe

- **Membre 1** — Frontend & expérience utilisateur
- **Membre 2** — Backend & API
- **Membre 3** — Base de données & infrastructure
