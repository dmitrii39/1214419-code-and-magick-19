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
var satur = (Math.random() * 100) + '%';
var colorRand = 'hsl(240, ' + satur + ', 50%)';
var scoreText = '0000';

var renderCloud = function (ctx, x, y, color) {
ctx.fillStyle = color;
ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players) {
renderCloud (ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.3)');
renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff');


for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
    }   
    else {
      ctx.fillStyle = colorRand;
    }

    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP / 4);
    ctx.fillText(scoreText, CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP - BAR_HEIGHT - 10);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + GAP * 1.4, BAR_WIDTH, BAR_HEIGHT);
}

ctx.fillStyle = '#000';
ctx.fillText('Ура вы победили! \n Список результатов:', 140, 35);

};

