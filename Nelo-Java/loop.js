// var websites = ['w3schools', 'stackoverflow', 'mdn','freecodecamp','udemy'];
// for(let index in websites)
// {console.log(websites[index]);}

// var websites = ['w3schools', 'stackoverflow', 'mdn','freecodecamp','udemy'];
// for(let arrIndex of websites)
// document.write(arrIndex + "<br>")

// whileloop
// let num = 0;
// while (num<=1000)

// {let rem = num % 2;

// if (rem==0){
//     console.log(`${num} is an even number`) }
//     else{console.log(`${num} is an odd number`)
// }
// num+=20;}

// doWhileLoop

// let existingRef = 6;
// let newRef = 0;

// function generateReference(max)
// {return Math.floor(Math.random() * max) +1;}

// do{
// newRef= generateReference(10)
// console.log(`the reference is ${newRef}`)

// } while( 
//     newRef != existingRef
// )
// console.log('Our new transaction reference is: ' + newRef);

// var transaction = {
//     reference : newRef,
//     amount: 5000,
//     account_number: 9876543210,
//     bank_name: 'Zenith'
// }

// console.log(transaction)
// .....................................end of do while loop
// .............Break loop begins

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";
//   document.write(text)};

// .............................FOR LOOP OF
//   const employees = [
//    {name: 'David',
//     active: true,
//     salary: 200000}, 

//     {name: 'Emeka',
//     active: false,
//     salary : 50000},

//     {name : 'Joy',
//     active : true,
//     salary : 100000},

//     {name : 'Obinna',
//     active : false,
//     salary : 30000},

//     {name:'Ebele',
//     active: true,
//     salary: 15000}
//   ]

//   for (let employee of employees){
//     if(employee.active==false){continue;}
//         document.write(`Pay ${employee.name} the sum of ${employee.salary}` + "<br>")
//     }

    // let text = "ABCDEF, GHIJKLM, LMNOP, QWERTY";
    // console.log(text.substr(8))

    // let text = "ABCDEF, GHIJKLM, LMNOP, QWERTY";
    // console.log(text.replace("ABCDEF","AEIOU"))

    let text ="Mr Daniel is a facilitator at the ICT Hub";
    let text_2= text.replace("Daniel","Uche");
    document.write(text_2.replace("facilitator", "teacher"))

    let text_3 = "Gbenga went to fetch water";
    console.log(text_3.includes("water"))


    