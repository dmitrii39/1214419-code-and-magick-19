'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var scoreText = '0000';

var renderCloud = function (ctx, x, y, color) {
ctx.fillStyle = color;
ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


ctx.fillStyle = '#000';
ctx.fillText('Вы', CLOUD_X + GAP, 285);
ctx.fillText(scoreText, CLOUD_X + GAP, 105);
ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + 70, BAR_WIDTH, BAR_HEIGHT);

ctx.fillStyle = '#0f0';
ctx.fillText('Иван', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, 285);
ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, 105);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, 120, BAR_WIDTH, 150);

ctx.fillStyle = '#0ff';
ctx.fillText('Юлия', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, 285);
ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, 105);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, 120, BAR_WIDTH, 150);

ctx.fillStyle = '#0ff';
ctx.fillText('Котопёс', CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, 285);
ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, 105);
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, 120, BAR_WIDTH, 150);

ctx.fillStyle = '#000';
ctx.fillText('Ура вы победили! \n Список результатов:', 140, 75);

};



