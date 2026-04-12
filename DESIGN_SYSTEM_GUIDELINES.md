# Design System Guidelines - CareerConnect

## Overview
This document outlines the consistent design system for all CareerConnect components. All team members should follow these guidelines to maintain visual and functional consistency across the entire application.

## File Reference
- **Theme Config**: `client/src/config/theme.js`
- **Design System**: `client/src/config/designSystem.js`
- **Global Styles**: `client/src/index.css`

---

## 1. COLOR PALETTE

### Primary Colors
- **Blue** (Primary action): `#5563ff` / `bg-blue-600`
  - Light: `bg-blue-50`, `bg-blue-100`
  - Dark: `bg-blue-700`, `bg-blue-900`

### Secondary Colors
- **Teal** (Accent/Secondary action): `#14b8a6` / `bg-teal-600`
  - Used for secondary buttons, highlights, accents

### Neutral Colors
- **Slate** (Backgrounds, text, borders)
  - 50-900: Use based on context
  - Text: `text-slate-600` (body), `text-slate-900` (headings)
  - Backgrounds: `bg-slate-50` to `bg-slate-900`
  - Borders: `border-slate-200`

### Status Colors
- **Success (Green)**: `bg-green-500`, `text-green-600`
- **Warning (Amber)**: `bg-amber-500`, `text-amber-600`
- **Error (Red)**: `bg-red-500`, `text-red-600`
- **Info (Blue)**: `bg-blue-500`, `text-blue-600`

### Usage Rules
✅ **DO:**
- Use primary blue for main CTAs and important actions
- Use teal for secondary actions and accents
- Use slate/neutral for text and backgrounds
- Use status colors for alerts/notifications

❌ **DON'T:**
- Mix random colors (indigo-600, pink-500, etc.)
- Use hardcoded colors like `#3d3ef5`
- Inconsistent text colors across similar components

---

## 2. TYPOGRAPHY

### Heading Hierarchy
```jsx
<h1 className="text-4xl font-bold text-slate-900">Main Heading</h1>
<h2 className="text-3xl font-bold text-slate-900">Section Heading</h2>
<h3 className="text-2xl font-bold text-slate-900">Subsection</h3>
<h4 className="text-xl font-bold text-slate-900">Card Title</h4>
```

### Body Text
```jsx
// Regular body text
<p className="text-base text-slate-600">Regular paragraph text</p>

// Small body text
<p className="text-sm text-slate-600">Small supporting text</p>

// Extra small (captions)
<p className="text-xs text-slate-500">Caption or helper text</p>
```

### Usage Rules
✅ **DO:**
- Use `text-slate-900` for headings
- Use `text-slate-600` for body text
- Use `text-slate-500` for secondary/helper text
- Maintain consistent font sizes across similar components

❌ **DON'T:**
- Use different gray shades inconsistently
- Mix font weights unnecessarily
- Use colors for text that aren't part of the palette

---

## 3. COMPONENT STYLING

### Buttons
```jsx
// Primary Button
<button className="px-6 py-2.5 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
  Primary Button
</button>

// Secondary Button
<button className="px-6 py-2.5 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors">
  Secondary Button
</button>

// Outline Button
<button className="px-6 py-2.5 rounded-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
  Outline Button
</button>

// Ghost Button
<button className="px-6 py-2.5 rounded-lg font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
  Ghost Button
</button>
```

### Cards
```jsx
// Standard Card
<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
  {/* content */}
</div>

// Elevated Card
<div className="bg-white rounded-lg shadow-lg border border-slate-100 p-6">
  {/* content */}
</div>

// Subtle Card
<div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
  {/* content */}
</div>
```

### Input Fields
```jsx
<input
  type="text"
  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
  placeholder="Enter text..."
/>
```

### Badges
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  Badge Text
</span>
```

---

## 4. SPACING & LAYOUT

### Standard Spacing Values
- **xs**: `0.25rem` (1px gap, small spacing)
- **sm**: `0.5rem` (4px, small padding)
- **md**: `1rem` (16px, standard spacing)
- **lg**: `1.5rem` (24px, larger spacing)
- **xl**: `2rem` (32px, sections)
- **2xl**: `2.5rem` (40px, major spacing)
- **3xl**: `3rem` (48px, major sections)

### Usage Examples
```jsx
// Padding
<div className="p-6">Content with padding</div>
<div className="px-6 py-4">Asymmetrical padding</div>

// Margins
<div className="my-8">Vertical spacing</div>
<div className="mx-4">Horizontal spacing</div>

// Gaps
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## 5. BORDER RADIUS

- **Small**: `rounded-sm` (minor elements)
- **Medium**: `rounded-md` (most components)
- **Large**: `rounded-lg` (cards, modals)
- **XL**: `rounded-xl` (prominent sections)
- **Full**: `rounded-full` (avatars, pills)

**Rule**: Use `rounded-lg` as default for most components.

---

## 6. SHADOWS

- **Small**: `shadow-sm` (subtle, inline elements)
- **Medium**: `shadow-md` (default cards)
- **Large**: `shadow-lg` (floating elements, elevated cards)
- **XL**: `shadow-xl` (modals, dropdowns)

**Rule**: Cards default to `shadow-md`, interactive elements use `hover:shadow-lg`

---

## 7. NAV & FOOTER

### Navbar
```jsx
<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
  <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    <div className="text-2xl font-bold text-slate-900">
      Job<span className="text-blue-600">ify</span>
    </div>
    {/* navigation items */}
  </div>
</nav>
```

### Footer
```jsx
<footer className="bg-slate-900 text-slate-400 py-12 px-6">
  <div className="max-w-7xl mx-auto">
    {/* footer content */}
  </div>
</footer>
```

---

## 8. TRANSITIONS & ANIMATIONS

### Standard Transitions
```jsx
// Hover transitions
className="hover:bg-blue-700 transition-colors"
className="hover:shadow-lg transition-shadow duration-300"

// Focus transitions
className="focus:ring-2 focus:ring-blue-500 transition-all"
```

### Duration Classes
- **Fast**: `duration-150` (150ms)
- **Normal**: `duration-300` (300ms, default)
- **Slow**: `duration-500` (500ms)

---

## 9. COMPONENT CHECKLIST

Before creating a new component, ensure:

- [ ] Uses colors from the design system palette
- [ ] Typography follows heading/body hierarchy
- [ ] Buttons match one of the defined button styles
- [ ] Cards use one of the defined card styles
- [ ] Spacing uses standard values (md, lg, xl)
- [ ] Border radius is consistent (default: lg)
- [ ] Hover states are defined
- [ ] Mobile responsive (tested on sm, md, lg breakpoints)
- [ ] Imported `designSystem` or uses theme values
- [ ] No hardcoded colors or custom Tailwind values

---

## 10. IMPLEMENTATION EXAMPLES

### Example: Consistent Job Card
```jsx
import React from 'react';
import { MapPin, Building, Clock } from 'lucide-react';
import { designSystem } from '../config/designSystem';

export const JobCard = ({ job }) => {
  return (
    <div className={designSystem.cards.base + ' p-6 hover:shadow-lg transition-shadow '}>
      {/* Header */}
      <div className="mb-4">
        <h4 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h4>
        <div className="flex items-center gap-2 text-slate-600">
          <Building size={16} />
          <span>{job.company}</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock size={14} />
          <span>{job.posted}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className={designSystem.buttons.primary}>
        View Details
      </button>
    </div>
  );
};
```

---

## 11. COMMON MISTAKES TO AVOID

❌ **Hardcoded Colors**
```jsx
// DON'T DO THIS
<div className="bg-purple-600 text-orange-500">...</div>
```

✅ **Use Design System**
```jsx
// DO THIS
<div className="bg-blue-600 text-slate-900">...</div>
```

---

❌ **Inconsistent Spacing**
```jsx
// DON'T (random values)
<div className="p-7 m-9">...</div>
```

✅ **Standard Spacing**
```jsx
// DO
<div className="p-6 my-8">...</div>
```

---

❌ **Mixed Typography Styles**
```jsx
// DON'T
<h3 className="text-2xl text-red-500">Heading</h3>
```

✅ **Consistent Typography**
```jsx
// DO
<h3 className="text-2xl font-bold text-slate-900">Heading</h3>
```

---

## 12. IMPORT DESIGN SYSTEM IN COMPONENTS

```jsx
import { designSystem } from '../config/designSystem';

// Then use it:
<button className={designSystem.buttons.primary}>Click Me</button>
<div className={designSystem.cards.base}>Card Content</div>
```

---

## Questions & Updates

If you find inconsistencies or need to add new components, please:
1. Reference this guide
2. Update the `designSystem.js` file with any new patterns
3. Ensure all team members are aware of changes

---

**Last Updated**: April 2026
**Maintained By**: CareerConnect Design Team
