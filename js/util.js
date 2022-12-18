import {POSSIBLE_DESCRIPTIONS, POSSIBLE_MESSAGE, POSSIBLE_NAMES, usedCommentsID} from './data.js';

const isStrSizeAcceptable = (string, maxSize) => string.length <= maxSize;

const getRndIntInRange = (leftNumber, rightNumber) =>
{
  if (leftNumber < 0) {leftNumber = 0;}
  if (rightNumber < 0) {rightNumber = 0;}
  if (leftNumber < rightNumber) {[leftNumber, rightNumber] = [rightNumber, leftNumber];}
  return Math.floor(Math.random() * (rightNumber + 1 - leftNumber) + leftNumber);
};

const getUnusedID = () => {
  let tempID = getRndIntInRange(0, 999);
  while(usedCommentsID.includes(tempID))
  {
    tempID = getRndIntInRange(0, 999);
  }
  usedCommentsID.push(tempID);
  return tempID;
};

const generateComments = (amountOfComments) =>
{
  const comments = [];
  for (let i = 0; i < amountOfComments; i++)
  {
    comments.push(
      {
        id: getUnusedID(),
        avatar: `img/avatar-${getRndIntInRange(1, 6)}.svg`,
        message: POSSIBLE_MESSAGE[getRndIntInRange(0, POSSIBLE_MESSAGE.length - 1)],
        name: POSSIBLE_NAMES[getRndIntInRange(0, POSSIBLE_NAMES.length - 1)]
      }
    );
  }

  return comments;
};

const generatePosts = (amountOfPosts) =>
{
  const tempPosts = [];
  for (let i = 1; i <= amountOfPosts; i++)
  {
    tempPosts.push(
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: POSSIBLE_DESCRIPTIONS[getRndIntInRange(0, POSSIBLE_DESCRIPTIONS.length - 1)],
        likes: getRndIntInRange(15, 200),
        comments: generateComments(10)
      }
    );
  }

  return tempPosts;
};

const showAlert = (message, alertShowTime) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#f5cc00';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => alertContainer.remove(), alertShowTime);
};

const isEscape = (evt) => evt.key === 'Escape';

export {getRndIntInRange, getUnusedID, generateComments, generatePosts, isStrSizeAcceptable, isEscape, showAlert};
