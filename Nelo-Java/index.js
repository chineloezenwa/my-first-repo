// document.write('my second javascript');
// window.alert('external alert');

// document.getElementById('Demo').innerHTML='this is the new content of demo';

// var happy = 'we are happy to see you';
// document.getElementById('demo').innerHTML = happy;
// document.getElementById('demo2').innerHTML = happy;
// // document.getElementById('demo3').innerText = happy;

// // var fname = 'Sade';
// // document.getElementById('demo').innerHTML = "Dear " +fname +", wishing you a happy birthday.";

// // year = 2022;
// // date_of_birth = 1992;
// // age = year-date_of_birth;
// // document.getElementById('demo').innerHTML = `Dear ${fname} wishing you many more years on your ${age}th birthday `

// // // arithmetic operators

// // let x = 2, y = 3;
// // z= x+y;
// // document.getElementById('demo').innerHTML = "The answer is "+ z;

// // year = 2022;
// // date_of_birth=1960;
// // age = year-date_of_birth;
// // document.getElementById('demo').innerHTML = "Nigeria is "+ age +" years old.";

// let d = 10;
// d++;
// console.log(d+5);

// let e = 10;
// ++e;
// console.log(e+5);

// let date = new Date();
// let min = date.getMinutes()
// let hour = date.getHours()
// let sec = date.getSeconds()

// if(hour > 0.00 && hour < 11.59)
// {document.write('Good Morning Chinelo')}
// else if(hour >=12.00 && hour <= 15.30)
// {document.write('Good Afternoon')}

// else if(hour > 15.30 && hour <=21.00)
// {document.write('Good Evening Chinelo')}
// else if(hour > 21.00 && hour < 0.00)
// {document.write('Good Night Chinelo')}


// const person = {
//     first_name:'Daniel',
//     last_name: 'Adichie',
//     age: 15,
//     class: 'SS1',
//     gender: 'Male'

// document.write(person.first_name + ' ' + person.last_name + ' is ' + person.age +' years old');

// const person = {
//     first_name:'Daniel',
//     dob: 2000,
//     current_year: 2022,
//     class: 'SS1',
//     gender: 'Male',
//     description: function()
//     {return `${this.first_name} is ${this.current_year-this.dob} 
//     years old today`} }


//     document.write(person.description());

    // const person = {
    //     first_name:'Daniel',
    //     last_name: 'Adichie',
    //     dob: 1992,
    //     age: 30,
    //     current_year: 2022,
    //     class: '100level',
    //     gender: 'Male',
    //     course: 'Economics',

    //     surname: function()
    //     {
    //         return `${this.last_name} is ${this.first_name}'s surname and he is in ${this.class} studying ${this.course}.`
    //     }
    //     ,

    //     agecalc : function()
    //     {return `${this.first_name} is ${this.current_year-this.dob} 
    //     years old today`} }
        
    //     document.write(person.surname());

        
        // function calcAge(p, fname)
        // {
        //     document.write(`My First ${p} and my name is ${fname}`);
        // }
        // calcAge(19, 'Daniel');


        // function checkage(a,b,c,e){
        //     document.write(`${a} is younger than ${b} by ${c-e} years.`)
        // }
        // checkage('Ada', 'Biodun',15,12)


        // const chin = (a,b) => a+b;
        // document.write(chin(2,4))

        // const students = ['Star','Henry','Napoloen'];
        // document.write(students[0])

        // const studentsinfo = [
        //     {name : 'Star',
        //     hobby : 'Not coming to class'},

        //     {name: 'Henry',
        //     hobby: 'Singing'},

        //     {name: 'Napoleon',
        //     hobby: 'cracking dry jokes'}];

        //     document.write(`<br>` + studentsinfo[1].hobby + ' and ' + studentsinfo[2].hobby)

        // let text = " ";
        // for (let i=10; i<100; i+=10)
        // {text += 'There are ' + i + " people in class today" + "<br>";}
        // document.write(text)

