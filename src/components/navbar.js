import './navbar.css';
import { initNavbar } from '@blessedonekobo/dropdown-menu';

const html = `
<div class="brand">
  <h1>Brand</h1>
</div>
<div class="menu">
  <nav>
    <div class="item">
      <a href="#">Home</a>
    </div>
    <div class="item">
      <a href="#">About</a>
    </div>
    <div class="item is-dropdown">
      <a href="#">Media & News <span class="icon-more">&rsaquo;</span></a>
      <div class="dropdown-menu">
        <a href="#">CNN</a>
        <a href="#">Fox</a>
      </div>
    </div>
    <div class="item">
      <a href="#">Careers</a>
    </div>
    <div class="item is-dropdown">
      <a href="#">Connect <span class="icon-more">&rsaquo;</span></a>
      <div class="dropdown-menu">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
      </div>
      </a>
    </div>
  </nav>
</div>
<div class="is-toggle close">
  <a href="#">Menu</a>
</div>
`;

// eslint-disable-next-line no-undef
const elm = document.createElement('div');
elm.setAttribute('id', 'navbar1');
elm.className = 'navbar';
elm.innerHTML = html;
initNavbar(elm);

export default elm;
