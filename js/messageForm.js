import {isEscape} from './util.js';

const errorMessageTemplate = `<section class="error js-message">
<div class="error__inner">
  <h2 class="error__title js-message-inner">Ошибка загрузки файла</h2>
  <button type="button" class="error__button js-message-btn">Загрузить другой файл</button>
</div>
</section>`;

const successMessageTemplate = `<section class="success js-message">
<div class="success__inner">
  <h2 class="success__title js-message-inner">Изображение успешно загружено</h2>
  <button type="button" class="success__button js-message-btn">Круто!</button>
</div>
</section>`;

const onEscKeyButton = (evt) => {
  if (isEscape(evt)) {
    document.removeEventListener('keydown', onEscKeyButton);
    removeMessage();
  }
};

const onDocClick = (evt) => {
  const target = evt.target;

  if (target.closest('.js-message-inner') && !target.classList.contains('js-message-btn')) {
    return;
  }

  document.removeEventListener('click', onDocClick);
  removeMessage();
};

const renderMessage = (isSuccess = false) => {
  document.body.insertAdjacentHTML('beforeend', isSuccess ? successMessageTemplate : errorMessageTemplate);
  document.addEventListener('keydown', onEscKeyButton);
  document.addEventListener('click', onDocClick);
};

function removeMessage() {
  const  message = document.querySelector('.js-message');
  message.remove();
}

export {renderMessage};
