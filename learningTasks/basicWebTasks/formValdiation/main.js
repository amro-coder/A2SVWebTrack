addEventListener("submit",onSubmit)

function onSubmit(e){
    const msg=document.querySelector(".msg")
    const name=document.querySelector(".name");
    const password=document.querySelector(".password");
    const reTypedPassword=document.querySelector(".reTypedPassword");
    e.preventDefault();
    if (name.value===""){
        msg.innerHTML="please enter a valid user name";
    }
    else if (password.value!=reTypedPassword.value){
        msg.innerHTML="password fields do not match";
    }
    else if (password.value.length<6){
        msg.innerHTML="your password must be at least 6 characters long";
    }
    else{
        console.log("success")
    }
    setTimeout(()=>msg.innerHTML="",2000);
}
