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
tanvir.treat.call(papon, 4599);


tanvir.treat.apply(kew,[900]);
