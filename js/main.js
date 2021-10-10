//Использованы функции с Javascript.ru (https://learn.javascript.ru/) и developer.mozilla.org
function getRandomInt (min,max) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min>max) {
    const temp = min;
    min = max;
    max = temp;
  }

  return min + Math.floor(Math.random()*(max-min));
}

function getRandomFloat (min,max) {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min>max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return min + Math.random()*(max-min);
}

getRandomInt(-5,-1);
getRandomFloat(1.1,1.2);
