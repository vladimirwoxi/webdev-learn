function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var POSITION_COUNT = 10;
var arr = [];
var i, searchElement;
for (i = 0; i < POSITION_COUNT; i++) {
  arr[i] = getRandomInt(0, 15);
}
alert("Элементы массива: " + arr.join(" "));
do {
  searchElement = prompt("Введите число: ", '');
  searchElement = parseInt(searchElement);
  if ((searchElement == "") || (isNaN(searchElement))) {
    alert("Ошибка");
  }
}
while ((searchElement == "") || (isNaN(searchElement)));
if (arr.indexOf(searchElement) !== -1) {
  alert("Элемент найден");
} else {
  alert("Элемент не найден!");
}