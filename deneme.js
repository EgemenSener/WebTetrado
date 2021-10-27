function myFunction() {
    // Get the checkbox
    //var checkBox = document.getElementById("myCheck");
    // Get the output text
    

    // If the checkbox is checked, display the output text
   /* if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    } */
}
var checkBox1 = false;
var checkBox2 = false;
var checkBox3 = false;
var radio = 2;




function checkFunction1() {

    if(document.getElementById("myCheck1").checked){

         checkBox1 = true;
         return checkBox1;
    }
    else{
        checkBox1 = false;
         return checkBox1;
    }
}
function checkFunction2(){
    
    if(document.getElementById("myCheck2").checked){
        
        checkBox2 = true;
         return checkBox2;
    }
    else{
        checkBox2 = false;
         return checkBox2;
    }
}
function checkFunction3() {

    if(document.getElementById("myCheck3").checked){
        
        checkBox3 = true;
         return checkBox3;
    }
    else{
        checkBox3 = false;
         return checkBox3;
    }
}
function checkFunction4() {

    if(document.getElementById("flexRadioDefault1").checked){
        
         radio = 1;
         return radio;
    }
    else if(document.getElementById("flexRadioDefault2").checked)  { 
        
        radio = 2;
        return radio;
    }
}

// for testing parameters on console 
function printFunction(){
  
    console.log(document.getElementById("textt").value + " Checkbox1 is " + checkBox1 + " Checkbox2 is " + checkBox2 + " Checkbox3 is " + checkBox3 + " Radio button value is " + radio);
    
}

function takeResponse(){

    //getUserList();
    let data = {checkBox1,checkBox2,checkBox3,radio1,radio2}
    
        fetch("http://localhost:8000/input",{
            method:"POST",
            headers:{
    
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
    
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
         
        })
 }