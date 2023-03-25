const esikhon = {name: 'esikhon.com', job: 'training institute'};
// console.log(esikhon);

const person = new Object();
// console.log(person);

const material = Object.create(esikhon);
// console.log(material.job);

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const pepo = new People('BappaRaj', 55);
console.log(pepo);