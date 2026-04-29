# 🛠 Spec Forge (Confluence Forge Infrastructure)

This repository contains the Atlassian Forge configuration and CI/CD pipeline for the **Spec Forge** application.

The actual frontend source code is maintained in a separate repository (`spec-forge-front`). This repository acts as the
bridge for building, packaging, and deploying the app to the Atlassian Marketplace.

## 🏛️ Architecture

We use separate manifests with unique app.ids for Production (**prod/manifest.yml**) and Staging/Local testing
(**staging/manifest.yml**).

> **Note for Contributors:** Never use the production app.id for local development.

## 🔄 CI/CD Pipeline

Creating a Git tag (e.g., v1.0.0) triggers a GitHub Action that automatically builds the Vite frontend and deploys the
app to Forge production.

## ⚖️ License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

### Special licensing

If you require **special licensing conditions** (e.g. commercial use, closed-source distribution, or other exceptions),
**you must contact the project author directly** to discuss alternative licensing options.