const accountId = 14234;
let accountEmail = "bablukr.190@gmail.com";
var accountPassword = "1234";
accountCity = "East Delhi";
let accountState;

//accountId = 12345;

console.log(accountId)
/*
Prefer not to use var because of issue in block scope and functional scope.
*/
accountEmail = "abc@gmail.com";
accountPassword = "123";
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);