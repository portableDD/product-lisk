# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [frontendmentor]([https://www.frontendmentor.io/solutions](https://www.frontendmentor.io/solutions/responsive-product-cart-with-nextjs-react-and-tailwind-css-3rdCfe3Y7))
- Live Site URL: [Desert Cart](https://product-lisk.vercel.app/)

---

## My process

### Built with

- **Next.js** - React framework for server-side rendering and routing.
- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS v4** - A utility-first CSS framework for rapid styling.
- **TypeScript** - For strong typing and improved developer experience.
- **Semantic HTML5 markup** - For better accessibility and SEO.
- **CSS Flexbox & Grid** - For creating complex and responsive layouts.
- **Mobile-first workflow** - Core principle for building responsive designs.

### What I learned

This project was a great opportunity to practice component-based architecture, state management, and modern CSS techniques. Here are some of the key things I learned:

#### Responsive Images with Art Direction

Instead of using a single image for all screen sizes, I learned to use the HTML `<picture>` element to serve different, art-directed images based on the viewport width. This ensures the best-looking and most performant image is loaded for every device.

```html
<picture>
  <source media="(min-width: 1024px)" srcset="{product.image.desktop}" />
  <source media="(min-width: 640px)" srcset="{product.image.tablet}" />
  <image
    src="{product.image.mobile}"
    alt="{product.name}"
    width="{240}"
    height="{240}"
    className="w-full aspect-square object-cover"
  />
</picture>
```

#### Component Refactoring and Data Flow

I focused on making my components clean and reusable. Initially, I had hardcoded lookup functions inside my components to find image paths. I refactored this by passing the complete product data via props, making the components more declarative and easier to maintain.

For example, instead of this:
`src={getProductThumbnailSrc(item.name)}`

I now pass the data directly:
`src={item.image.thumbnail}`

This makes the `OrderConfirmationModal` and `Cart` components much cleaner.

#### Centralized State Management with Custom Hooks

To handle the shopping cart logic, I created a custom `useCart` hook. This hook encapsulates all the logic for adding, removing, and updating items in the cart. It made the state management clean and accessible to any component that needed it without prop drilling.

#### Custom Theming in Tailwind CSS v4

I define a custom color palette directly in my `global.css` file using the new `@theme` directive in Tailwind CSS v4. This allows for creating semantic and reusable color classes.

```css
@theme {
  --color-red: hsl(14 86% 42%);
  --color-green: hsl(159 69% 38%);
  --color-rose-50: hsl(20 50% 98%);
  --color-rose-900: hsl(14 65% 9%);
}
```

### Continued development

In future projects, I want to continue focusing on:

- **Testing:** Implementing unit and integration tests with Jest and React Testing Library to ensure the application is robust and bug-free.
- **Animations:** Adding subtle page transitions and micro-interactions using a library like Framer Motion to improve the user experience.
- **Accessibility:** Going beyond semantic HTML to conduct full accessibility audits and ensure the site is usable for everyone.

### Useful resources

- [Next.js Documentation](https://nextjs.org/docs) - This was my go-to resource for everything related to Next.js, from routing to image optimization.
- [React Documentation](https://react.dev/) - The new React docs are fantastic for understanding hooks and modern React patterns.
- [MDN `<picture>` Element Guide](<https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture%5D(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)>) - This article provided a clear explanation of how to implement art direction for responsive images.

---

## Author

- Website - [Dorcas Solution](https://product-lisk.vercel.app/)
- Frontend Mentor - [@portableDD](https://www.frontendmentor.io/profile/portableDD)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

A big thank you to the Frontend Mentor community for the challenge.
