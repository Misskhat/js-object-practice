class Teacher{
    constructor(name, subject, time){
        this.name = name;
        this.subject = subject;
        this.time = time;
    }
    lecture(subject){
        console.log(`teaching ${subject}`);
    }
}

const rabbi = new Teacher('rabbi', 'math', 2);
console.log(rabbi);
rabbi.lecture('math');
