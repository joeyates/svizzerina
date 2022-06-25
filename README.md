# Svizzerina

A CSS-only hamburger menu.

[[GIF]]

# Usage

Include `dist/index.css` in your build, then add this HTML to your page:

```html
<nav class="svizzerina">
  <input class="svizzerina__trigger" type="checkbox">

  <span class="svizzerina__glyph svizzerina__glyph1"></span>
  <span class="svizzerina__glyph svizzerina__glyph2"></span>
  <span class="svizzerina__glyph svizzerina__glyph3"></span>

  <ul class="svizzerina__menu">
    <a href="/">
      <li class="svizzerina__menu-item">Home</li>
    </a>
  </ul>
</nav>
```

Add any menu items you require as <a><li>...</li></a> elements

# JS-based Setup

If you want to avoid managing the boilerplate above,
you can just set up basic navigation, and have Svizzerina's `initialize()`
function add the remaining elements.

Add the basic menu structure your HTML, and identify it with an id:

```html
<nav id="my_nav">
  <ul>
    <a href="/">
      <li>Home</li>
    </a>
  </ul>
</nav>
```

Initialize the menu:

```js
import {initialize} from 'svizzerina';

const el = document.querySelector('#my_nav');
initialize(el);
```

# Configuration

Some configuration is available by setting CSS vars, e.g.:

```css
:root {
  --svizzerina-menu-width: 100px;
}
```

Vars which can be set are:

* `--svizzerina-link-color` - default: #555,
* `--svizzerina-link-hover-color` - default: black,
* `--svizzerina-menu-width` - default: 160px,
* `--svizzerina-menu-color` - default: white,
* `--svizzerina-z-index` - default: 1.
