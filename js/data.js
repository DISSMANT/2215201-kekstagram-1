const POSSIBLE_NAMES = [
  'Дмитрий',
  'Микола',
  'Клементина',
  'Деметриус',
  'Виктория',
  'user_unknown',
];

const POSSIBLE_DESCRIPTIONS = [
  'Хорошая фотография?',
  'Я решил заняться фотографией!',
  'Мяу!',
  'Как вам фото?'
];

const POSSIBLE_MESSAGE = [
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

const EFFECTS = {
  none: {
    filter: 'none',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  chrome: {
    filter: 'grayscale',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  sepia: {
    filter: 'sepia',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    }
  },
  marvin: {
    filter: 'invert',
    units: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    }
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  },
  heat: {
    filter: 'brightness',
    units: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    }
  }
};

const ALERT_SHOW_TIME = 2500;

const SCALE = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const usedCommentsID = [];

export {POSSIBLE_NAMES, POSSIBLE_DESCRIPTIONS, POSSIBLE_MESSAGE, EFFECTS, ALERT_SHOW_TIME, SCALE, usedCommentsID};

