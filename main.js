// Mode simple/difficile
// Streak de bonnes reponses
// Timer pour choix
//

let triesNumber = 2;
let a = triesNumber;
score = 0;
let mode = 1;
//let countriesCode = [{"Code": "AW"}, {"Code": "PY"}, {"Code": "AL"}, {"Code": "MN"}, {"Code": "CW"}, {"Code": "BB"}, {"Code": "XK"}, {"Code": "AE"}, {"Code": "DM"}, {"Code": "DK"}, {"Code": "NL"}, {"Code": "EG"}, {"Code": "UG"}, {"Code": "SX"}, {"Code": "GM"}, {"Code": "NP"}, {"Code": "PH"}, {"Code": "NZ"}, {"Code": "IS"}, {"Code": "FR"}, {"Code": "PF"}, {"Code": "ID"}, {"Code": "NO"}, {"Code": "VU"}, {"Code": "TM"}, {"Code": "GW"}, {"Code": "BH"}, {"Code": "KN"}, {"Code": "MA"}, {"Code": "CZ"}, {"Code": "BI"}, {"Code": "FI"}, {"Code": "GB"}, {"Code": "PL"}, {"Code": "UA"}, {"Code": "LC"}, {"Code": "VG"}, {"Code": "LK"}, {"Code": "TG"}, {"Code": "ME"}, {"Code": "BL"}, {"Code": "NE"}, {"Code": "GT"}, {"Code": "NR"}, {"Code": "GE"}, {"Code": "LU"}, {"Code": "PR"}, {"Code": "BT"}, {"Code": "PE"}, {"Code": "AO"}, {"Code": "ZM"}, {"Code": "MP"}, {"Code": "UZ"}, {"Code": "KP"}, {"Code": "UY"}, {"Code": "QA"}, {"Code": "CY"}, {"Code": "MU"}, {"Code": "CV"}, {"Code": "KH"}, {"Code": "VN"}, {"Code": "NI"}, {"Code": "PA"}, {"Code": "ML"},{"Code": "AG"}, {"Code": "CR"}, {"Code": "PG"}, {"Code": "NC"}, {"Code": "GR"}, {"Code": "FJ"}, {"Code": "WS"}, {"Code": "BF"}, {"Code": "TR"}, {"Code": "AZ"}, {"Code": "PS"}, {"Code": "BA"}, {"Code": "KM"}, {"Code": "MH"}, {"Code": "CO"}, {"Code": "KG"}, {"Code": "CM"}, {"Code": "GN"}, {"Code": "JO"}, {"Code": "DZ"}, {"Code": "YE"}, {"Code": "CL"}, {"Code": "MW"}, {"Code": "BD"}, {"Code": "SY"}, {"Code": "TZ"}, {"Code": "GQ"}, {"Code": "OM"}, {"Code": "SK"}, {"Code": "SD"}, {"Code": "MX"}, {"Code": "BR"}, {"Code": "TV"}, {"Code": "SV"}, {"Code": "JM"}, {"Code": "MT"}, {"Code": "PW"}, {"Code": "ET"}, {"Code": "LS"}, {"Code": "KZ"}, {"Code": "RS"}, {"Code": "TH"}, {"Code": "BY"}, {"Code": "CA"}, {"Code": "JP"}, {"Code": "MY"}, {"Code": "NA"}, {"Code": "SI"}, {"Code": "SO"}, {"Code": "BS"}, {"Code": "AR"}, {"Code": "KE"}, {"Code": "MD"}, {"Code": "HU"}, {"Code": "SN"}, {"Code": "TC"}, {"Code": "GY"}, {"Code": "LR"}, {"Code": "BE"}, {"Code": "LB"}, {"Code": "GD"}, {"Code": "MQ"}, {"Code": "SR"}, {"Code": "IR"}, {"Code": "KY"}, {"Code": "SS"}, {"Code": "IL"}, {"Code": "SE"}, {"Code": "BZ"}, {"Code": "AF"}, {"Code": "SL"}, {"Code": "BW"}, {"Code": "VE"}, {"Code": "RE"}, {"Code": "RU"}, {"Code": "ES"}, {"Code": "GH"}, {"Code": "SA"}, {"Code": "SC"}, {"Code": "EC"}, {"Code": "TO"}, {"Code": "BM"}, {"Code": "TW"}, {"Code": "IT"}, {"Code": "MZ"}, {"Code": "DJ"}, {"Code": "EE"}, {"Code": "BG"}, {"Code": "MF"}, {"Code": "SB"}, {"Code": "CI"}, {"Code": "TN"}, {"Code": "MV"}, {"Code": "LY"}, {"Code": "AU"}, {"Code": "NG"}, {"Code": "RO"}, {"Code": "IQ"}, {"Code": "DE"}, {"Code": "KR"}, {"Code": "MM"}, {"Code": "LA"}, {"Code": "AM"}, {"Code": "CH"}, {"Code": "US"}, {"Code": "CN"}, {"Code": "AI"}, {"Code": "DO"}, {"Code": "BO"}, {"Code": "PT"}, {"Code": "YT"}, {"Code": "MR"}, {"Code": "MG"}, {"Code": "GU"}, {"Code": "HR"}, {"Code": "PK"}, {"Code": "AT"}, {"Code": "GF"}, {"Code": "GA"}, {"Code": "IE"}, {"Code": "BJ"}, {"Code": "ZA"}, {"Code": "TJ"}, {"Code": "IN"}, {"Code": "EH"}, {"Code": "LV"}, {"Code": "HT"}, {"Code": "TD"}, {"Code": "LT"}, {"Code": "TL"}, {"Code": "GL"}, {"Code": "RW"}, {"Code": "CD"}, {"Code": "HN"}, {"Code": "KW"}, {"Code": "BN"}, {"Code": "TT"}, {"Code": "ZW"}, {"Code": "VC"}, {"Code": "SZ"}, {"Code": "MK"}, {"Code": "CG"}, {"Code": "CF"}, {"Code": "AS"}, {"Code": "CU"}, {"Code": "MS"}, {"Code": "ER"}, {"Code": "GP"}]
let countriesCode = [{"Code": "NP"}, {"Code": "AL"}, {"Code": "US"}, {"Code": "CH"}];
let temps = 5;
let isOver=false;
let idFlag="FR";
const timerElement = document.getElementById("timer");
setInterval(diminuerTemps, 1000);


function diminuerTemps() {
    if (temps>=0) {
        timerElement.innerText = "Temps restant : " + temps + "s";
        temps--;
    }
    else {
        gameOver();
    }
}


function getRandomFlag() {
    let number = Math.floor(Math.random() * countriesCode.length);
    document.getElementById("flag").src = "https://countryflagsapi.com/png/" + countriesCode[number].Code;
    countriesCode.splice(number, 1);
}
/*
function changeMode(choix)
{
    if(choix == 1)
    {
        mode = choix;
        document.getElementById("mode").innerHTML = 'Mode Facile';
    }
    if(choix == 2)
    {
        mode = choix;
        document.getElementById("mode").innerHTML = 'Mode Difficile'; 
    }
}
*/
function changeColor(code, color) {
    var styles = '.mapsl #'+code+' {' +
        'fill: '+color+';' +
        '}';
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}

function gameOver() {
    if (!isOver) {
        var answerCode = document.getElementById("flag").src.slice(-2);
        isOver=true;
        changeColor(answerCode,"green");
        alert("GAME OVER");
        triesNumber=-1;
    }
}

function test(code) {
    var answerCode = document.getElementById("flag").src.slice(-2);
    if (isOver) {
        return;
    }
    changeColor();
    // document.getElementsByClassName(code).setAttribute("id","check");
    if(answerCode == code) {
        score ++;
        try {
            getRandomFlag();
        } catch {
            console.log("Période d'essai terminé");
        }
        changeColor(answerCode,"green");
    }
    else{
        triesNumber --;
        changeColor(answerCode,"red");
        if(triesNumber < 0){
            gameOver();
        }
        if (triesNumber>=0) {
            getRandomFlag();
            document.getElementById("tries").innerHTML = 'Tentatives restantes : ' + triesNumber;
        }
    }
    document.getElementById("score").innerHTML = 'Score : ' + score;
    console.log("essais restant:" + triesNumber);
    console.log("score :" + score);
    //console.log(code)
}

