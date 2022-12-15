import {imgPreview} from './uploaderForm.js';
import {EFFECTS} from './data.js';

const slider = document.querySelector('.effect-level__slider');
const sliderWrapper = document.querySelector('.effect-level');
const effectValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');

const initialEffects = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });
};

const onFilterButtonChange = (evt) => {
  const evtHandler = evt.target.value;
  if (evtHandler === 'none') {
    sliderWrapper.classList.add('hidden');
    imgPreview.style.filter = 'none';
  }

  else {
    sliderWrapper.classList.remove('hidden');
    imgPreview.removeAttribute('class');
    imgPreview.classList.add(`effects__preview--${evtHandler}`);
    slider.noUiSlider.updateOptions(EFFECTS[evtHandler].options);
    slider.noUiSlider.on('update', () => {
      effectValue.value = slider.noUiSlider.get();
      imgPreview.style.filter = `${EFFECTS[evtHandler].filter}(${effectValue.value}${EFFECTS[evtHandler].units})`;
    });
  }
};

export { onFilterButtonChange, initialEffects, effectList, sliderWrapper };
