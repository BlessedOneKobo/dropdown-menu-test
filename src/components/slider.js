import './slider.css';

let index = 0;

const images = [
  '../src/images/graduation.jpg',
  '../src/images/rocket.jpg',
  '../src/images/telescope.jpg',
];

const html = `
<div class="previous">
  <button class="larr">&larr;</button>
</div>
<div class="image">
  ${
    images.reduce((accum, curr, idx) => {
      return `
        ${accum}
        <img src="${curr}" class="${idx === 0 ? 'visible' : 'right'}" data-index="${idx}">
      `;
    }, '')
  }
</div>
<div class="navigation">
  ${
    images.reduce((accum, curr, idx) => {
      return `
        ${accum}
        <span class="${idx === 0 ? 'visible' : 'right'}" data-index="${idx}"></span>
      `;
    }, '')
  }
</div>
<div class="next">
  <button class="rarr">&rarr;</button>
</div>
`;

function showImage(sliderElm, imageAndNavigationElements, currentImageIndex) {
  const visible = sliderElm.querySelector('.visible');
  visible.className = '';

  Array.prototype.forEach.call(imageAndNavigationElements, (elm) => {
    const { index } = elm.dataset;

    if (index < currentImageIndex) {
      elm.className = 'left';
    } else if (index > currentImageIndex) {
      elm.className = 'right';
    } else {
      elm.className = 'visible';
    }
  });
}

const sliderElement = document.createElement('div');
sliderElement.className = 'slider';
sliderElement.innerHTML = html;
const imageAndNavigationElements = sliderElement.querySelectorAll(`[data-index]`);

sliderElement.querySelector('.rarr').addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(sliderElement, imageAndNavigationElements, index);
});

sliderElement.querySelector('.larr').addEventListener('click', () => {
  index = (index - 1) % images.length;

  if (index < 0) {
    index = images.length - 1;
  }

  showImage(sliderElement, imageAndNavigationElements, index);
});

export default sliderElement;