

function Oppgave1() { 
    var num1 = Number(prompt("Skriv et tall"))
    var num2 = Number(prompt("Skriv et til tall"))
    var num3 = Number(prompt("Skriv enda et tall"))

    result = num1 + num2 + num3;
    return console.log(result);
}


function Oppgave2() {
    var tilfeldigTall1 = Math.round(Math.random()*10)
    var tilfeldigTall2 = Math.round(Math.random()*10)

    if (tilfeldigTall1 < tilfeldigTall2) {
        console.log(`${tilfeldigTall2} er større enn ${tilfeldigTall1}`);
    } else if (tilfeldigTall1 > tilfeldigTall2) {
        console.log(`${tilfeldigTall1} er større enn ${tilfeldigTall2}`);
    } else {
        console.log(`${tilfeldigTall1} og ${tilfeldigTall2} er like store`);
    }
}


function Oppgave3() {
    var tall1 = Number(prompt("Skriv et tall"));
    var regneOperasjon = prompt("Skriv en regneoperasjon");
    var tall2 = Number(prompt("Skriv et tall"));
    if (regneOperasjon == '+') {
        var resultat = tall1 + tall2
    } else if (regneOperasjon == '-') {
        var resultat = tall1-tall2
    } else if (regneOperasjon == '*') {
        var resultat = tall1 * tall2
    } else if (regneOperasjon == '/') {
        var resultat = tall1 / tall2
    } else {
        console.log("Skriv +, -, * eller /");
    }
    
    return console.log(resultat);
}


function Oppgave4() {
    var viktigTall1 = Number(prompt("Skriv et tall"))
    var viktigTall2 = Number(prompt("Skriv et tall som er høyere enn forrige tall"))
    var ikkeSåViktigTall = 0

    while (ikkeSåViktigTall < 10) {
        ikkeSåViktigTall++
        var veldigViktigTall = Math.round(Math.random() * (viktigTall2 - viktigTall1) + viktigTall1)
        return console.log(veldigViktigTall);
    }
}

function Oppgave5() {
    var list = []
    for (let i = 0; i < 20; i++) {
        var tall = Math.round(Math.random() * (20 - 1) + 1)

        list.push(tall)
    }
    var alleSammenSammen = list.reduce((a, b) => a + b, 0)
    return console.log(`De tilfeldige tallene er ${list}, og summen er ${alleSammenSammen}`);
}

function Oppgave6() {
    var riktigTall = Math.round(Math.random()*100);
    var gjett = prompt("Gjett et tall");

    while (gjett != riktigTall) {
        if (gjett < riktigTall) {
            gjett = prompt("For lavt, prøv igjen")
        } if (gjett > riktigTall) {
            gjett = prompt("For høyt, prøv igjen")
        }
    }
    return console.log("RIKTIG!!!");
}
