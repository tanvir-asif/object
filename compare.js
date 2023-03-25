const first = {
    b:2, a:1
};
const second = {
    a:1, b:2
};
const third = first;

// if(first===second){
//     console.log('same');
// }else{
//     console.log('not same');
// }

// if(JSON.stringify(first)=== JSON.stringify(second)){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }

const tanvir = {
    Id: 101,
    money: 500,
    name: 'Tanvir Asif',
    treat: function (exp) {
        this.money -= exp;
        console.log(this);
        return this.money;
    }
}

const kew = {
    Id:102,
    money:1000,
    name: 'kew'
}

const papon= {
    Id:420,
    money: 10000,
    name: "Papon"
}

const treat = tanvir.treat.bind(papon);
// console.log(treat(1000));

