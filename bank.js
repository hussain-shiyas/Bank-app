function createAccount(){
   acnoDetails={ 
    uname:reg_uname.value,
    acno:reg_acno.value,
    pswd:reg_pswd.value,
    balance:2000

}

if(acnoDetails.acno in localStorage){
    alert('acno already present');
}
else
{
    localStorage.setItem(acnoDetails.acno,JSON.stringify(acnoDetails));
    alert('register sucessfully');
    // window.location.href="index.html";
}
}
