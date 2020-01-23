'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var scoreText = '0000';

var renderCloud = function (ctx, x, y, color) {
ctx.fillStyle = color;
ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


    var playerIndex = 0;
    var playerName = 'Вы';

ctx.fillStyle = '#000';
ctx.fillText('Вы', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 0, CLOUD_HEIGHT - GAP / 4);
ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 0, CLOUD_HEIGHT - GAP - BAR_HEIGHT - 10);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 0, CLOUD_Y + GAP * 1.4, BAR_WIDTH, BAR_HEIGHT);


    var playerIndex = 1;
    var playerName = 'Иван';


ctx.fillStyle = '#0f0';
ctx.fillText('Иван', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, CLOUD_HEIGHT - GAP / 4);
    ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, CLOUD_HEIGHT - GAP - BAR_HEIGHT - 10);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, CLOUD_Y + 70, BAR_WIDTH, BAR_HEIGHT);

    var playerIndex = 2;
    var playerName = 'Юлия';


ctx.fillStyle = '#0ff';
ctx.fillText('Юлия', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, CLOUD_HEIGHT - GAP / 4);
    ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, CLOUD_HEIGHT - GAP - BAR_HEIGHT - 10);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, CLOUD_Y + 70, BAR_WIDTH, BAR_HEIGHT);


    var playerIndex = 3;
    var playerName = 'Кекс';


ctx.fillStyle = '#0ff';
ctx.fillText('Кекс', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, CLOUD_HEIGHT - GAP / 4);
    ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, CLOUD_HEIGHT - GAP - BAR_HEIGHT - 10);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, CLOUD_Y + 70, BAR_WIDTH, BAR_HEIGHT);








ctx.fillStyle = '#000';
ctx.fillText('Ура вы победили! \n Список результатов:', 140, 35);

};



