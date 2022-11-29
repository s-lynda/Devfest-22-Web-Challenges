
const input = document.querySelector("input"),
        showHide = document.querySelector(".show_hide"),
        indicator = document.querySelector(".indicator"),
        text = document.querySelector(".text");
    
  //Show and hide the password      
  showHide.addEventListener("click", ()=>
  {
    if(input.type === "password"){
        input.type = "text";
        showHide.classList.replace("fa-eye-slash","fa-eye");
    }
    else 
    {
        input.type = "password";
        showHide.classList.replace("fa-eye","fa-eye-slash");
    }
  });

  
  //password can contains alphabets upper & lowercase,and numbers or symbols ..
   //regex
    var alphabet = /[a-zA-Z]/, 
      numbers = /[0-9]/, 
      symbols = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/;

  input.addEventListener("keyup", ()=>
  {
    indicator.classList.add("active");
    var val = input.value;
    if(val.match(alphabet) || val.match(numbers) || val.match(symbols))
    {
      text.textContent = 'Password is weak.';
      input.style.borderColor ="#FF6333";
      showHide.style.color = "#FF6333";
      text.style.color = "#FF6333";
    }

    if(val.match(alphabet) && val.match(numbers) && val.length >= 8)
    {
      text.textContent = "Password is medium";
      input.style.borderColor = "#cc8500";
      showHide.style.color = "#cc8500";
      text.style.color = "#cc8500";
    }
    if(val.match(alphabet) && val.match(numbers) && val.match(symbols) && val.length >= 8)
    {
      text.textContent = "Password is strong";
      input.style.borderColor = "#22C32A";
      showHide.style.color = "#22C32A";
      text.style.color = "#22C32A";
    }

    if(val == "")
    {
      indicator.classList.remove("active");
      input.style.borderColor = "##e63131";
      showHide.style.color = "#A6A6A6";
      text.style.color = "#A6A6A6";
    }
  });