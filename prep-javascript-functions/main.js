function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoSumTwo = addTwoNumbers(2, 2);
console.log(addTwoNumbers.name + '(2,2) is: ' + addTwoSumTwo);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var twoHoursInMins = convertHoursToMinutes(2);
console.log(convertHoursToMinutes.name + '(2): ' + twoHoursInMins);

function getGreeting(name) {
  return 'Hello ' + name;
}

var hWorld = getGreeting('World');
console.log(getGreeting.name + "('World'): " + hWorld);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * (5);
}
var multiply5 = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5.name + '(10,5): ' + multiply5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / (5);
}
var multiplydivide5sum = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5.name + '(35,10): ' + multiplydivide5sum);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var sub2sum = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbers.name + '(22,7): ' + sub2sum);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference5 = getCircleCircumference(5);
console.log(getCircleCircumference.name + '(5): ' + circumference5);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(getCircleCircumference.name + "('Juan', 'Ramirez'): " + fullName);

function cube(number) {
  return number * number;
}
var fiveCube = cube(5);
console.log(cube.name + '(5): ' + fiveCube);
