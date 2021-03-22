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
  ${images.reduce((imageTags, src, index) => {
    return `
      ${imageTags}
      <img src="${src}" class="${index === 0 ? 'visible' : 'right'}" data-index="${index}">
    `;
  }, '')}
</div>
<div class="next">
  <button class="rarr">&rarr;</button>
</div>
`;

function showImage(sliderElm, imageElements, currentImageIndex) {
  const visible = sliderElm.querySelector('.visible');
  visible.className = '';

  Array.prototype.forEach.call(imageElements, (imageElement) => {
    const { index } = imageElement.dataset;

    if (index < currentImageIndex) {
      imageElement.className = 'left';
    } else if (index > currentImageIndex) {
      imageElement.className = 'right';
    } else {
      imageElement.className = 'visible';
    }
  });
}

const sliderElement = document.createElement('div');
sliderElement.className = 'slider';
sliderElement.innerHTML = html;
const imageElements = sliderElement.querySelectorAll(`img[data-index]`);

sliderElement.querySelector('.rarr').addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(sliderElement, imageElements, index);
});

sliderElement.querySelector('.larr').addEventListener('click', () => {
  index = (index - 1) % images.length;

  if (index < 0) {
    index = images.length - 1;
  }

  showImage(sliderElement, imageElements, index);
});

export default sliderElement;