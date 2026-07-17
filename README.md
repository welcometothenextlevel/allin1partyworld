# All in 1 Party World homepage redesign sample

Static, GitHub Pages-ready homepage redesign sample for the authorised All in 1 Party World website review.

## Project purpose

This project redesigns the existing All in 1 Party World homepage into a more polished, conversion-focused retail experience while keeping the real business information, category links, product names, product prices, store details, opening hours, testimonial and refund summary from the current live website.

## File structure

```text
.
├── index.html
├── styles.css
├── script.js
├── 404.html
├── README.md
├── .gitignore
└── assets/
    └── images/
```

## Preview locally

Open `index.html` directly in a browser. No backend, database, PHP, framework, package install or build step is required.

## Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set the source to the main branch and the root folder.
5. Save and wait for GitHub Pages to publish the static site.

## Product data

Product cards are stored in `script.js` inside the `products` array. Update product names, prices, image paths and live store URLs there.

All product links point to the corresponding live All in 1 Party World product pages. The sample does not include checkout; product cards intentionally send visitors to the live store.

## Images

Images were downloaded from publicly available assets on the existing All in 1 Party World site and saved in `assets/images/`.

Downloaded images include:

- Product images for 12 trending products
- Category images for Decorations, Hire Shop, Party Supplies, Festive, Gifts/Toys, Homeware and Specials
- Existing about/store display image
- Existing gift hamper/testimonial image

One embedded location image referenced by the source data did not resolve as a usable image file, so the redesign uses a Google Maps embed and directions link instead.

To replace images, save the new file in `assets/images/`, then update the matching `src` in `index.html` or the matching product image path in `script.js`.

## External links used

The site links to the existing live store for product, category, cart and shop actions:

- `https://www.allin1partyworld.com.au/products`
- `https://www.allin1partyworld.com.au/products/Decorations-c171072752`
- `https://www.allin1partyworld.com.au/products/Hire-Shop-c156344507`
- `https://www.allin1partyworld.com.au/products/Party-Supplies-c121040466`
- `https://www.allin1partyworld.com.au/products/Festive-c172918753`
- `https://www.allin1partyworld.com.au/products/Gifts-Toys-c120620763`
- `https://www.allin1partyworld.com.au/products/Homeware-c120630776`
- `https://www.allin1partyworld.com.au/products/Motherss-Day-Gifts-Specials-c200046002`

Telephone, email and directions links use:

- `tel:+61466868822`
- `mailto:yuvraj140@yahoo.com`
- Google Maps search for Shop 18/150 Palmers Road, Truganina VIC 3029, Australia

## Demonstration-only functions

- Search is a front-end sample over the featured products and key categories.
- Product browsing is catalogue-style and redirects to the live All in 1 Party World store for product actions.
- Product and category shopping continues on the existing live All in 1 Party World store.

## Canonical URL

The canonical tag currently points to the existing live source website. If this sample becomes the production website, update the canonical URL in `index.html` to the final domain.
