function allLetter(inputtxt)
  {
   var letterNumber = /^[0-9a-zA-Z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     alert("The username must only contain alphabetical or numerical characters!")
     }
  }
allLetter(username)
