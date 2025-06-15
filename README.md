# ရွှေဗုံးစံ လက်ဝတ်ရတနာ - Shwe Bone San Jewelry Website

A beautiful, responsive React website for a Myanmar jewelry shop featuring gold, red, and white color scheme with Myanmar (Burmese) text support.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Myanmar Language Support**: Uses Noto Sans Myanmar and Padauk fonts for authentic Burmese text display
- **Modern UI/UX**: Beautiful gradients, smooth animations, and hover effects
- **Interactive Components**: Animated product slideshow, smooth scrolling navigation
- **Contact Form**: Functional contact form with validation (form submission logic to be implemented)
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🎨 Color Scheme

- **Gold**: #FFD700 (Primary brand color)
- **Red**: #DC143C (Accent color)
- **White**: #FFFFFF (Background)
- **Black**: #1A1A1A (Text)
- **Gray variations**: For secondary text and elements

## 📱 Sections

1. **Header**: Navigation with smooth scrolling
2. **Hero Section**: Welcome message with brand introduction
3. **About Shwe Bone San**: Company story and values
4. **Products**: Animated slideshow of jewelry categories
5. **Video Section**: Placeholder for promotional videos
6. **Contact Us**: Contact form and business information
7. **Footer**: Links, social media, and company info

## 🛠️ Installation & Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Products.js & Products.css
│   ├── Video.js & Video.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🖼️ Adding Photos & Videos

### Product Photos

Replace the placeholder icons in the Products component by:

1. Adding images to `public/images/products/` folder
2. Update the `productCategories` array in `src/components/Products.js`
3. Replace placeholder content with actual image elements

### Shop Photos

Add shop photos to the About section by:

1. Adding images to `public/images/about/` folder
2. Update the placeholder in `src/components/About.js`

### Videos

Add promotional videos by:

1. Adding video files to `public/videos/` folder
2. Update the Video component to use actual video elements
3. Replace placeholder content with embedded video players

## 🌐 Myanmar Font Integration

The website uses Google Fonts for Myanmar text:

- **Noto Sans Myanmar**: Primary Myanmar font
- **Padauk**: Fallback Myanmar font

CSS classes for Myanmar text:

- `.myanmar-text`: Regular Myanmar text
- `.myanmar-text-bold`: Bold Myanmar text
- `.myanmar-text-medium`: Medium weight Myanmar text

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Customization

### Changing Colors

Update CSS variables in `src/App.css`:

```css
:root {
  --gold: #ffd700;
  --red: #dc143c;
  --white: #ffffff;
  /* ... other colors */
}
```

### Updating Text Content

All Myanmar text can be updated in the respective component files. The website is structured to easily accommodate text changes.

### Adding New Sections

Follow the existing component pattern:

1. Create new component file in `src/components/`
2. Create corresponding CSS file
3. Import and add to `src/App.js`

## 🔧 TODO / Future Enhancements

- [ ] Add actual product photos and videos
- [ ] Implement contact form submission functionality
- [ ] Add Google Maps integration
- [ ] Implement image gallery with lightbox
- [ ] Add WhatsApp chat integration
- [ ] Add product catalog with detailed pages
- [ ] Implement online ordering system
- [ ] Add customer testimonials section

## 📞 Support

For any questions or modifications needed, the code is well-documented and follows React best practices for easy maintenance and updates.

---

**Built with ❤️ for Shwe Bone San Jewelry**
