# Design Requirements and Implementation Guide

**Author:** System Generated  
**Created:** 2024-12-19  
**Issue Reference:** [Issue #1](https://github.com/psimin/tutorial-1/issues/1)  
**Last Updated:** 2024-12-19

---

## Purpose and Scope

This document defines the design requirements, accessibility standards, and implementation patterns for the Next.js application in this repository. It serves as the authoritative guide for developers implementing user interface components, ensuring consistency with US Veterans Association (VA) design standards while leveraging modern web technologies including TailwindCSS and Next.js 15+.

The scope includes:
- Visual design guidelines and component specifications
- Accessibility requirements and implementation patterns
- TailwindCSS configuration and usage conventions
- Next.js-specific implementation guidance
- Quality assurance and testing protocols

---

## Links and References

### Primary Design System References
- **VA.gov Homepage Template**: [https://design.va.gov/templates/homepage](https://design.va.gov/templates/homepage)
- **VA.gov Search Results Template**: [https://design.va.gov/templates/search-results](https://design.va.gov/templates/search-results)
- **VA Design System**: [https://design.va.gov/](https://design.va.gov/)

### Accessibility Standards
- **WCAG 2.1 AA Guidelines**: [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- **Section 508 Compliance**: [https://www.section508.gov/](https://www.section508.gov/)

### Technical Documentation
- **TailwindCSS v4 Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Next.js 15 Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)

---

## Visual Design

### Color Palette

Follow the VA.gov design system color tokens. Configure these in your `tailwind.config.js`:

```javascript
// Primary VA Colors
colors: {
  'va-blue': {
    50: '#f0f6ff',
    100: '#e0edff',
    500: '#0050d8', // Primary VA Blue
    600: '#004085',
    700: '#003366',
    900: '#1a1a1a'
  },
  'va-green': {
    500: '#00a91c', // Success/confirmation
    600: '#008817'
  },
  'va-red': {
    500: '#e31c3d', // Error/warning
    600: '#cd2026'
  },
  'va-gray': {
    50: '#f9f9f9',
    100: '#f1f1f1',
    200: '#e4e4e4',
    300: '#bdbdbd',
    400: '#757575',
    500: '#5a5a5a',
    600: '#323a45',
    700: '#262626',
    800: '#1b1b1b',
    900: '#000000'
  }
}
```

### Typography

Use system fonts for optimal performance and accessibility:

```javascript
// Tailwind Typography Configuration
fontFamily: {
  'sans': ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  'serif': ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  'mono': ['Roboto Mono', 'Consolas', 'Monaco', 'Liberation Mono', 'Lucida Console', 'monospace']
}
```

**Font Scale:**
- H1: `text-4xl font-bold` (36px)
- H2: `text-3xl font-bold` (30px)
- H3: `text-2xl font-semibold` (24px)
- H4: `text-xl font-semibold` (20px)
- Body: `text-base` (16px)
- Small: `text-sm` (14px)

### Spacing and Layout

Use consistent spacing based on 8px grid system:

```javascript
// Spacing tokens
spacing: {
  'xs': '0.5rem',  // 8px
  'sm': '1rem',    // 16px
  'md': '1.5rem',  // 24px
  'lg': '2rem',    // 32px
  'xl': '3rem',    // 48px
  '2xl': '4rem',   // 64px
}
```

### Logo and Imagery

- **VA Logo**: Use official VA logo assets, ensuring proper contrast ratios
- **Images**: Optimize for web (WebP format when supported)
- **Icons**: Prefer system icons or Font Awesome for consistency
- **Alt text**: Required for all images following WCAG guidelines

---

## Layout & Components

### Header Component

```tsx
// Recommended header structure
<header className="bg-va-blue-700 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-between h-16">
      {/* Logo and primary navigation */}
    </nav>
  </div>
</header>
```

### Footer Component

```tsx
// Recommended footer structure
<footer className="bg-va-gray-800 text-white mt-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Footer content with proper link hierarchy */}
  </div>
</footer>
```

### Navigation Patterns

- **Primary Navigation**: Horizontal menu in header
- **Secondary Navigation**: Sidebar or breadcrumb patterns
- **Mobile Navigation**: Collapsible hamburger menu
- **Breadcrumbs**: Use semantic HTML with proper ARIA labels

### Homepage Layout

Follow VA.gov homepage template structure:
- Hero section with clear call-to-action
- Service tiles/cards in grid layout
- News/announcements section
- Contact information and resources

### Search Results Layout

Implement VA.gov search results pattern:
- Search input with clear functionality
- Results count and sorting options
- Result cards with consistent metadata
- Pagination with proper accessibility

### Form Styles

```tsx
// Standard form field styling
<input 
  className="w-full px-3 py-2 border border-va-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-va-blue-500 focus:border-va-blue-500"
  aria-describedby="field-help"
/>
```

### Cards and Lists

```tsx
// Standard card component
<div className="bg-white border border-va-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
  {/* Card content */}
</div>
```

### Modal Components

- Use semantic HTML with proper focus management
- Implement backdrop dismiss with keyboard support
- Ensure proper ARIA attributes
- Include close button with clear labeling

---

## Accessibility Requirements

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Implement logical tab order
- Provide visible focus indicators
- Support keyboard shortcuts where appropriate

### ARIA Implementation

```tsx
// Example ARIA usage
<button 
  aria-expanded={isOpen}
  aria-controls="menu-list"
  aria-label="Main navigation menu"
>
  Menu
</button>
```

### Semantic HTML

- Use proper heading hierarchy (h1-h6)
- Implement landmark roles (`main`, `nav`, `aside`, `footer`)
- Use lists for grouped content
- Provide meaningful link text

### Color Contrast

- **AA Standard**: 4.5:1 for normal text, 3:1 for large text
- **AAA Standard**: 7:1 for normal text, 4.5:1 for large text
- Test using tools like WebAIM Color Contrast Checker

### Focus States

```css
/* Custom focus styles */
.focus-outline {
  @apply focus:outline-none focus:ring-2 focus:ring-va-blue-500 focus:ring-offset-2;
}
```

### Skip Links

```tsx
// Implement skip navigation
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-va-blue-500 text-white px-4 py-2 rounded"
>
  Skip to main content
</a>
```

### Form Labeling

- Always associate labels with form controls
- Use `aria-describedby` for help text
- Implement clear error messaging
- Group related fields with `fieldset` and `legend`

---

## TailwindCSS Usage Guidance

### Installation and Configuration

The project uses TailwindCSS v4. Ensure your configuration includes:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // VA-specific customizations
    },
  },
  plugins: [
    // Recommended plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### Utility-First Conventions

- Prefer utility classes over custom CSS
- Use component extraction for repeated patterns
- Maintain consistent spacing and typography scales
- Leverage responsive design utilities

### Component Abstraction with @apply

```css
/* Use @apply for component patterns */
.btn-primary {
  @apply bg-va-blue-500 hover:bg-va-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-va-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed;
}
```

### Responsive Breakpoints

```javascript
// Custom breakpoints matching VA.gov
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Dark Mode Approach

```javascript
// Configure dark mode
module.exports = {
  darkMode: 'class', // or 'media'
  // ... rest of config
}
```

---

## Next.js Implementation Notes

### Recommended Folder Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── components/        # Page-specific components
├── components/            # Shared components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utilities and configurations
├── styles/               # Additional stylesheets
└── types/                # TypeScript type definitions
```

### Configuration Files

- **`tailwind.config.js`**: TailwindCSS configuration with VA tokens
- **`postcss.config.mjs`**: PostCSS configuration for TailwindCSS processing
- **`next.config.ts`**: Next.js configuration including performance optimizations

### SSR and Hydration

- Use `use client` directive only when necessary
- Implement proper loading states for dynamic content
- Optimize font loading with `next/font`
- Consider static generation for content pages

### Global CSS Import

```tsx
// app/layout.tsx
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

---

## QA & Testing Checklist

### Accessibility Testing

- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation testing
- [ ] Color contrast validation
- [ ] Focus management verification
- [ ] ARIA attribute validation
- [ ] Semantic HTML structure review

### Cross-Browser Testing

- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] iOS Safari (latest version)
- [ ] Android Chrome (latest version)

### Responsive Testing

- [ ] Mobile devices (320px-767px)
- [ ] Tablet devices (768px-1023px)
- [ ] Desktop devices (1024px+)
- [ ] Print stylesheets
- [ ] High-DPI displays

### Performance Considerations

- [ ] Lighthouse performance score >90
- [ ] Core Web Vitals optimization
- [ ] Image optimization and lazy loading
- [ ] Font loading optimization
- [ ] Bundle size analysis
- [ ] Accessibility score >90

### Functional Testing

- [ ] Form validation and submission
- [ ] Navigation functionality
- [ ] Search functionality
- [ ] Interactive component behavior
- [ ] Error handling and messaging
- [ ] Loading states and feedback

---

## Implementation Examples

### Sample Header Component

```tsx
// components/layout/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-va-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">VA Application</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/services" 
                className="hover:bg-va-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="hover:bg-va-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
```

---

This design guide serves as the foundation for implementing consistent, accessible, and user-friendly interfaces that align with VA.gov standards while leveraging modern web development practices.