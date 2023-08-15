function loadNavbar(type) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("navbar-container").innerHTML = this.responseText;
    }
  };

  if(type=='old')
  {
    xhttp.open("GET", "oldnavbar.html", true);
    xhttp.send();
  }
  else{
    xhttp.open("GET", "navbar.html", true);
  xhttp.send();

  }
}


function showtheform(divName){

    const overlay = document.getElementById(divName);
    overlay.style.display = 'block';
}
function hideForm(divName) {
  const overlay = document.getElementById(divName);
  overlay.style.display = 'none';
}

function validateForm()
{
  const c1=validateID();
  const c2= validateName();
    if(c1 && c2)
    {return true;}
    else{
        return false;
    }

}
function validateID() {
    const ID_Node = document.getElementById("EmpID");
    const value = ID_Node.value;
    const error = document.getElementById("IDerror");
    if (!value.match(/^\d+$/)) {
      
      error.innerText = "Please enter numbers only.";
      return false;
    }
    else{
      
      error.innerText = "";
    
    return true;
    }

  }

  function validateName()
  {
    const Name_Node=document.getElementById("NameOfEmp");
         const Value=Name_Node.value;
         Value_Name= removeWhitespace(Value);
         const error = document.getElementById("NameOfEmp_error");
    if (!isAlphabetic(Value_Name)) {
        
        error.innerText = "Please enter your name correct.";
        return false;
      }
      else{
        error.innerText = "";
          return true;
      }
  }
  function isAlphabetic(text) {
    // A regex pattern that matches any character that is not a letter
    const nonAlphabeticRegex = /[^a-zA-Z]/g;
    // Test if the text contains any non-alphabetic character
    return !nonAlphabeticRegex.test(text);
  }
  function removeWhitespace(word) {
    // A regex pattern that matches any whitespace character
    const whitespaceRegex = /\s/g;
    // Replace any whitespace character with an empty string
    return word.replace(whitespaceRegex, "");
  }

function searchTable(value,data){

    var filteredData=[]

    for(var i=0; i<data.length; i++){
        value=value.toLowerCase();

        var name=data[i].Name.toLowerCase();
        if(name.includes(value)){


            filteredData.push(data[i])
        }


    }
    return filteredData


}


function buildTable2(data){
    
    
    var table = document.getElementById('myTable2')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].ID}</td>
                        <td>${data[i].Name}</td>
                        <td>${data[i].Email}</td>
                        <td>${data[i].Address}</td>
                        <td>${data[i].Phone}</td>
                        <td>${data[i].Age}</td>
                        <td>${data[i].Gender}</td>
                        <td>${data[i].Marital_Stauts}</td>
                        <td>${data[i].Salary}</td>
                        
                   </tr>`
        table.innerHTML += row
    }
    
}
 
function buildTable3(myArray) {
    var tableBody = document.getElementById("myTable");
    tableBody.innerHTML = '';
    myArray.forEach(function(rowData) {
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + rowData.ID + '</td>' +
                      '<td>' + rowData.Name + '</td>' +
                      '<td>' + rowData.Email+ '</td>' +
                      '<td>' + rowData.Address+ '</td>' +
                      '<td>' + rowData.Phone+ '</td>' +
                      '<td>' + rowData.Age + '</td>' +
                      '<td>' + rowData.Gender + '</td>' +
                      '<td>' + rowData.Marital_Stauts + '</td>' +
                      '<td>' + rowData.Salary + '</td>' +
                      '<td><button class="del-button">X</button></td>';
      tableBody.appendChild(row);
    });
  }
 // Attach event listener to delete buttons

 function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


function build_Vac_Table(myArray) {
  var tableBody = document.getElementById("vac_table");
  tableBody.innerHTML = '';
  var i=0;
    myArray.forEach(function(rowData) {
      if(i%2==0){

        var row = document.createElement('tr');

        row.className="Row1";


      }
      else{

        var row = document.createElement('tr');

        row.className="Row2";


      }
     
      
      row.innerHTML = '<td>' + rowData.ID + '</td>' +
                      '<td>' + rowData.Name + '</td>' +
                      '<td>' + rowData.From+ '</td>' +
                      '<td>' + rowData.To+ '</td>' +
                      '<td>' + rowData.Total+ '</td>' +
                      '<td>' + rowData.Reason + '</td>' +
    
                      '<td><div class="buttons-container" > <button class="ApproveBtn" >Approve</button>  <button class="RejectBtn" >Reject</button></div></td>' ;
                      
      i++;
      tableBody.appendChild(row);
    });
  }


  function replaceWithText(btn) {
    var divo = btn.parentNode;
    //document.write(btn.className)
    //there are 4 children for the divo text button text button
    var first_brother=divo.childNodes[1]; 
    var last_brother=divo.lastChild; 

    var textNode1 = document.createTextNode("Approved");
    var span1 = document.createElement("span");
    span1.appendChild(textNode1);
    span1.classList.add("Green_text");

    //<span class="Green_text"> Approved </span>


    var textNode2 = document.createTextNode("Rejected");
    var span2 = document.createElement("span");
    span2.appendChild(textNode2);
    span2.classList.add("Red_text");

   //<span class="Red_text"> Rejected </span>

   if(btn.className=='ApproveBtn') //if you clicked on the approve button
    {
      divo.replaceChild(span1, btn);
      
      divo.removeChild(last_brother);
    }
    else{
      divo.replaceChild(span2, btn);
      
      divo.removeChild(first_brother);
    }
}
function ensure(btn)
{

  if (btn.id=='OK')
  {
    deleteRow(this);
  }
  else{
    hideForm();
  }
}


function ensure()
{
  const deleteBtns = document.querySelectorAll('.del-button');


var button1=document.getElementById("OK");

var button2=document.getElementById("Cancel");


deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    showtheform('overlay2');

       // Add event listeners to the buttons
   button1.addEventListener("click", function () {
      deleteRow(btn)
      hideForm('overlay2');
      });

      button2.addEventListener("click", function () {
        hideForm('overlay2');
      });


    })



    
  
});

}



// function validateUsername(){
  
//     var usernameInput = document.getElementById("usernameinput");
// var usernameValidationMessage = document.getElementById("username-validation-message");

// usernameInput.addEventListener("input", function() {
//   if (usernameInput.value === "Mostafa") {
//     usernameValidationMessage.innerHTML = "";
//     return true;
//   } else {
//     usernameValidationMessage.innerHTML = "Username doesn't match";
//     return false;
//   }
// }); }
    
  
//   function validate_password()
//   {
//     // Check if password input is valid
//     var  passwordInput = document.getElementById("passwordinput");
//     var passwordError = document.getElementById("Passworderror");
//      if (passwordInput.value==="12312312") {
//       passwordError.innerHTML = "";
//       return true;
//     } else {
//       passwordError.innerHTML = "Password doesn't match";
//       return false;
//     }
    
    
 


  
// }







