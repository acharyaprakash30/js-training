//program1
let x = 20;
while(x<20){
console.log("this number is less than 20");
}
console.log("end")

//program 2
let y = 20;
do{
    console.log("this number is less than 20")
}while(y<20);
console.log("end")

//program to calculate table of 2

let num = 1;
let sum = 0;
do{
    sum = sum + 2*num
    num++;
}while(num<=10);
console.log(sum);


// for in loop
let user = {
    name:"prakash",
    age:23,
    post:"trainer",
    college:"kalika"
}
for(let i in user){
    console.log(user[i])
}


//array methods
//map array item
let myarray = [1,3,4,3,12,15];
let total = 0;
myarray.map(function(item){
    total = total + item;
})
console.log(total)

//filter user array of object whose age is greater than 20
let users =[
    {
        id:1,
        name:"prakash",
        age:20,
        address:"banbatika"
    },
    {
        id:2,
        name:"ram",
        age:10,
        address:"butwal"
    },
    {
        id:3,
        name:"shyam",
        age:18,
        address:"sunwal"
    },
    {
        id:4,
        name:"hari",
        age:23,
        address:"bhairahawa"
    },
    {
        id:5,
        name:"sita",
        age:23,
        address:"kathmandu"
    }
]
let newUsers = users.filter((user)=>user.age>20);



