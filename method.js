const student={
    id: 101,
    name: 'Asif',
    money: 5000,
    isRich: true,
    subject:['bangla', 'english', 'math', 'science'],
    bestFriend:{
        name: 'Tanvir',
        subject: 'BGS'
    },
    takeExam: function(){
        console.log(this.name, 'taking exam');
    },
    treat: function(exp, tips){
        this.money = this.money - exp - tips;
        return this.money;
    }
};

// student.takeExam();
const remaining = student.treat(1999, 101);
console.log(remaining);