var checkBox1 = false;
var checkBox2 = false;
var checkBox3 = false;
var radio = 2;


function strictCheck() {

    if (document.getElementById("myCheck1").checked) {

        checkBox1 = true;
        return checkBox1;
    }
    else {
        checkBox1 = false;
        return checkBox1;
    }
}
function noReorderCheck() {

    if (document.getElementById("myCheck2").checked) {

        checkBox2 = true;
        return checkBox2;
    }
    else {
        checkBox2 = false;
        return checkBox2;
    }
}
function complete2dCheck() {

    if (document.getElementById("myCheck3").checked) {

        checkBox3 = true;
        return checkBox3;
    }
    else {
        checkBox3 = false;
        return checkBox3;
    }
}
function stackingMismatchCheck() {

    if (document.getElementById("flexRadioDefault1").checked) {

        radio = 1;
        return radio;
    }
    else if (document.getElementById("flexRadioDefault2").checked) {

        radio = 2;
        return radio;
    }
}

// for testing parameters on console 
function printFunction() {

    console.log(document.getElementById("textt").value + " Checkbox1 is " + checkBox1 + " Checkbox2 is " + checkBox2 + " Checkbox3 is " + checkBox3 + " Radio button value is " + radio);

}

function postResponse() {

    //getUserList();
    let data = { checkBox1, checkBox2, checkBox3, radio }

    fetch("http://localhost:8000/input", {
        method: "POST",
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

        })
}
function getResponse() {

    fetch("http://localhost:8000/result/:id")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const basePairs = data.basePairs[0];
            // const textBasePairs  = JSON.stringify(basePairs);
            // console.log(basePairs);
            document.getElementById("getResultsTable").innerHTML +=
                `<tr>
                <td><input type="text" class="form-control" value="${basePairs.edge3}"></td>
                </tr>`


        })
}
let companies = [

    {
        "pdb": "cillum fugiat anim ad",
        "stackingMismatch": 2,
        "strict": false,
        "noReorder": false,
        "complete2D": false
    }
]

