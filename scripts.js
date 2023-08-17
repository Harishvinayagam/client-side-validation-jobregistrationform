const form= document.getElementById('jobsform');
  document.getElementsByClassName("resetBtn")[0].addEventListener("click",()=>{
    form.reset();
  })
    document.getElementById("sbtn").addEventListener('click', (event) => 
{
    
    const name =document.getElementById('name');
    const age=document.getElementById('age');
    const male=document.getElementById('male');
    const female =document.getElementById('female');
    const country =document.getElementById('country');
    const resume = document.getElementById('resume').files;
    const email=document.getElementById('email');
    const phoneno=document.getElementById('phoneno');
    const password=document.getElementById('password');
    const cpassword=document.getElementById('cpassword');
    const subscribe=document.getElementById('subscribe');
    const nameVal = name.value.trim();
    const emailVal= email.value.trim();
    const phoneVal= phoneno.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
        if (nameVal === '') {
            alert('Please enter your name.');
            name.focus();
            event.preventDefault();
            return false;

        }
        // for(var i = 0;i<nameVal.length;i++){

        //     if(Number(nameVal[i]) >= 0 || Number(nameVal[i]) <= 9)
        //     { 
        //     f = 1;
        //     break;
        //     }
        // }
        // if(f == 0)  {
        //     alert('please enter a valid name');
        //     event.preventDefault();
        //     return;
        // }
        if(age.value==='')
        {

            alert('Please enter your age.');
            age.focus();
            event.preventDefault();
            return;  
        }
       else if(Number(age.value) >= 150 || Number(age.value)<=0 ){
            alert('Please enter valid age.');
            age.value = "";
           //age.clearTextField();
            age.focus();
            event.preventDefault();
            return;
        }
       else  if(isNaN(Number(age.value))){
            alert('Please enter number as age.');
            age.value = "";
            age.focus();
            event.preventDefault();
            return;
        }
        if(male.checked === false && female.checked === false){
            alert('Please select gender.');
            event.preventDefault();
            return;
        }
        if(country.value === "None"){
            alert('Please select country');
            country.value = "";
            event.preventDefault();
            country.focus();
             return;
        }
        if( resume.length === 0 ){
            alert('Please upload resume');
            event.preventDefault();
            return false;
        }
        if (emailVal === '') {
            alert('Please enter your email.');
            event.preventDefault();
            email.focus();
            return;
        }
    
        if (!isValidEmail(emailVal)) {
            alert('Please enter a valid email address.');
            emailVal.value="";
            email.focus();
            event.preventDefault();
            return;
        }
         if((phoneVal).toString().length != 10){
            alert('Please enter 10 numbers');
            (phoneVal).toString().value="";
            event.preventDefault();
            phoneno.focus();
            return;
         }
        if (phoneVal === '') {
            alert('Please enter your phone number.');
            event.preventDefault();
            phoneno.focus();
            return;
        }
        if(passwordval===''){
            alert('password is required')
            password.focus();
            event.preventDefault();
            return;
        }
        else if(passwordval.length<8){
            alert('password must be atleast 8 chaarcters');
            passwordval.value="";
            password.focus();
            event.preventDefault();
            return;
        }
        if(cpasswordval===''){
            alert('confirm password is required')
            cpasswordval.focus();
            event.preventDefault();
            return;
        }
        else if(cpasswordval!==passwordval){
            alert('password does not match');
            cpasswordval.value="";
            cpassword.focus();
            event.preventDefault();
            return;
        }
        if(subscribe.checked === false){
            alert('Please Accept terms and condition');
            event.preventDefault();
            return;
        }
        alert("name :"+nameVal+"\n"+"age :"+age.value+"\n"+"gender :"+((male.value)||(female.value))+"\n"+ "country :"+country.value+"\n"+"resume :"+resume[0].name+"\n"+"Email :"+emailVal+"\n"+"phoneno :"+phoneVal);
});
function isValidEmail(email) 
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
        

