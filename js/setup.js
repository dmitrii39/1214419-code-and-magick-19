'use strict';


var userDialog = document.querySelector('.setup');
var blockShow = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
// userDialog.classList.remove('hidden');


blockShow.addEventListener('click', function () {
  userDialog.classList.remove('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    userDialog.classList.add('hidden');
  }
});

blockShow.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    userDialog.classList.remove('hidden');
} });

setupClose.addEventListener('click', function () {
  userDialog.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    userDialog.classList.add('hidden');
  };
});

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


// ------------------- module4 - task1--------------------------
var mainWizardWear = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];


var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var mainWizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var mainWizardWearRandom = function () {
  var mainWizardWearRandomIndex = Math.floor(Math.random() * mainWizardWear.length);
  return mainWizardWear[mainWizardWearRandomIndex];
};


var mainWizardEyesRandom = function () {
  var mainWizardEyesRandomIndex = Math.floor(Math.random() * mainWizardEyes.length);
  return mainWizardEyes[mainWizardEyesRandomIndex];
};

var fireballColorRandom = function () {
  var fireballColorRandomIndex = Math.floor(Math.random() * fireballColor.length);
  return fireballColor[fireballColorRandomIndex];
};

var wizardCoat = document.querySelector('.wizard-coat');
var mainEyesColor = document.querySelector('.wizard-eyes');
var mainFireballColor = document.querySelector('.setup-fireball-wrap');
var inpCoatColor = document.querySelector('input[name="coat-color"]');
var inpEyesColor = document.querySelector('input[name="eyes-color"]');
var inpFireballColor = document.querySelector('input[name="fireball-color"]');


wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = inpCoatColor.value = mainWizardWearRandom();
});

mainEyesColor.addEventListener('click', function () {
  mainEyesColor.style.fill = inpEyesColor.value = mainWizardEyesRandom();
});
mainFireballColor.addEventListener('click', function () {
  mainFireballColor.style.background = inpFireballColor.value = fireballColorRandom();
});

