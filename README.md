# 🌰 Naqaresh Bilingual Website

This is a bilingual (English & Arabic) responsive website for **Naqaresh Snacks**.  
It includes animated sections, product filtering, and a language toggle system that switches between two separate HTML pages.

---

## 📖 Features

- Responsive navigation with open/close toggle
- Scroll animations (via ScrollReveal)
- Product filter by size
- Automatic product image slideshow on homepage
- Scroll-up button
- Active menu highlighting based on scroll
- **Bilingual support** (English & Arabic) using two HTML files:
  - `index.html` → English version
  - `index-ar.html` → Arabic version
- **Language toggle button**:
  - Shows `عربي` (in Marhey font) on English page → navigates to Arabic page
  - Shows `English` (in Poppins font) on Arabic page → navigates to English page
- Arabic version uses `Marhey` font with larger text for readability

---

## ⚙️ Setup

1. Clone or unzip the project files:

   ```bash
   git clone https://github.com/rimarayya/naqaresh-website
   ```

   or extract `NAQARESH.zip`.

2. Open `index.html` in your browser for the English version.  
   Open `index-ar.html` for the Arabic version.

3. Fonts are loaded via [Google Fonts](https://fonts.google.com/):
   - **Poppins** (English)
   - **Titan One** (English titles)
   - **Marhey** (Arabic)

---

## 🌐 Language Toggle

- The language toggle button is located in the navigation bar.
- On **English page (`index.html`)** → Button text is `عربي` (Marhey font).
- On **Arabic page (`index-ar.html`)** → Button text is `English` (Poppins font).
- Clicking the button switches between the two HTML pages.

---

## 🎨 Styling Notes

- `.home__title`, `.banner__items span`, `.footer__logo` are overridden in Arabic mode to use **Marhey** instead of Titan One.
- Arabic text has slightly **larger font-size** and increased `line-height` for readability.
- Direction (`dir="rtl"`) is applied in `index-ar.html` for proper alignment.

---

## 📷 Screenshots

### English Version

![English Screenshot](assets/img/overviewEn.png)

### Arabic Version

![Arabic Screenshot](assets/img/overviewAr.png)

---

## 📂 Project Structure

```
NAQARESH/
│── index.html          # English homepage
│── index-ar.html       # Arabic homepage
│── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   ├── js/
│   │   └── main.js     # JavaScript file
│   ├── img/            # Project images (products, logos, etc.)
│   │   ├── overviewEn.png
│   │   ├── overviewAr.png
│   │   └── etc...
│   └── fonts/          # Custom fonts (if any)
│
└── README.md           # Project documentation
```

---
