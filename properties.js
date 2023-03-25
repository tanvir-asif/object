const ball = {
    color: 'orange',
    shape: 'round',
    price: 25,
    isNew: false
}

// const keys = Object.keys(ball);
// console.log(keys);

// const value = Object.values(ball);
// console.log(value);

// const entries= Object.entries(ball);
// console.log(entries);

// Object.seal(ball);

ball.price= 100;
// delete ball.isNew;
// console.log(ball);

Object.freeze(ball);
ball.price= 50;
delete ball.isNew;
// console.log(ball);

const football = {
    color: 'white',
    shape: 'round',
    price: 250,
    isNew: true
}

for(const prop in football){
    // console.log(prop , football[prop]);
}

const keys = Object.keys(football);
for(const props of keys){
    // console.log(props, football[props]);
}

for(const[key,value] of Object.entries(football)){
    console.log(key,":", value);
}