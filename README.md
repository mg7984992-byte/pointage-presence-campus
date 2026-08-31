# Backend — Plateforme de Pointage

Node.js + Express + TypeScript + Sequelize + MySQL

## Installation

```bash
cd backend
npm install
cp .env.example .env   # puis renseigner DB_USER, DB_PASSWORD, JWT_SECRET...
```

Créer la base de données MySQL (une seule fois) :

```sql
CREATE DATABASE plateforme_pointage CHARACTER SET utf8mb4;
```

Lancer le serveur en développement (crée/synchronise automatiquement les tables) :

```bash
npm run dev
```

## Schéma de la base de données

```
users
├── id            INT UNSIGNED, PK, AUTO_INCREMENT
├── nom           VARCHAR(100)
├── prenom        VARCHAR(100)
├── email         VARCHAR(150), UNIQUE
├── mot_de_passe  VARCHAR(255)   -- haché avec bcrypt
├── role          ENUM('admin','membre')
├── created_at, updated_at

pointage_sessions
├── id            INT UNSIGNED, PK, AUTO_INCREMENT
├── titre         VARCHAR(150)
├── description   TEXT (nullable)
├── date_debut    DATETIME
├── date_fin      DATETIME (nullable)
├── statut        ENUM('ouverte','fermee')
├── createur_id   INT UNSIGNED, FK -> users.id
├── created_at, updated_at

presences
├── id            INT UNSIGNED, PK, AUTO_INCREMENT
├── session_id    INT UNSIGNED, FK -> pointage_sessions.id (CASCADE)
├── user_id       INT UNSIGNED, FK -> users.id
├── heure_arrivee DATETIME (nullable)
├── heure_depart  DATETIME (nullable)
├── statut        ENUM('present','retard','absent')
├── created_at, updated_at
└── UNIQUE(session_id, user_id)   -- un pointage par utilisateur et par session
```

Relations : `User 1—N PointageSession` (créateur), `PointageSession 1—N Presence`, `User 1—N Presence`.

## Endpoints principaux

### Auth (`/api/auth`) — public
- `POST /register` — { nom, prenom, email, motDePasse } → { user, token }
- `POST /login` — { email, motDePasse } → { user, token }

### Users (`/api/users`) — requiert `Authorization: Bearer <token>`
- `GET /me` — profil courant
- `GET /` — liste (admin uniquement)
- `GET /:id`
- `PUT /:id`
- `DELETE /:id` (admin uniquement)

### Pointage (`/api/pointage`) — requiert `Authorization: Bearer <token>`
- `POST /sessions` — { titre, description?, dateDebut? } — crée une session
- `GET /sessions` — liste toutes les sessions
- `GET /sessions/:id` — détail + présences
- `PATCH /sessions/:id/fermer` — ferme la session
- `POST /sessions/:id/arrivee` — pointer son arrivée
- `POST /sessions/:id/depart` — pointer son départ
- `GET /sessions/:id/presences` — présences d'une session
- `GET /mes-presences` — historique de l'utilisateur connecté

## Sécurité
- Mots de passe hachés avec `bcryptjs` (10 rounds), jamais renvoyés au client.
- Authentification par JWT (`Authorization: Bearer <token>`), expiration configurable via `JWT_EXPIRES_IN`.
- Routes Users/Pointage protégées par `authMiddleware`, routes sensibles réservées à l'admin via `adminOnly`.
