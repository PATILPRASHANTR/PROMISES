//1

function func1(a) {
    console.log(a);
}

function caller(x, y, cb) {
    let res = x + y;
    cb(res);
}


caller(23, 54, func1);



//2


function number(n) {
    let num = n;
    setTimeout((func) => {
        console.log(++num);
        if(num >= 7) {
            return;
        }
        number(num);
    }, num*1000, number);
};
number(0);

 try to avoid using multiple callbacks to end up falling into callback hell



let production = () =>{
    console.log("Numbers")
    setTimeout(()=>{
    console.log("1")
    setTimeout(()=>{
    console.log("2")
    setTimeout(()=>{
    console.log("3")
    setTimeout(()=>{
    console.log("4")
    setTimeout(()=>{
    console.log("5")
    setTimeout(()=>{
    console.log("6")
    setTimeout(()=>{
    console.log("7")
    },7000)
    },6000)
    },5000)
    },4000)
    },3000)
    },2000)
    },1000)
    };
    
    production()


//3


let printNumbers = function(n) {
    return new Promise((resolve, reject) => {
        if(n <= 7){
            resolve(n++);
        setTimeout((num) => {
            printNumbers(num).then((q) => console.log(q));
        },n*1000, n);
        }
    })
}

//4


let bin = (str) => {
    return new Promise((resolve, reject) => {
        if(str === "yes") {
            resolve();
        }
        else {
            reject();
        }
    })
}

str = "yes";
bin(str).then(() => {
    console.log("promise resolved");
}).catch(() => {
    console.log("promise rejected");
})



//5

function func2(a) {
    console.log(a);
}

function caller1(x, y, cb) {
    let res = x + y;
    cb(res);
}


caller1(23, 54, func2);

//6


const getEmpId = () => {
    setTimeout(() => {
        console.log("fetching the ID's");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName: 'raghav',
                lName: 'khandelwal',
                age: 23
            };
            console.log(`the name if the employ is ${empDetails.fName} ${empDetails.lName}`);

            setTimeout(() => {
                (empDetails.gender = 'male'),
                console.log(`the name of Employee is ${empDetails.fName} ${empDetails.lName}`);

            }, 2000);
        }, 2000);
    }, 2000);
};

getEmpId();


//7

const getId = new Promise((resolve, reject) => { 
    setTimeout(() => {
        let id = [1, 2, 3, 4, 5];
        resolve(id);
        reject("Error in fetching the data");
    }, 2000)

});


getId                      
    .then((data) => { 
        console.log("the data resolved is", data); 
    })
    .catch((error) => {
        console.log(error);  
    })
    .finally(() => { 
        console.log("End of promise");
    });


//8 


const functionOne = () => {
    return 'I am function one';
};

const functionTwo = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("I am function two"); 
         }, 3000)
    })
}

const functionThree = () => {
    return "I am function three";
};


const callAllFunctions = async () => {
    let responseOne = functionOne();
    console.log(responseOne);


    let responseTwo = await functionTwo();
    console.log(responseTwo);


    let responseThree = functionThree();
    console.log(responseThree);
};

callAllFunctions();

const f1 = new Promise((resolve, reject) => resolve("this is function one"));
const f2 = new Promise((resolve, reject) => resolve("this is function two"));
const f3 = new Promise((resolve, reject) => resolve("this is function three"));
Promise.all([ f1, f2, f3]).then((message) => console.log(message));
