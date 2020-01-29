'use strict';
var WIZARD_NAMES = [
'Иван',
'Хуан Себастьян',
'Мария',
'Кристоф',
'Виктор',
'Юлия',
'Люпита',
'Вашингтон'];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
{
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'red'
},
{
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)',
    eyesColor: 'blue'
},
{
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'yellow'
},
{
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(127, 127, 127)',
    eyesColor: 'green'
 }
];

// var eyesColors = [
// { eyesColor: 'black'},
// { eyesColor: 'red'},
// { eyesColor: 'blue'},
// { eyesColor: 'yellow'},
// { eyesColor: 'green'}
// ];

for (var i = 0; i < WIZARD_NAMES.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
userDialog.querySelector('.setup-similar').classList.remove('hidden');
