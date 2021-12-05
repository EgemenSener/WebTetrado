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
    document.getElementById("resultsPanel").style.visibility = "visible";
    fetch("http://localhost:8000/result/:id")
        .then(response => response.json())
        .then(data => {
            for (basePairs of data.basePairs) {
                document.getElementById("basePairs").innerHTML += `<tr>
                <td>${basePairs.edge3}</td> 
                <td>${basePairs.edge5}</td>
                <td>${basePairs.nt1}</td>
                <td>${basePairs.nt2}</td>
                <td>${basePairs.stericity}</td>
                </tr>`
            }
        
            helicesQuadruplexes = data.helices[0].quadruplexes[0]
            document.getElementById("helicesQuadruplexes").innerHTML += `<tr>
                <td>${helicesQuadruplexes.gbaClassification}</td> 
                <td>${helicesQuadruplexes.loopClassification}</td>
                <td>↓</td>
                <td>${helicesQuadruplexes.onzm}</td>
                <td>↓</td>
                <td>↓</td>
                </tr>`
        
            for (hQLoops of data.helices[0].quadruplexes[0].loops) {
                document.getElementById("hQLoopsElements").innerHTML += `<tr>
                    <td>${hQLoops.type}</td> 
                    <td>${hQLoops.nucleotides}</td>
                    </tr>`
            }
        
        
            console.log(data.helices[0].quadruplexes[0])
            for (hQtetrads of data.helices[0].quadruplexes[0].tetrads) {
                gbaClassification = JSON.stringify(hQtetrads.gbaClassification)
                ionsOutside = JSON.stringify(hQtetrads.ionsOutside)
                ionsChannel = JSON.stringify(hQtetrads.ionsChannel)
                document.getElementById("hQtetradsElements").innerHTML += `<tr>
                <td>${hQtetrads.id}</td> 
                <td>${hQtetrads.nt1}</td>
                <td>${hQtetrads.nt2}</td>
                <td>${hQtetrads.nt3}</td>
                <td>${hQtetrads.nt4}</td>
                <td>${hQtetrads.onz}</td>
                <td>${gbaClassification}</td>
                <td>${hQtetrads.planarityDeviation.toFixed(3)}</td>
                <td>${ionsChannel}</td>
                <td>${ionsOutside}</td>
                </tr>`
            }
        
            for (hQtracts of data.helices[0].quadruplexes[0].tracts) {
                document.getElementById("hQTractsElements").innerHTML += `<tr>
                <td>${hQtracts}</td> 
                </tr>`
            }
        
            for (helicesTetradPairs of data.helices[0].tetradPairs) {
                document.getElementById("helicesTetradPairs").innerHTML += `<tr>
                <td>${helicesTetradPairs.tetrad1}</td> 
                <td>${helicesTetradPairs.tetrad2}</td>
                <td>${helicesTetradPairs.direction}</td>
                <td>${helicesTetradPairs.rise.toFixed(3)}</td>
                <td>${helicesTetradPairs.twist.toFixed(3)}</td>
                </tr>`
            }
        
            for (metals of data.metals) {
                document.getElementById("metals").innerHTML += `<tr>
                <td>${metals.symbol}</td>
                <td>${metals.count}</td>
                </tr>`
            }
        
            for (nucleotides of data.nucleotides) {
                document.getElementById("nucleotides").innerHTML += `<tr>
                <td>${nucleotides.index}</td>
                <td>${nucleotides.model}</td>
                <td>${nucleotides.chain}</td>
                <td>${nucleotides.number}</td>
                <td>${nucleotides.icode}</td>
                <td>${nucleotides.molecule}</td>
                <td>${nucleotides.fullName}</td>
                <td>${nucleotides.shortName}</td>
                <td>${nucleotides.chi.toFixed(3)}</td>
                <td>${nucleotides.glycosidicBond}</td>
                </tr>`
            }
            
        })
        // .then(data => {
        //     document.getElementById("json").textContent = JSON.stringify(data, undefined, 2);
            
        // })
        // .then(data => {
        //     // console.log(data);
        //     const basePairs = data.basePairs[0];
        //     const helicesQuadruplexes = data.helices[0].quadruplexes[0];
        //     const hQLoops = helicesQuadruplexes.loops[0];
        //     const hQtetrads = helicesQuadruplexes.tetrads[0];
        //     const hQtracts = helicesQuadruplexes.tracts[0];
        //     const helicesTetradPairs = data.helices[0].tetradPairs[0];
        //     const metals = data.metals[0];
        //     const nucleotides = data.nucleotides[0];
        //     // const textBasePairs  = JSON.stringify(basePairs);
        //     console.log(data);
        //     // console.log(metals)
        //     document.getElementById("getResultsPanel").innerHTML += `<div
        //     style="position: relative; border: 2px solid #062bbe;font-weight: bold;min-width: 40%;height:100%; padding:3px;line-height: 200%;">
        //      <h4><u>BASEPAIRS</u></h4>
        //      <p>edge3="${basePairs.edge3}"</p>
        //      <p>edge5="${basePairs.edge5}"</p>
        //      <p>nt1="${basePairs.nt1}"</p>
        //      <p>nt2="${basePairs.nt2}"</p>
        //      <p>stericity="${basePairs.stericity}"</p></div>` + `<p></p>` +
        //         `<div
        //     style="position: relative; border: 2px solid #062bbe;font-weight: bold;min-width: 40%;height:100%; padding:3px;line-height: 200%;">
        //         <h4><u>HELICES</u></h4>
        //         <p>QUADRUPLEXES:
        //             <p style="margin-left: 10px;">gbaClassification="${helicesQuadruplexes.gbaClassification}"</p>
        //             <p style="margin-left: 10px;">loopClassification="${helicesQuadruplexes.loopClassification}"</p>
        //             <p style="margin-left: 10px;">LOOPS:
                        
        //                 <p style="margin-left: 20px;">type="${hQLoops.type}"</p>
        //                 <p style="margin-left: 20px;">NUCLEOTIDES:
        //                     <p style="margin-left: 30px;">0="${hQLoops.nucleotides[0]}"</p>

        //                 </p>
        //             </p>
        //             <p style="margin-left: 10px;">onzm="${helicesQuadruplexes.onzm}"</p>
        //             <p style="margin-left: 10px;">TETRADS:
        //                 <p style="margin-left: 20px;">gbaClassification="${hQtetrads.gbaClassification}"</p>
        //                 <p style="margin-left: 20px;">id="${hQtetrads.id}"</p>
        //                 <p style="margin-left: 20px;">IONSCHANNEL:
        //                     <p style="margin-left: 30px;">0="${hQtetrads.ionsChannel[0]}"</p>

        //                 </p>
        //                 <p style="margin-left: 20px;">IONSOUTSIDE:
        //                     <p style="margin-left: 30px;">ion="${hQtetrads.ionsOutside[0].ion}"</p>
        //                     <p style="margin-left: 30px;">nt="${hQtetrads.ionsOutside[0].nt}"</p>

        //                 </p>
        //                 <p style="margin-left: 20px;">nt1="${hQtetrads.nt1}"</p>
        //                 <p style="margin-left: 20px;">nt2="${hQtetrads.nt2}"</p>
        //                 <p style="margin-left: 20px;">nt3="${hQtetrads.nt3}"</p>
        //                 <p style="margin-left: 20px;">nt4="${hQtetrads.nt4}"</p>
        //                 <p style="margin-left: 20px;">onz="${hQtetrads.onz}"</p>
        //                 <p style="margin-left: 20px;">planarityDeviation="${hQtetrads.planarityDeviation}"</p>
                        
                    
        //             </p>
        //             <p style="margin-left: 10px;">TRACTS:
        //                 <p style="margin-left: 20px;">0="${hQtracts[0]}"</p>
           
        //             </p>
        //         </p>
        //         <p>TETRADPAIRS:
        //             <p style="margin-left: 10px;">direction="${helicesTetradPairs.direction}"</p>
        //             <p style="margin-left: 10px;">rise="${helicesTetradPairs.rise}"</p>
        //             <p style="margin-left: 10px;">tetrad1="${helicesTetradPairs.tetrad1}"</p>
        //             <p style="margin-left: 10px;">tetrad2="${helicesTetradPairs.tetrad2}"</p>
        //             <p style="margin-left: 10px;">twist="${helicesTetradPairs.twist}"</p>

        //         </p>
        //     </div>` + `<p></p>` +
        //         `<div
        //     style="position: relative; border: 2px solid #062bbe;font-weight: bold;min-width: 40%;height:100%; padding:3px;line-height: 200%;">
        //     <h4><u>METALS</u></h4>
        //         <p>count="${metals.count}"</p>
        //         <p>symbol="${metals.symbol}"</p>
        //     </div>` + `<p></p>` +
        //         `<div
        //     style="position: relative; border: 2px solid #062bbe;font-weight: bold;min-width: 40%;height:100%; padding:3px;line-height: 200%;">
        //      <h4><u>NUCLEOTIDES</u></h4>
        //      <p>chain="${nucleotides.chain}"</p>
        //      <p>chi="${nucleotides.chi}"</p>
        //      <p>fullName="${nucleotides.fullName}"</p>
        //      <p>glycosidicBond="${nucleotides.glycosidicBond}"</p>
        //      <p>icode="${nucleotides.icode}"</p>
        //      <p>index="${nucleotides.index}"</p>
        //      <p>model="${nucleotides.model}"</p>
        //      <p>molecule="${nucleotides.molecule}"</p>
        //      <p>number="${nucleotides.number}"</p>
        //      <p>shortName="${nucleotides.shortName}"</p></div>` + `<p></p>`
        // })
};
