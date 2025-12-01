const err_status = 200;

if (err_status === 200){
    console.log("OK")
} else if (err_status === 400){
    console.log("ERROR")
} else {
    console.log("Unknow")
}

switch (err_status){
    case 200:
        console.log("Operation")
        break;
    case 400:
        console.log("ERROR")//Error!
        break;
    default:
        console.log("Unknow")//Unknow
}

const message =
    (err_status === 200)? "Ok!":"Error!";
console.log(message);