// Mode simple/difficile
// Streak de bonnes reponses
// Timer pour choix
//
//var pays = require('./pays.json');
 let pays = {
	"AD" : "Andorre",
	"AE" : "Émirats Arabes Unis",
	"AF" : "Afghanistan",
	"AG" : "Antigua-Et-Barbuda",
	"AI" : "Anguilla",
	"AL" : "Albanie",
	"AM" : "Arménie",
	"AO" : "Angola",
	"AQ" : "Antarctique",
	"AR" : "Argentine",
	"AT" : "Autriche",
	"AU" : "Australie",
	"AW" : "Aruba",
	"AZ" : "Azerbaïdjan",
	"BA" : "Bosnie-Herzégovine",
	"BB" : "Barbade",
	"BD" : "Bangladesh",
	"BE" : "Belgique",
	"BF" : "Burkina Faso",
	"BG" : "Bulgarie",
	"BH" : "Bahreïn",
	"BI" : "Burundi",
	"BJ" : "Bénin",
	"BL" : "Saint-Barthélemy",
	"BN" : "Bruneï",
	"BO" : "Bolivie",
	"BR" : "Brésil",
	"BS" : "Bahamas",
	"BT" : "Bhoutan",
	"BW" : "Botswana",
	"BY" : "Biélorussie",
	"BZ" : "Belize",
	"CA" : "Canada",
	"CD" : "République Démocratique Du Congo",
	"CF" : "République Centrafricaine",
	"CG" : "Congo",
	"CH" : "Suisse",
	"CI" : "Côte D'Ivoire",
	"CL" : "Chili",
	"CM" : "Cameroun",
	"CN" : "Chine",
	"CO" : "Colombie",
	"CR" : "Costa Rica",
	"CU" : "Cuba",
	"CV" : "Cap-Vert",
	"CY" : "Chypre",
	"CZ" : "République Tchèque",
	"DE" : "Allemagne",
	"DJ" : "Djibouti",
	"DK" : "Danemark",
	"DM" : "Dominique",
	"DO" : "République Dominicaine",
	"DZ" : "Algérie",
	"EC" : "Équateur",
	"EE" : "Estonie",
	"EG" : "Égypte",
	"EH" : "Sahara Occidental",
	"ER" : "Érythrée",
	"ES" : "Espagne",
	"ET" : "Éthiopie",
	"FI" : "Finlande",
	"FJ" : "Fidji",
	"FM" : "Micronésie",
	"FR" : "France",
	"GA" : "Gabon",
	"GB" : "Royaume-Uni",
	"GD" : "Grenade",
	"GE" : "Géorgie",
	"GF" : "Guyane",
	"GH" : "Ghana",
	"GI" : "Gibraltar",
	"GL" : "Groenland",
	"GM" : "Gambie",
	"GN" : "Guinée",
	"GP" : "Guadeloupe",
	"GQ" : "Guinée Équatoriale",
	"GR" : "Grèce",
	"GT" : "Guatemala",
	"GW" : "Guinée-Bissau",
	"GY" : "Guyana",
	"HN" : "Honduras",
	"HR" : "Croatie",
	"HT" : "Haïti",
	"HU" : "Hongrie",
	"ID" : "Indonésie",
	"IE" : "Irlande",
	"IL" : "Israël",
	"IM" : "Île De Ma Grosse Bite",
	"IN" : "Inde",
	"IQ" : "Irak",
	"IR" : "Iran",
	"IS" : "Islande",
	"IT" : "Italie",
	"JM" : "Jamaïque",
	"JO" : "Jordanie",
	"JP" : "Japon",
	"KE" : "Kenya",
	"KG" : "Kirghizistan",
	"KH" : "Cambodge",
	"KI" : "Kiribati",
	"KM" : "Comores",
	"KN" : "Saint-Christophe-et-Niévès",
	"KP" : "Corée du Nord",
	"KR" : "Corée du Sud",
	"KW" : "Koweït",
	"KZ" : "Kazakhstan",
	"LA" : "Laos",
	"LB" : "Liban",
	"LC" : "Sainte-Lucie",
	"LI" : "Liechtenstein",
	"LK" : "Sri Lanka",
	"LR" : "Liberia",
	"LS" : "Lesotho",
	"LT" : "Lituanie",
	"LU" : "Luxembourg",
	"LV" : "Lettonie",
	"LY" : "Libye",
	"MA" : "Maroc",
	"MC" : "Monaco",
	"MD" : "Moldavie",
	"ME" : "Monténégro",
	"MG" : "Madagascar",
	"MH" : "Îles Marshall",
	"MK" : "Macédoine",
	"ML" : "Mali",
	"MM" : "Birmanie",
	"MN" : "Mongolie",
	"MR" : "Mauritanie",
	"MT" : "Malte",
	"MU" : "Maurice",
	"MV" : "Maldives",
	"MW" : "Malawi",
	"MX" : "Mexique",
	"MY" : "Malaisie",
	"MZ" : "Mozambique",
	"NA" : "Namibie",
	"NE" : "Niger",
	"NG" : "Nigéria",
	"NI" : "Nicaragua",
	"NL" : "Pays-Bas",
	"NO" : "Norvège",
	"NP" : "Népal",
	"NR" : "Nauru",
	"NZ" : "Nouvelle-Zélande",
	"OM" : "Oman",
	"PA" : "Panama",
	"PE" : "Pérou",
	"PG" : "Papouasie-Nouvelle-Guinée",
	"PH" : "Philippines",
	"PK" : "Pakistan",
	"PL" : "Pologne",
	"PR" : "Porto Rico",
	"PS" : "Palestine",
	"PT" : "Portugal",
	"PW" : "Palaos",
	"PY" : "Paraguay",
	"QA" : "Qatar",
	"RO" : "Roumanie",
	"RS" : "Serbie",
	"RU" : "Russie",
	"RW" : "Rwanda",
	"SA" : "Arabie Saoudite",
	"SB" : "Îles Salomon",
	"SC" : "Seychelles",
	"SD" : "Soudan",
	"SE" : "Suède",
	"SG" : "Singapour",
	"SI" : "Slovénie",
	"SK" : "Slovaquie",
	"SL" : "Sierra Leone",
	"SM" : "Saint-Marin",
	"SN" : "Sénégal",
	"SO" : "Somalie",
	"SR" : "Suriname",
	"SS" : "Soudan Du Sud",
	"ST" : "Sao Tomé-Et-Principe",
	"SV" : "République Du Salvador",
	"SY" : "Syrie",
	"SZ" : "Swaziland",
	"TD" : "Tchad",
	"TG" : "Togo",
	"TH" : "Thaïlande",
	"TJ" : "Tadjikistan",
	"TL" : "Timor-Oriental",
	"TM" : "Turkménistan",
	"TN" : "Tunisie",
	"TO" : "Tonga",
	"TR" : "Turquie",
	"TT" : "Trinité-Et-Tobago",
	"TV" : "Tuvalu",
	"TW" : "Taïwan",
	"TZ" : "Tanzanie",
	"UA" : "Ukraine",
	"UG" : "Ouganda",
	"US" : "États-Unis",
	"UY" : "Uruguay",
	"UZ" : "Ouzbékistan",
	"VA" : "Vatican",
	"VC" : "Saint-Vincent-Et-Les Grenadines",
	"VE" : "Venezuela",
	"VN" : "Viet Nam",
	"VU" : "Vanuatu",
	"WS" : "Samoa",
	"YE" : "Yémen",
	"ZA" : "Afrique Du Sud",
	"ZM" : "Zambie",
	"ZW" : "Zimbabwe",
	"LB" : "Liban",
    "FR" : "France",
    "CN" : "Chine"
}
for([key, val] of Object.entries(pays)) {
    pays[key]=strNoAccent(val).toUpperCase();
    console.log(key,pays[key])
  }
let keys = Object.keys(pays);
let values = Object.values(pays);
let number;
let triesNumber = 2;
let a = triesNumber;
let score = 0;
let mode = 1;
let countriesCode = [{"Code": "AW"}, {"Code": "PY"}, {"Code": "AL"}, {"Code": "MN"}, {"Code": "CW"}, {"Code": "BB"}, {"Code": "XK"}, {"Code": "AE"}, {"Code": "DM"}, {"Code": "DK"}, {"Code": "NL"}, {"Code": "EG"}, {"Code": "UG"}, {"Code": "SX"}, {"Code": "GM"}, {"Code": "NP"}, {"Code": "PH"}, {"Code": "NZ"}, {"Code": "IS"}, {"Code": "FR"}, {"Code": "PF"}, {"Code": "ID"}, {"Code": "NO"}, {"Code": "VU"}, {"Code": "TM"}, {"Code": "GW"}, {"Code": "BH"}, {"Code": "KN"}, {"Code": "MA"}, {"Code": "CZ"}, {"Code": "BI"}, {"Code": "FI"}, {"Code": "GB"}, {"Code": "PL"}, {"Code": "UA"}, {"Code": "LC"}, {"Code": "VG"}, {"Code": "LK"}, {"Code": "TG"}, {"Code": "ME"}, {"Code": "BL"}, {"Code": "NE"}, {"Code": "GT"}, {"Code": "NR"}, {"Code": "GE"}, {"Code": "LU"}, {"Code": "PR"}, {"Code": "BT"}, {"Code": "PE"}, {"Code": "AO"}, {"Code": "ZM"}, {"Code": "MP"}, {"Code": "UZ"}, {"Code": "KP"}, {"Code": "UY"}, {"Code": "QA"}, {"Code": "CY"}, {"Code": "MU"}, {"Code": "CV"}, {"Code": "KH"}, {"Code": "VN"}, {"Code": "NI"}, {"Code": "PA"}, {"Code": "ML"},{"Code": "AG"}, {"Code": "CR"}, {"Code": "PG"}, {"Code": "NC"}, {"Code": "GR"}, {"Code": "FJ"}, 
{"Code": "WS"}, {"Code": "BF"}, {"Code": "TR"}, {"Code": "AZ"}, {"Code": "PS"}, {"Code": "BA"}, {"Code": "KM"}, {"Code": "MH"}, {"Code": "CO"}, {"Code": "KG"}, {"Code": "CM"}, {"Code": "GN"}, {"Code": "JO"}, {"Code": "DZ"}, {"Code": "YE"}, {"Code": "CL"}, {"Code": "MW"}, {"Code": "BD"}, {"Code": "SY"}, {"Code": "TZ"}, {"Code": "GQ"}, {"Code": "OM"}, {"Code": "SK"}, {"Code": "SD"}, {"Code": "MX"}, {"Code": "BR"}, {"Code": "TV"}, {"Code": "SV"}, {"Code": "JM"}, {"Code": "MT"}, {"Code": "PW"}, {"Code": "ET"}, {"Code": "LS"}, {"Code": "KZ"}, {"Code": "RS"}, {"Code": "TH"}, {"Code": "BY"}, {"Code": "CA"}, {"Code": "JP"}, {"Code": "MY"}, {"Code": "NA"}, {"Code": "SI"}, {"Code": "SO"}, {"Code": "BS"}, {"Code": "AR"}, {"Code": "KE"}, {"Code": "MD"}, {"Code": "HU"}, {"Code": "SN"}, {"Code": "TC"}, {"Code": "GY"}, {"Code": "LR"}, {"Code": "BE"}, {"Code": "LB"}, {"Code": "GD"}, {"Code": "MQ"}, {"Code": "SR"}, {"Code": "IR"}, {"Code": "KY"}, {"Code": "SS"}, {"Code": "IL"}, {"Code": "SE"}, {"Code": "BZ"}, {"Code": "AF"}, {"Code": "SL"}, {"Code": "BW"}, {"Code": "VE"}, {"Code": "RE"}, {"Code": "RU"}, {"Code": "ES"}, {"Code": "GH"}, {"Code": "SA"}, {"Code": "SC"}, {"Code": "EC"}, {"Code": "TO"}, {"Code": "BM"}, {"Code": "TW"}, {"Code": "IT"}, {"Code": "MZ"}, {"Code": "DJ"}, {"Code": "EE"}, {"Code": "BG"}, {"Code": "MF"}, {"Code": "SB"}, {"Code": "CI"}, {"Code": "TN"}, {"Code": "MV"}, {"Code": "LY"}, {"Code": "AU"}, {"Code": "NG"}, {"Code": "RO"}, {"Code": "IQ"}, {"Code": "DE"}, {"Code": "KR"}, {"Code": "MM"}, {"Code": "LA"}, {"Code": "AM"}, {"Code": "CH"}, {"Code": "US"}, {"Code": "CN"}, {"Code": "AI"}, {"Code": "DO"}, {"Code": "BO"}, {"Code": "PT"}, {"Code": "YT"}, {"Code": "MR"}, {"Code": "MG"}, {"Code": "GU"}, {"Code": "HR"}, {"Code": "PK"}, {"Code": "AT"}, {"Code": "GF"}, {"Code": "GA"}, {"Code": "IE"}, {"Code": "BJ"}, {"Code": "ZA"}, {"Code": "TJ"}, {"Code": "IN"}, {"Code": "EH"}, {"Code": "LV"}, {"Code": "HT"}, {"Code": "TD"}, {"Code": "LT"}, {"Code": "TL"}, {"Code": "GL"}, {"Code": "RW"}, {"Code": "CD"}, {"Code": "HN"}, {"Code": "KW"}, {"Code": "BN"}, {"Code": "TT"}, {"Code": "ZW"}, {"Code": "VC"}, {"Code": "SZ"}, {"Code": "MK"}, {"Code": "CG"}, {"Code": "CF"}, {"Code": "AS"}, {"Code": "CU"}, {"Code": "MS"}, {"Code": "ER"}, {"Code": "GP"}]
//let countriesCode = [{"Code": "NP"}, {"Code": "AL"}, {"Code": "US"}, {"Code": "CH"}];
let temps = 500;
let isOver=false;
let idFlag="FR";
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 100;
function strNoAccent(a) {
    var b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ",
        c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
        d="";
    for(var i = 0, j = a.length; i < j; i++) {
      var e = a.substr(i, 1);
      d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
    }
    return d;
}
  
setInterval(diminuerTemps, 1000);
countdownNumberEl.textContent = countdown;

function diminuerTemps() {
    if (countdown>0) {
        countdown--;
        countdownNumberEl.textContent = countdown;
        if(countdown == 0)
        {
            gameOver();
        }
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

function getKeyValue(ele) {
    if (ele === 'Start')
    {
        number = Math.floor(Math.random() * keys.length);
        document.getElementById("nomPays").innerHTML = pays[keys[number]].charAt(0)
    }
    if(event.key === 'Enter') {
        let input = document.getElementById("reponse");
        let answer = strNoAccent(input.value).toUpperCase();
        console.log(answer);
        //values.includes(input) && 
        if (values.includes(answer) && answer.charAt(0)===pays[keys[number]].charAt(0)) {
            console.log(values)
            console.log(values.indexOf(answer));
            changeColor2(keys[values.indexOf(answer)], "green");
            keys.splice(values.indexOf(answer), 1);
            values.splice(values.indexOf(answer),1);
            number = Math.floor(Math.random() * keys.length);
            document.getElementById("nomPays").innerHTML = pays[keys[number]].charAt(0)
        }
        // if(input.value === pays[keys[number]])
        // {
        //     changeColor2(keys[number], "green")
        //     keys.splice(number, 1);
        //     number = Math.floor(Math.random() * keys.length);
        //     document.getElementById("nomPays").innerHTML = pays[keys[number]].charAt(0)
        // }
       input.value = ""
    }
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

function changeColor2(code, color) {
    var styles = '.mapsl2 #'+code+' {' +
        'fill: '+color+';'
        + 'opacity: 1;' + '}'
        ;

    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}

async function gameOver() {
    if (!isOver) {
        document.getElementById('mySvg').setAttribute("opacity", '0');
        countdownNumberEl.textContent = "";
        await sleep(100);
        var answerCode = document.getElementById("flag").src.slice(-2);
        isOver=true;
        changeColor(answerCode,"green");
        alert("GAME OVER");
        triesNumber=-1;
    }
}

function test(code) {
    console.log(code);
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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

