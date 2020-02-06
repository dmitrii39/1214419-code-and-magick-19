'use strict';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];


var colors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];


var eyecolors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];


var colorsRandom = function () {
  var colorsRandomIndex = Math.floor(Math.random() * colors.length);
  return colors[colorsRandomIndex];

};

var wizardNamesRandom = function () {
  var wizardNamesIndex = Math.floor(Math.random() * wizardNames.length);
  return wizardNames[wizardNamesIndex];
};

var wizardSurnamesRandom = function () {
  var wizardSurnamesRandomIndex = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  return WIZARD_SURNAMES[wizardSurnamesRandomIndex];
};

var eyecolorsRandom = function () {
  var eyecolorsRandomIndex = Math.floor(Math.random() * eyecolors.length);
  return eyecolors[eyecolorsRandomIndex];
};

var createMags = function () {
  var mags = [];
  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: wizardNamesRandom(),
      surname: wizardSurnamesRandom(),
      coatColor: colorsRandom(),
      eyesColor: eyecolorsRandom()
    };
    mags.push(wizard);
  }

  return mags;
};

createMags();

var wizards = function () {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardNamesRandom() + ' ' + wizardSurnamesRandom();
    wizardElement.querySelector('.wizard-coat').style.fill = colorsRandom();
    wizardElement.querySelector('.wizard-eyes').style.fill = eyecolorsRandom();
    similarListElement.appendChild(wizardElement);
  }
};
wizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
