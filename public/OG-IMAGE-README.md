# Open Graph Image Generation

## Current Status
An SVG template (`og-image.svg`) has been created with your branding.

## To Generate the PNG (1200x630px):

### Option 1: Online Converter
1. Visit https://cloudconvert.com/svg-to-png
2. Upload `og-image.svg`
3. Set dimensions to 1200x630px
4. Download as `og-image.png`
5. Place in `/public/` folder

### Option 2: Using Browser
1. Open `og-image.svg` in Chrome/Firefox
2. Open DevTools Console
3. Right-click on the SVG and "Capture screenshot"
4. Save as `og-image.png`

### Option 3: Command Line (if you have ImageMagick)
```bash
convert -density 300 og-image.svg -resize 1200x630 og-image.png
```

### Option 4: Using Figma/Sketch
1. Import `og-image.svg`
2. Export as PNG at 1200x630px
3. Save as `og-image.png`

## Image Specifications
- **Dimensions**: 1200x630px (Facebook/LinkedIn optimal)
- **Format**: PNG (better quality) or JPG (smaller size)
- **File size**: Keep under 1MB
- **Design**: Dark background with "DV" branding

## Update Required
After generating the PNG, update `index.html`:
- Replace `og-image.png` references with the actual filename
- Update the domain from `https://danvafidis.com/` to your actual domain

## Testing
Test your Open Graph tags at:
- https://www.opengraph.xyz/
- https://cards-dev.twitter.com/validator
- https://www.linkedin.com/post-inspector/
