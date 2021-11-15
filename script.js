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
            const helicesQuadruplexes = data.helices[0].quadruplexes[0];
            const hQLoops = helicesQuadruplexes.loops[0];
            const hQtetrads = helicesQuadruplexes.tetrads[0];
            const hQtracts = helicesQuadruplexes.tracts[0];
            const helicesTetradPairs = data.helices[0].tetradPairs[0];
            const metals = data.metals[0];
            const nucleotides = data.nucleotides[0];
            // const textBasePairs  = JSON.stringify(basePairs);
            // console.log(basePairs);
            console.log(helicesQuadruplexes)
            document.getElementById("getResultsPanel").innerHTML += `<p
            style="position: relative; border: 2px solid #062bbe;font-weight: bold;width: 100%;height:100%; padding:3px;line-height: 200%;color: #0000EE;">

             edge3="${basePairs.edge3}"
             edge5="${basePairs.edge5}"
             nt1="${basePairs.nt1}"
             nt2="${basePairs.nt2}"
             stericity="${basePairs.stericity}"</p>` +
                `<p
            style="position: relative; border: 2px solid #062bbe;font-weight: bold;width: 100%;height:100%; padding:3px;line-height: 200%;">
                
                <p>QUADRUPLEXES:
                    <p style="margin-left: 10px;">gbaClassification="${helicesQuadruplexes.gbaClassification}"</p>
                    <p style="margin-left: 10px;">loopClassification="${helicesQuadruplexes.loopClassification}"</p>
                    <p style="margin-left: 10px;">LOOPS:
                        
                        <p style="margin-left: 20px;">type="${hQLoops.type}"</p>
                        <p style="margin-left: 20px;">NUCLEOTIDES:
                            <p style="margin-left: 30px;">0="${hQLoops.nucleotides[0]}"</p>

                        </p>
                    </p>
                    <p style="margin-left: 10px;">onzm="${helicesQuadruplexes.onzm}"</p>
                    <p style="margin-left: 10px;">TETRADS:
                    
                        
                    
                    </p>
                </p>
            </p>` +
                `<p
            style="position: relative; border: 2px solid #062bbe;font-weight: bold;width: 100%;height:100%; padding:3px;line-height: 200%;">

                count="${metals.count}"
                symbol="${metals.symbol}"
            "</p>` +
                `<p
            style="position: relative; border: 2px solid #062bbe;font-weight: bold;width: 100%;height:100%; padding:3px;line-height: 200%;">

             chain="${nucleotides.chain}"
             chi="${nucleotides.chi}"
             fullName="${nucleotides.fullName}"
             glycosidicBond="${nucleotides.glycosidicBond}"
             icode="${nucleotides.icode}"
             index="${nucleotides.index}"
             model="${nucleotides.model}"
             molecule="${nucleotides.molecule}"
             number="${nucleotides.number}"
             shortName="${nucleotides.shortName}"</p>`
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

