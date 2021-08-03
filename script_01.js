
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

startApp();

function startApp() {
    ausgabe(rechner(getZahl("1"),getOp(),getZahl("2"))); 
}

// Modul: Zahl eingeben | Test:
// ausgabe(getZahl("1"));
function getZahl(numStr) {

    const displayStr = "Bitte Zahl " + numStr + " eingeben."
    let ziffer =  prompt(displayStr);
    let zahl = parseInt(ziffer);

    while (isNaN(zahl) && (ziffer !== null)) {
        ziffer =  prompt(displayStr);
        zahl = parseInt(ziffer); 
    }

    return zahl; 
}
 // Modul: Operand eingeben | Test:
 //ausgabe(getOp());
 function getOp() {
    let op = prompt("Bitte + | - | * | / eingeben.");

     // wenn op NICHT gültig ist UND user NICHT auf Abbrechen geklickt hat ...
     while (!isOpValid(op) && (op !== null)) { 
        op = prompt("Bitte + | - | * | / eingeben."); // Nochmal ...
 }
 return op;
}


// Modul: Operand überprüfen | Test:
//  ausgabe(isOpValid("+"));
//  ausgabe(isOpValid("-"));
//  ausgabe(isOpValid("*"));
//  ausgabe(isOpValid("/"));
//  ausgabe(isOpValid(""));
//  ausgabe(isOpValid("#!?"));
function isOpValid(op) {

    // 1. Variante -- switch()
    // switch (op) {
    //     case "+":
    //     case "-":
    //     case "*":
    //     case "/":
    //         return true;    
    //     default:
    //         return false;
    // }

    return op == "+" || op == "-" || op == "*" || op == "/";
 }
// Modul: Rechenart auswählen | Tests:
// ausgabe(rechner(10,"+",4));
// ausgabe(rechner(10,"-",4));
// ausgabe(rechner(10,"*",4));
// ausgabe(rechner(10,"/",4));
// ausgabe(rechner(10,"/",0));
// ausgabe(rechner(10,"#!?",0));

function rechner(a,op,b) {  
    // a,b --> Operanden / Operatoren: +,- ..
    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "Irgendwas ging schief!";
    }
}
// Modul: Division a / b |  Test:
// ausgabe(dividieren(4,2));
// ausgabe(dividieren(4,-2));
// ausgabe(dividieren(1,4));
// ausgabe(dividieren(0,2));
// ausgabe(dividieren(2,0));
function dividieren(a,b) {

    // kürzer, besser
    if (b != 0) {
        return a / b; 
    }
    return "Division durch 0 nicht OK!";

    // ausführlich
    // if (b == 0) {
    //     return "Division durch 0 nicht OK!"
    // } else {
    //     return a / b; 
    // }

}

// Modul: Multiplikation a * b |  Test:
// ausgabe(multiplizieren(2,1));
// ausgabe(multiplizieren(2,0));
function multiplizieren(a,b) {
    return a * b;
}

// Modul: Subtraktion a - b |  Test:
// ausgabe(subtrahieren(2,1));
// ausgabe(subtrahieren(2,10));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition a + b |  Test:
// ausgabe(addieren(2,1));
function addieren(a,b) {
    return a + b;
}

// Modul: Konsolenausgabe |  Test:
// ausgabe("Hallo Welt!")
// ausgabe(20);
function ausgabe(outputStr) {
   
    // if (typeof outputStr == typeof 1) { 
    if (typeof outputStr === "number") { 
        outputStr = "Das Ergebnis ist: " + outputStr;
    }

    console.log(outputStr);
}
