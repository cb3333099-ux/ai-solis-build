# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/23b31fef-4699-459d-8140-a390459df1c3

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/23b31fef-4699-459d-8140-a390459df1c3) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/23b31fef-4699-459d-8140-a390459df1c3) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 📊 Pāṇini Linguistics — PowerPoint Presentation Generator

This repository also includes a Python script that automatically generates a professional
10-slide academic PowerPoint presentation titled **"Contribution of Pāṇini to Linguistics"**.

### Prerequisites

- Python 3.8 or higher
- pip

### Setup

```bash
# Install the required Python dependency
pip install -r requirements.txt
```

### Generate the Presentation

```bash
python create_presentation.py
```

This will create a file named **`panini_linguistics_presentation.pptx`** in the current
directory. Open it with Microsoft PowerPoint, LibreOffice Impress, or Google Slides.

### Slide Overview

| # | Title |
|---|-------|
| 1 | Title Slide — "Contribution of Pāṇini to Linguistics" |
| 2 | Introduction — Background of Pāṇini |
| 3 | Aṣṭādhyāyī — His Main Work |
| 4 | Scientific and Logical Approach |
| 5 | Generative Grammar Concept |
| 6 | Use of Meta-language |
| 7 | Phonetics and Sound Classification |
| 8 | Morphology (Word Formation) |
| 9 | Rule Ordering and Influence on Modern Linguistics |
| 10 | Conclusion |

### Features

- **Professional design** — deep navy blue, white, and gold academic colour scheme
- **Paragraph-style content** — academic prose, not just bullet points
- **Speaker notes** — comprehensive notes on every slide
- **Stat cards** — key numbers highlighted on relevant slides
- **Image placeholders** — clearly labelled boxes ready to be replaced with images
- **Widescreen (16:9)** — optimised for modern display and projection

### Adding Images

Each content slide contains a labelled image placeholder on the right side. To replace a
placeholder with a real image, open the `.pptx` file in PowerPoint, click the placeholder
box, delete it, and insert your image (`Insert → Pictures`). Recommended images:

- Pāṇini statue or artistic depiction
- Sanskrit manuscripts or palm-leaf texts
- Phonetics / articulatory diagrams
- Grammar tree / generative grammar illustrations
- Timeline of linguistic history

### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| [python-pptx](https://python-pptx.readthedocs.io/) | ≥ 0.6.23 | PowerPoint generation |
