// CREATING OBJECTS
// NOTE: all keys in an are converted to strings behind the scenes

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workOutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    800: 'one hundred',
    bestPet: 'dog'
};
fitBitData['bestPet']= 'cat';
fitBitData.totalMiles = 300;
console.log(fitBitData.bestPet);
console.log(fitBitData['avgGoodSleep']);
fitBitData.totalSteps += 1000;
fitBitData.totalMiles--;
console.log(fitBitData);


const learners = {
    firstName:'Liz',
    lastName:'Yotto',
    strengths: ['Music', 'Cooking'] ,
    exams:{
        midterm: 92, 
        final: 88
    }
}
console.log(learners.strengths[1]); 
// console.log(learners.strengths.push('GBV'));
// console.log(learners.strengths.splice(2,0,'GBV'));
console.log(learners.strengths[2] = 'GBV');
const finalResult = `The total examination marks is: ${learners.exams.midterm + learners.exams.final}`;
console.log(finalResult);
console.log(learners);

// The total examination marks is: 180.

const person = {
    age: 45
}
console.log(person);
// suppose we want to add key propeties like gender=female or city=europe
person.gender = 'female'
person['city'] = 'europe'
// suppose we want to substract 20 from age
person.age -=20;
// and to identify 45
console.log(person.age);

const newPerson = {
    age: 45,
    cohorts: {
        cohortOne :15,
        cohortTwo : 19
}

}
// The total number of the two cohorts is : 34
const person1 = `The total number of the two cohorts is: ${newPerson.cohorts.cohortOne + newPerson.cohorts.cohortTwo}`;
console.log(person1);

const firstNum = {
    one: 1,
    two: 2,
    three: 3
}
const secondNum = {
    one: 1,
    two: 2,
    three: 3
}
console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(firstNum ===secondNum);