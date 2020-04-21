/* eslint-disable indent */
'use strict';

//max min
//function max
//initalize a max


//while the counter is < array.length
//white (counter i < array.length)
//  if current max value < array[index]
//      new max = array[index]
//i++
function max(numArray) {
    let i = 0;
    let currentMax = -Infinity;
    while (i < numArray.length) {
        if (currentMax < numArray[i]) {
            currentMax = numArray[i];
        }
        i++;
    }
    return currentMax;
}
//return max

//function min
function min(numArray) {
    let i = 0;
    let currentMin = Infinity;
    while (i < numArray.length) {
        if (currentMin > numArray[i]) {
            currentMin = numArray[i];
        }
        i++;
    }
    return currentMin;
}


console.log(max([2, 3, 4, 5, 7]));
console.log(min([4, 3, 67, 2, 1]));

//function takes average
//let total = 0
//average.forEach(num => toatl += num)
//return total / average.length

function getAverage(numArray) {
    let total = 0;
    numArray.forEach(num => total += num);
    return total / numArray.length;
}

console.log(getAverage([2, 4, 5, 7]));

function createMyObject() {
    return {
        //one key called 'foo' => 'bar'
        foo: 'bar',
        'answerToUniverse': 42,
        'olly olly': 'oxen free',
        sayHello: function () {
            return 'hello';
        }
        //answer to universe => 42
        //olly olly => 'oxen free'
        //sayhello() => function that returns hello
    };
}

let blah = createMyObject();
console.log(blah.sayHello());
//console.log(blah.sayHello());

function updateObject(obj) {
    //update key/values
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    //foo = 'foo'
    //bar = 'bar'
    //bizz = 'bizz'
    //bang = 'bang'
    return obj;
}

updateObject(blah);
console.log(blah.foo, blah.bar, blah.bizz, blah.bang);

function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        // replace `null` with a function that uses self reference to return
        // full name using this
        fullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    };
    return person;
}

let person = personMaker();
console.log(person.fullName());


function keyDeleter(obj) {
    // delete foo and bar
    //return obj
    delete obj.foo;
    delete obj.bar;
    return obj;
}

keyDeleter(blah);
console.log(blah);

//makeStudentReport(data)
//data = [name, grade]
//    let returnArray = [];
//    how to split data -> data.forEach(student => returnArray.push(`${student.name}: ${student.grade}`))
//    return returnArray;
//returns array of strings
//name: grade


function makeStudentReport(data) {
    let returnArray = [];
    data.forEach(student => returnArray.push(`${student.name}: ${student.grade}`));
    return returnArray;
}

const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentReport(testData));

//enroll in summerSchool(students)
//students = [{}]
//return array of objs
//    og name/course
//    course = In Summer School

function enrollInSummerSchool(students) {
    students.forEach(student => student.status = 'In Summer School');
    return students;
}

const studentData = [
    {
        name: 'Tim',
        status: 'Current student',
        course: 'Biology',
    },
    {
        name: 'Sue',
        status: 'Withdrawn',
        course: 'Mathematics',
    },
    {
        name: 'Liz',
        status: 'On leave',
        course: 'Computer science',
    },
];

//let roster = enrollInSummerSchool(studentData);
//console.log(roster);

let objArr = [{ id: 1, foo: 'bar' },
{ id: 2, foo: 'bizz' }];
//find by id
//takes two args (items, idnum)
//items = array of objects
//idnum = id of what we're trying to find
//find idnum in items
//return item of that idnum

function findById(items, idnum) {
    return items.find(item => item.id === idnum);
}

console.log(findById(objArr, 2));

//function validate keys (object, expectedkeys)
// object is a singular object
// expected keys is an array of keys
// let keys = object keys of object
// if keys.lengh != expectedkeys.length
// return false
// else 
// for i = 0 i < keys.length i++
//    if  != expectedkeys[i]
// return false
// else return true



function validateKeys(object, expectedkeys) {
    let keys = Object.keys(object);
    if (keys.length !== expectedkeys.length) {
        return false;
    } else {
        //compare keys
        if (keys.every(key => expectedkeys.includes(key))) {
            return true;
        } else {
            return false;
        }
    }
}

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
};

const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };

const expectedKeys = ['id', 'name', 'age', 'city'];

console.log(validateKeys(objectB, expectedKeys));

