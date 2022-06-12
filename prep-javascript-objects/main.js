const person = {
  firstName: 'Mackenzie',
  lastName: 'Lee',
  hobby: 'Painting'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: " + fullName);
person.job = 'Developer';
console.log("Person['job']: " + person.job);
person.previousJob = 'Event Manager';
console.log("The person's previous job was: " + person.previousJob);
console.log(person);
