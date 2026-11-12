# Vendor Prefixed Cross-Browser Mixins

The `prefixes` module provides vendor-prefixed cross-browser mixins supporting modern and legacy browser rendering engines (`-webkit-`, `-moz-`, `-ms-`, `-o-` and standard CSS properties).

In accordance with Lumina Sass standards, the standard CSS property is declared first, followed by vendor prefixes (`-o-`, `-ms-`, `-moz-`, `-webkit-`).

## Available Mixins

### 1. `transform`
Cross-browser 2D and 3D transform operations.
```sass
.box
	+l-mix.transform(rotate(45deg) scale(1.1))
```

### 2. `user-select`
Cross-browser text selection mode.
```sass
.unselectable
	+l-mix.user-select(none)
```

### 3. `text-size-adjust`
Prevents unwanted automatic text inflation on iOS and Windows mobile devices.
```sass
body
	+l-mix.text-size-adjust(100%)
```

### 4. `filter-prefix`
Cross-browser CSS filters (`blur`, `brightness`, `grayscale`, etc.).
```sass
.blurred-image
	+l-mix.filter-prefix(blur(5px) grayscale(50%))
```

### 5. `text-gradient`
Cross-browser gradient text clipping via `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`.
```sass
.gradient-heading
	+l-mix.text-gradient(linear-gradient(45deg, #f06, #4a90e2))
```

### 6. `hyphens`
Cross-browser hyphenation for responsive typography.
```sass
article p
	+l-mix.hyphens(auto)
```

### 7. `box-sizing-prefix`
Cross-browser box sizing model.
```sass
*
	+l-mix.box-sizing-prefix(border-box)
```

### 8. `appearance`
Resets or sets native UI widget appearance across browsers.
```sass
button, input[type="range"]
	+l-mix.appearance(none)
```

### 9. `backdrop`
Cross-browser backdrop-filter blur or complex filter expression with `-webkit-` vendor prefix.
```sass
.glassmorphism
	+l-mix.backdrop(0.5rem)
```

### 10. `line-clamp` / `webkit-line-clamp`
Restricts text content to a maximum number of lines before truncating with an ellipsis.
```sass
.description
	+l-mix.line-clamp(3)
```

### 11. `font-smoothing`
Cross-browser font subpixel antialiasing for macOS, iOS, and WebKit/Blink.
```sass
body
	+l-mix.font-smoothing(antialiased)
```

### 12. `animation`
Cross-browser CSS keyframe animations.
```sass
.spinner
	+l-mix.animation(spin 1s linear infinite)
```

### 13. `transition-prefix`
Cross-browser transitions with vendor prefixes.
```sass
.interactive-card
	+l-mix.transition-prefix(all 0.3s ease)
```

### 14. `mask-image`
Cross-browser SVG and image masking.
```sass
.masked-avatar
	+l-mix.mask-image(url('/mask.svg'))
```

### 15. `columns`
Cross-browser multi-column layout for newspaper-style text.
```sass
.magazine-body
	+l-mix.columns(2 25rem)
```

### 16. `tab-size`
Customizes indentation width of tab characters in `<pre>` and `<code>` blocks.
```sass
pre, code
	+l-mix.tab-size(2)
```

### 17. `touch-callout`
Prevents iOS Safari callout bubble on long press.
```sass
img, button
	+l-mix.touch-callout(none)
```

### 18. `tap-highlight-color`
Disables or customizes mobile touch tap highlight color.
```sass
a, button
	+l-mix.tap-highlight-color(transparent)
```

### 19. `text-stroke`
Applies typographic stroke outline width and color.
```sass
.outlined-title
	+l-mix.text-stroke(2px, #000000)
```

### 20. `placeholder`
Styles input placeholder text across WebKit, Firefox, and Internet Explorer/Edge.
```sass
input
	+l-mix.placeholder
		color: #94a3b8
		font-style: italic
```

### 21. `selection`
Styles text selection highlights across WebKit and Gecko engines.
```sass
::selection
	+l-mix.selection
		background-color: #3b82f6
		color: #ffffff
```

### 22. `scrollbar-hide`
Completely hides scrollbars while maintaining scrollability across IE, Edge, Firefox, Chrome, and Safari.
```sass
.carousel-container
	+l-mix.scrollbar-hide
```
