function getResponse() {
    
    document.getElementById("resultsPanel").style.visibility = "visible";

    let data = { "metals": [{ "symbol": "Sr", "count": 2 }, { "symbol": "Ca", "count": 4 }, { "symbol": "Na", "count": 2 }], "nucleotides": [{ "index": 1, "model": 1, "chain": "A", "number": 1, "icode": " ", "molecule": "RNA", "fullName": "A.U1", "shortName": "U", "chi": -143.734, "glycosidicBond": "anti" }, { "index": 2, "model": 1, "chain": "A", "number": 2, "icode": " ", "molecule": "RNA", "fullName": "A.G2", "shortName": "G", "chi": -166.866, "glycosidicBond": "anti" }, { "index": 3, "model": 1, "chain": "A", "number": 3, "icode": " ", "molecule": "RNA", "fullName": "A.G3", "shortName": "G", "chi": -120.728, "glycosidicBond": "anti" }, { "index": 4, "model": 1, "chain": "A", "number": 4, "icode": " ", "molecule": "RNA", "fullName": "A.G4", "shortName": "G", "chi": -155.298, "glycosidicBond": "anti" }, { "index": 5, "model": 1, "chain": "A", "number": 5, "icode": " ", "molecule": "RNA", "fullName": "A.G5", "shortName": "G", "chi": -148.035, "glycosidicBond": "anti" }, { "index": 6, "model": 1, "chain": "A", "number": 6, "icode": " ", "molecule": "RNA", "fullName": "A.U6", "shortName": "U", "chi": -133.307, "glycosidicBond": "anti" }, { "index": 13, "model": 1, "chain": "AA", "number": 1, "icode": " ", "molecule": "RNA", "fullName": "AA.U1", "shortName": "U", "chi": -143.734, "glycosidicBond": "anti" }, { "index": 14, "model": 1, "chain": "AA", "number": 2, "icode": " ", "molecule": "RNA", "fullName": "AA.G2", "shortName": "G", "chi": -166.866, "glycosidicBond": "anti" }, { "index": 15, "model": 1, "chain": "AA", "number": 3, "icode": " ", "molecule": "RNA", "fullName": "AA.G3", "shortName": "G", "chi": -120.728, "glycosidicBond": "anti" }, { "index": 16, "model": 1, "chain": "AA", "number": 4, "icode": " ", "molecule": "RNA", "fullName": "AA.G4", "shortName": "G", "chi": -155.298, "glycosidicBond": "anti" }, { "index": 17, "model": 1, "chain": "AA", "number": 5, "icode": " ", "molecule": "RNA", "fullName": "AA.G5", "shortName": "G", "chi": -148.035, "glycosidicBond": "anti" }, { "index": 18, "model": 1, "chain": "AA", "number": 6, "icode": " ", "molecule": "RNA", "fullName": "AA.U6", "shortName": "U", "chi": -133.307, "glycosidicBond": "anti" }, { "index": 7, "model": 1, "chain": "AB", "number": 1, "icode": " ", "molecule": "RNA", "fullName": "AB.U1", "shortName": "U", "chi": -143.734, "glycosidicBond": "anti" }, { "index": 8, "model": 1, "chain": "AB", "number": 2, "icode": " ", "molecule": "RNA", "fullName": "AB.G2", "shortName": "G", "chi": -166.866, "glycosidicBond": "anti" }, { "index": 9, "model": 1, "chain": "AB", "number": 3, "icode": " ", "molecule": "RNA", "fullName": "AB.G3", "shortName": "G", "chi": -120.728, "glycosidicBond": "anti" }, { "index": 10, "model": 1, "chain": "AB", "number": 4, "icode": " ", "molecule": "RNA", "fullName": "AB.G4", "shortName": "G", "chi": -155.298, "glycosidicBond": "anti" }, { "index": 11, "model": 1, "chain": "AB", "number": 5, "icode": " ", "molecule": "RNA", "fullName": "AB.G5", "shortName": "G", "chi": -148.035, "glycosidicBond": "anti" }, { "index": 12, "model": 1, "chain": "AB", "number": 6, "icode": " ", "molecule": "RNA", "fullName": "AB.U6", "shortName": "U", "chi": -133.307, "glycosidicBond": "anti" }, { "index": 19, "model": 1, "chain": "AC", "number": 1, "icode": " ", "molecule": "RNA", "fullName": "AC.U1", "shortName": "U", "chi": -143.734, "glycosidicBond": "anti" }, { "index": 20, "model": 1, "chain": "AC", "number": 2, "icode": " ", "molecule": "RNA", "fullName": "AC.G2", "shortName": "G", "chi": -166.866, "glycosidicBond": "anti" }, { "index": 21, "model": 1, "chain": "AC", "number": 3, "icode": " ", "molecule": "RNA", "fullName": "AC.G3", "shortName": "G", "chi": -120.728, "glycosidicBond": "anti" }, { "index": 22, "model": 1, "chain": "AC", "number": 4, "icode": " ", "molecule": "RNA", "fullName": "AC.G4", "shortName": "G", "chi": -155.298, "glycosidicBond": "anti" }, { "index": 23, "model": 1, "chain": "AC", "number": 5, "icode": " ", "molecule": "RNA", "fullName": "AC.G5", "shortName": "G", "chi": -148.035, "glycosidicBond": "anti" }, { "index": 24, "model": 1, "chain": "AC", "number": 6, "icode": " ", "molecule": "RNA", "fullName": "AC.U6", "shortName": "U", "chi": -133.307, "glycosidicBond": "anti" }], "basePairs": [{ "nt1": "A.G2", "nt2": "AB.G2", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AB.G2", "nt2": "A.G2", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "A.G2", "nt2": "AC.G2", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AC.G2", "nt2": "A.G2", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "A.G3", "nt2": "AB.G3", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AB.G3", "nt2": "A.G3", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "A.G3", "nt2": "AC.G3", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AC.G3", "nt2": "A.G3", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "A.G4", "nt2": "AB.G4", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AB.G4", "nt2": "A.G4", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "A.G4", "nt2": "AC.G4", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AC.G4", "nt2": "A.G4", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "A.G5", "nt2": "AB.G5", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AB.G5", "nt2": "A.G5", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "A.G5", "nt2": "AC.G5", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AC.G5", "nt2": "A.G5", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "A.U6", "nt2": "AB.U6", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AB.U6", "nt2": "A.U6", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "A.U6", "nt2": "AC.U6", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AC.U6", "nt2": "A.U6", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AA.G2", "nt2": "AB.G2", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AB.G2", "nt2": "AA.G2", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AA.G2", "nt2": "AC.G2", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AC.G2", "nt2": "AA.G2", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AA.G3", "nt2": "AB.G3", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AB.G3", "nt2": "AA.G3", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AA.G3", "nt2": "AC.G3", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AC.G3", "nt2": "AA.G3", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AA.G4", "nt2": "AB.G4", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AB.G4", "nt2": "AA.G4", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AA.G4", "nt2": "AC.G4", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AC.G4", "nt2": "AA.G4", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AA.G5", "nt2": "AB.G5", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AB.G5", "nt2": "AA.G5", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AA.G5", "nt2": "AC.G5", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AC.G5", "nt2": "AA.G5", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AA.U6", "nt2": "AB.U6", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }, { "nt1": "AB.U6", "nt2": "AA.U6", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AA.U6", "nt2": "AC.U6", "stericity": "cis", "edge5": "Hoogsteen", "edge3": "Watson-Crick" }, { "nt1": "AC.U6", "nt2": "AA.U6", "stericity": "cis", "edge5": "Watson-Crick", "edge3": "Hoogsteen" }], "helices": [{ "quadruplexes": [{ "tetrads": [{ "id": "A.G2-AB.G2-AA.G2-AC.G2", "nt1": "A.G2", "nt2": "AB.G2", "nt3": "AA.G2", "nt4": "AC.G2", "onz": "O+", "gbaClassification": "VIIIa", "planarityDeviation": 0.5150000000000006, "ionsChannel": [], "ionsOutside": [] }, { "id": "A.G3-AB.G3-AA.G3-AC.G3", "nt1": "A.G3", "nt2": "AB.G3", "nt3": "AA.G3", "nt4": "AC.G3", "onz": "O+", "gbaClassification": "VIIIa", "planarityDeviation": 0.6009999999999991, "ionsChannel": ["Sr"], "ionsOutside": [] }, { "id": "A.G4-AB.G4-AA.G4-AC.G4", "nt1": "A.G4", "nt2": "AB.G4", "nt3": "AA.G4", "nt4": "AC.G4", "onz": "O+", "gbaClassification": "VIIIa", "planarityDeviation": 0.22100000000000364, "ionsChannel": ["Sr"], "ionsOutside": [] }, { "id": "A.G5-AB.G5-AA.G5-AC.G5", "nt1": "A.G5", "nt2": "AB.G5", "nt3": "AA.G5", "nt4": "AC.G5", "onz": "O+", "gbaClassification": "VIIIa", "planarityDeviation": 0.9039999999999964, "ionsChannel": [], "ionsOutside": [] }, { "id": "A.U6-AC.U6-AA.U6-AB.U6", "nt1": "A.U6", "nt2": "AC.U6", "nt3": "AA.U6", "nt4": "AB.U6", "onz": "O-", "gbaClassification": "VIIIa", "planarityDeviation": 1.2879999999999967, "ionsChannel": ["Na", "Na"], "ionsOutside": [{ "nt": "A.U6", "ion": "Ca" }, { "nt": "AA.U6", "ion": "Ca" }, { "nt": "AB.U6", "ion": "Ca" }, { "nt": "AC.U6", "ion": "Ca" }] }], "onzm": "Op*", "loopClassification": "n/a", "gbaClassification": ["VIII"], "tracts": [["A.G2", "A.G3", "A.G4", "A.G5", "A.U6"], ["AB.G2", "AB.G3", "AB.G4", "AB.G5", "AB.U6"], ["AA.G2", "AA.G3", "AA.G4", "AA.G5", "AA.U6"], ["AC.G2", "AC.G3", "AC.G4", "AC.G5", "AC.U6"]], "loops": [] }], "tetradPairs": [{ "tetrad1": "A.G2-AB.G2-AA.G2-AC.G2", "tetrad2": "A.G3-AB.G3-AA.G3-AC.G3", "direction": "parallel", "rise": 3.2940000000000076, "twist": 27.13716809708258 }, { "tetrad1": "A.G3-AB.G3-AA.G3-AC.G3", "tetrad2": "A.G4-AB.G4-AA.G4-AC.G4", "direction": "parallel", "rise": 3.2839999999999954, "twist": 35.6555537976685 }, { "tetrad1": "A.G4-AB.G4-AA.G4-AC.G4", "tetrad2": "A.G5-AB.G5-AA.G5-AC.G5", "direction": "parallel", "rise": 3.2764999999999986, "twist": 25.328632762672676 }, { "tetrad1": "A.G5-AB.G5-AA.G5-AC.G5", "tetrad2": "A.U6-AC.U6-AA.U6-AB.U6", "direction": "parallel", "rise": 3.2680000000000007, "twist": 39.26485339343091 }] }], "dotBracket": { "sequence": "UGGGGU-UGGGGU-UGGGGU-UGGGGU", "line1": ".([{<A-.)]}>A-.([{<a-.)]}>a", "line2": ".([{<A-.([{<a-.)]}>A-.)]}>a" } }



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
}
