// Task_1

{
    
function upperCase(str) {
    if(/^[A-Z]/.test(str)) {
        return console.log("String's starts with uppercase character")
    } else {
        return console.log("String's not starts with uppercase character")
    }
}
upperCase('regexp');
upperCase('RegExp');

}

// Task_2

{
function checkEmail(str) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
    return console.log(true);
   } else{
    return console.log(false);
   };
};
checkEmail("Qmail2@gmail.com");

} 

// Task_3

{

let regExp = /d{1}(b+)(d{1})/i;
let myArray = regExp.exec("cdbBdbsbz")
console.log(myArray);

}

// Task_4

{

let regExp = /(\w+)\s(\w+)/;
let str = "Java Script";
let newStr = str.replace(regExp, "$2, $1");
console.log(newStr);

}

// Task_5

{

function checkCreditCard(card) {
    if(/^((\d{4}[-]{1}){3}\d{4})$/.test(card)) {
        console.log('Valid');
    } else {
        console.log('Not Valid');
    }
}
checkCreditCard('9999-9999-9999-9999');

}


// Task_6

{
    function checkEmail(str) {
        const regExp = /^[A-Za-z0-9]+([-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regExp.test(str)) {
            console.log('Email is correct!')
        } else {
            console.log('Email is not correct!')
        } 
    }
    checkEmail('my_mail@gmail.com');
    checkEmail('my_ma--il@gmail.com');
    checkEmail('#my_mail@gmail.com');

} 

// Task_7

{

function checkLogin(str) {
    if(/^(?=.{2,10}$)(?![0-9])[a-z0-9.]+$/i.test(str)) {
        console.log(true)
        console.log(str.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g))
    } else {
        console.log(false)
        console.log(str.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g))
    }
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');

}