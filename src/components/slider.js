import './slider.css';

let visibleIndex = 0;

const imageList = [
  '../src/images/graduation.jpg',
  '../src/images/rocket.jpg',
  '../src/images/telescope.jpg',
];

const html = `
<div class="previous">
  <button class="larr">&larr;</button>
</div>
<div class="image">
  ${imageList.reduce((accum, curr, idx) => {
    return `${accum}<img src="${curr}" class="${
      idx === 0 ? 'visible' : 'right'
    }" data-index="${idx}">`;
  }, '')}
</div>
<div class="navigation">
  ${imageList.reduce((accum, curr, idx) => {
    return `${accum}<span class="${
      idx === 0 ? 'visible' : 'right'
    }" data-index="${idx}"></span>`;
  }, '')}
</div>
<div class="next">
  <button class="rarr">&rarr;</button>
</div>
`;

function showImage(sliderElm, imageAndNavigationElements, currentImageIndex) {
  const visible = sliderElm.querySelector('.visible');
  visible.className = '';

  Array.prototype.forEach.call(imageAndNavigationElements, (elm) => {
    const shadowElm = elm;
    const { index } = shadowElm.dataset;

    if (index < currentImageIndex) {
      shadowElm.className = 'left';
    } else if (index > currentImageIndex) {
      shadowElm.className = 'right';
    } else {
      shadowElm.className = 'visible';
    }
  });
}

function showRightImage(
  images,
  currentIdx,
  sliderElement,
  imageAndNavigationElements,
) {
  const nextIdx = (currentIdx + 1) % images.length;
  showImage(sliderElement, imageAndNavigationElements, nextIdx);
  return nextIdx;
}

function showLeftImage(
  images,
  currentIdx,
  sliderElement,
  imageAndNavigationElements,
) {
  let nextIdx = (currentIdx - 1) % imageList.length;

  if (nextIdx < 0) {
    nextIdx = imageList.length - 1;
  }

  showImage(sliderElement, imageAndNavigationElements, nextIdx);

  return nextIdx;
}

// eslint-disable-next-line no-undef
const sliderElement = document.createElement('div');
sliderElement.className = 'slider';
sliderElement.innerHTML = html;
const imageAndNavigationElements = sliderElement.querySelectorAll('[data-index]');

sliderElement.querySelector('.rarr').addEventListener('click', () => {
  visibleIndex = showRightImage(
    imageList,
    visibleIndex,
    sliderElement,
    imageAndNavigationElements,
  );
});

sliderElement.querySelector('.larr').addEventListener('click', () => {
  visibleIndex = showLeftImage(
    imageList,
    visibleIndex,
    sliderElement,
    imageAndNavigationElements,
  );
});

setInterval(() => {
  visibleIndex = showRightImage(
    imageList,
    visibleIndex,
    sliderElement,
    imageAndNavigationElements,
  );
}, 5000);

export default sliderElement;
