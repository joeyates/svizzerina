# Svizzerina

A CSS-only hamburger menu.

[[GIF]]

# Usage

Add this HTML to your page:

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

## Position

By default it is assumed that the menu will be on the **left**
and open to the **right**.

If you wish to place it on the right and have it open to the left,
...TODO!!!!!!!!!!!!!!!!!
