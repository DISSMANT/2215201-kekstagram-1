import {imgPreview} from './uploaderForm.js';
import {SCALE} from './data.js';

const scaleContainer = document.querySelector('.img-upload__scale');
const scaleValue = document.querySelector('.scale__control--value');

const onScaleClick = (evt) => {
  const input = Number.parseInt(scaleValue.value, 10);
  let counter = SCALE.MAX;
  const button = evt.target;

  if (button.matches('.scale__control--value')) {
    return;
  }

  if (button.matches('.scale__control--bigger')) {
    counter =  input + SCALE.STEP;
    scaleValue.value = `${counter}%`;
  }

  if (button.matches('.scale__control--smaller')) {
    counter = input - SCALE.STEP;
    scaleValue.value = `${counter}%`;
  }

  if (counter >= SCALE.MAX) {
    counter = SCALE.MAX;
    scaleValue.value = `${counter}%`;
  }

  if (counter <= SCALE.MIN) {
    counter = SCALE.MIN;
    scaleValue.value = `${counter}%`;
  }
  imgPreview.style.transform = `scale(${counter / 10 /10})`;
};

export {onScaleClick, scaleContainer};
