const findTheOldest = function(people) {
    let ages = people.map(person => person.yearOfDeath-person.yearOfBirth);
    let highestAge = Math.max(...ages);
    let oldestPerson = people.find(person => (person.yearOfDeath - person.yearOfBirth) === highestAge);
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
