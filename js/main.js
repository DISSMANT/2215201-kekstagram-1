import './render.js';
import './pristine-helper-forms.js';

import {getData} from './api.js';
import {showAlert} from './util.js';
import {ALERT_SHOW_TIME} from './data.js';
import {renderPictures} from './render.js';

getData(
  (photos) => renderPictures(photos),
  () => showAlert('Не удалось загрузить фотографии, обновите страницу', ALERT_SHOW_TIME),
);

