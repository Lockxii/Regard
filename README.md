# Regard

**Regard** est une application web moderne conçue pour vous aider à reprendre le contrôle de vos finances personnelles. Elle permet de centraliser la gestion de vos abonnements, de suivre vos dépenses ponctuelles et de fixer des objectifs d'épargne clairs.

![Regard Dashboard](public/window.svg)

## 🚀 Fonctionnalités

*   **Tableau de Bord Intuitif** : Une vue d'ensemble de vos finances, incluant le total de vos abonnements mensuels, vos économies actuelles et vos dernières dépenses.
*   **Gestion des Abonnements** : Ajoutez et suivez vos abonnements récurrents (Netflix, Spotify, Internet, etc.) avec distinction des cycles de paiement (mensuel/annuel).
*   **Suivi des Dépenses** : Enregistrez vos dépenses quotidiennes pour mieux comprendre où va votre argent.
*   **Objectifs d'Épargne** : Fixez des objectifs (ex: "Voyage au Japon", "Nouvelle voiture") et visualisez votre progression grâce à des barres de progression dynamiques.
*   **Calendrier des Prélèvements** : Anticipez vos factures grâce à une vue calendrier affichant les dates de prélèvement de vos abonnements.
*   **Authentification Sécurisée** : Inscription et connexion sécurisées pour protéger vos données personnelles.

## 🛠 Stack Technique

*   **Framework** : [Next.js 15+](https://nextjs.org/) (App Router)
*   **Langage** : TypeScript
*   **Styling** : Tailwind CSS (Design "Neo-Brutalism")
*   **Base de Données** : PostgreSQL (via [Neon DB](https://neon.tech/))
*   **ORM** : Drizzle ORM
*   **Authentification** : NextAuth.js (v5 Beta)
*   **Déploiement** : Compatible Vercel

## 📦 Installation & Démarrage

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/Lockxii/Regard.git
    cd Regard
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configuration des variables d'environnement**
    Créez un fichier `.env` à la racine du projet et ajoutez vos clés (voir `.env.example` si disponible ou demandez à l'administrateur) :
    ```env
    DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
    AUTH_SECRET="votre_secret_genere_aleatoirement"
    ```

4.  **Initialiser la base de données**
    ```bash
    npx drizzle-kit push
    ```

5.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

    L'application sera accessible sur `http://localhost:3000`.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue pour discuter des changements majeurs avant de soumettre une Pull Request.

## 📄 Licence

Ce projet est sous licence MIT.