# Deployment Guide

This guide assumes you already have a GitHub account and that you want GitHub to publish the site automatically.

## 1. Create a new GitHub repository

Create a repository named `rodrigo-mdbook-portfolio`.

## 2. Upload the project files

Upload every file from this starter project into the root of the repository.

## 3. Replace your GitHub username

Open `book.toml` and replace `YOUR_GITHUB_USERNAME` with your real GitHub username in both links.

## 4. Enable GitHub Pages through Actions

In your GitHub repository:

- open **Settings**
- open **Pages**
- under **Build and deployment**, choose **GitHub Actions**

## 5. Commit changes

Once the files are uploaded, commit them to the `main` branch.

## 6. Watch the deployment

Open the **Actions** tab in GitHub. The workflow will install mdBook, install the Mermaid preprocessor, build the site, and publish it.

## 7. Open your live site

After the workflow succeeds, GitHub Pages will publish the book. The final address is usually:

`https://YOUR_GITHUB_USERNAME.github.io/rodrigo-mdbook-portfolio/`

## If the site does not render Mermaid diagrams

The workflow already installs `mdbook-mermaid`. If Mermaid blocks still do not appear, confirm that:

- the workflow succeeded
- `book.toml` still contains the Mermaid preprocessor section
- the Mermaid code fences use `mermaid`
