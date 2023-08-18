// console.log("hello i am on console")
// console.log(document);
// console.log(document.images)
// console.log(document.links);


function handleClick(){

    //get the element data by id

    let fullName = document.getElementById("fullname").value;
    let addr = document.getElementById("address").value;
    let phoneNumber = document.getElementById("phoneno").value;
    let password = document.getElementById("password").value;

    let show =document.getElementById("show");
    show.innerHTML = `your full  name is ${fullName},address ${addr}, phone Number ${phoneNumber},password is ${password}`

}


