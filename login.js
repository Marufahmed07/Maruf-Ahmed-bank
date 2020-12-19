const loginBtn= document.getElementById("login");
loginBtn.addEventListener("click",function(){
    // console.log("click Me");
    const loginAria= document.getElementById("login-aria");
    loginAria.style.display="none";
    const transactionAria= document.getElementById("Transaction-aria");
    transactionAria.style.display="block";

})
