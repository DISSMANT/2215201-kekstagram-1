import {isEscape} from './util.js';
import {pristine, hashtagsHandler, commentHandler, error} from './pristine-helper-forms.js';
import {onFilterButtonChange, effectList, sliderWrapper, initialEffects} from './effects.js';
import {onScaleClick, scaleContainer} from './pictureScaler.js';
import {renderMessage} from './messageForm.js';
import {sendData} from './api.js';

const body = document.querySelector('body');
const uploader = document.querySelector('.img-upload__overlay');
const closeButtonUploader = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const uploadField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const formUpload = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const closeFormWithDefaultSettings  = () => {
  closeUploadPopup();
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  formUpload.reset();
};

const possibleEscButtonAction = (evt) => {
  if (isEscape(evt)) {
    closeFormWithDefaultSettings();
    document.removeEventListener('keydown', possibleEscButtonAction);
  }
};

const clickClose = () => {
  closeFormWithDefaultSettings();
  document.removeEventListener('keydown', possibleEscButtonAction);
};

function closeUploadPopup() {
  uploader.classList.add('hidden');
  body.classList.remove('modal-open');
  scaleContainer.removeEventListener('click', onScaleClick);
  effectList.removeEventListener('change', onFilterButtonChange);
  document.removeEventListener('keydown', possibleEscButtonAction);
  closeButtonUploader.removeEventListener('click', clickClose);
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  formUpload.reset();
}

const addListenerForField = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', possibleEscButtonAction);
  });
  field.addEventListener('blue', () => {
    document.addEventListener('keydown', possibleEscButtonAction);
  });
};

const helper = () => {
  document.querySelector('.img-upload__submit').disabled = !pristine.validate();
};

const onHashtagInput = () => helper();
const onCommentInput = () => helper();

const imgUploaderFormOpen = () => {
  uploader.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButtonUploader.addEventListener('click', clickClose);
  document.addEventListener('keydown', possibleEscButtonAction);
  if (imgPreview.hasAttribute('class')) {
    sliderWrapper.classList.remove('hidden');
  } else {
    sliderWrapper.classList.add('hidden');
  }
  scaleContainer.addEventListener('click', onScaleClick);
  effectList.addEventListener('change', onFilterButtonChange);
  addListenerForField(hashtagField);
  addListenerForField(commentField);
  helper();
};

function validation() {
  pristine.addValidator(hashtagField, hashtagsHandler, error);
  pristine.addValidator(commentField, commentHandler, error);
  helper();
}

const setFormSubmit = (onSuccess, onError) => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    submitButton.disabled = true;
    sendData(
      () => {
        onSuccess();
        renderMessage(true);
      },
      () => {
        onError();
        renderMessage();
      },
      new FormData(evt.target),
    );
  });
};

const renderUploadForm = () => {
  uploadField.addEventListener('change', imgUploaderFormOpen);
  hashtagField.addEventListener('input', onHashtagInput);
  commentField.addEventListener('input', onCommentInput);
  initialEffects();
  validation();
  setFormSubmit(closeFormWithDefaultSettings, closeUploadPopup);
};

export {renderUploadForm, imgPreview};
