﻿function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
var checkBox1 = false;
var checkBox2 = false;
var checkBox3 = false;
var radio1 = false;
var radio2 = false;


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
        
         radio1 = true;
         radio2 = false;
         return radio1 , radio2;
    }
    else if(document.getElementById("flexRadioDefault2").checked)  { 
        
        radio1 = false;
        radio2 = true;
        return radio1, radio2;
    }
}


function printFunction(){

    console.log("Checkbox1 is " + checkBox1 + " Checkbox2 is " + checkBox2 + " Checkbox3 is " + checkBox3 + " Radio button 1 is " + radio1 + " Radio button 2 is " + radio2);


}