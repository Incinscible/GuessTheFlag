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
	"AP" : "Région Asie/Pacifique",
	"AQ" : "Antarctique",
	"AR" : "Argentine",
	"AS" : "Samoa Américaines",
	"AT" : "Autriche",
	"AU" : "Australie",
	"AW" : "Aruba",
	"AX" : "Îles Åland",
	"AZ" : "Azerbaïdjan",
	"BA" : "Bosnie-Herzégovine",
	"BB" : "Barbad",
	"BD" : "Bangladesh",
	"BE" : "Belgique",
	"BF" : "Burkina Faso",
	"BG" : "Bulgarie",
	"BH" : "Bahreïn",
	"BI" : "Burundi",
	"BJ" : "Bénin",
	"BL" : "Saint-Barthélemy",
	"BM" : "Bermudes",
	"BN" : "Brunei Darussalam",
	"BO" : "État Plurinational De Bolivie",
	"BQ" : "Bonaire, Saint-Eustache Et Saba",
	"BR" : "Brésil",
	"BS" : "Bahamas",
	"BT" : "Bhoutan",
	"BV" : "Île Bouvet",
	"BW" : "Botswana",
	"BY" : "Biélorussie",
	"BZ" : "Belize",
	"CA" : "Canada",
	"CC" : "Îles Cocos",
	"CD" : "République Démocratique Du Congo",
	"CF" : "République Centrafricaine",
	"CG" : "Congo",
	"CH" : "Suisse",
	"CI" : "Côte D'Ivoire",
	"CK" : "Îles Cook",
	"CL" : "Chili",
	"CM" : "Cameroun",
	"CN" : "Chine",
	"CO" : "Colombie",
	"CR" : "Costa Rica",
	"CU" : "Cuba",
	"CV" : "Cap-Vert",
	"CW" : "Curaçao",
	"CX" : "Île Christmas",
	"CY" : "Chypre",
	"CZ" : "République Tchèque",
	"DE" : "Allemagne",
	"DJ" : "Djibouti",
	"DK" : "Denmark",
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
	"EU" : "Europe",
	"FI" : "Finlande",
	"FJ" : "Fidji",
	"FK" : "Îles Malouines",
	"FM" : "États Fédérés De Micronésie",
	"FO" : "Îles Féroé",
	"FR" : "France",
	"GA" : "Gabon",
	"GB" : "Royaume-Uni",
	"GD" : "Grenade",
	"GE" : "Géorgie",
	"GF" : "Guyane",
	"GG" : "Guernesey",
	"GH" : "Ghana",
	"GI" : "Gibraltar",
	"GL" : "Groenland",
	"GM" : "Gambie",
	"GN" : "Guinée",
	"GP" : "Guadeloupe",
	"GQ" : "Guinée Équatoriale",
	"GR" : "Grèce",
	"GS" : "Géorgie Du Sud-Et-Les Îles Sandwich Du Sud",
	"GT" : "Guatemala",
	"GU" : "Guam",
	"GW" : "Guinée-Bissau",
	"GY" : "Guyana",
	"HK" : "Hong Kong",
	"HM" : "Îles Heard-Et-MacDonald",
	"HN" : "Honduras",
	"HR" : "Croatie",
	"HT" : "Haïti",
	"HU" : "Hongrie",
	"ID" : "Indonésie",
	"IE" : "Irlande",
	"IL" : "Israël",
	"IM" : "Île De Man",
	"IN" : "Inde",
	"IO" : "Territoire Britannique De L'océan Indien",
	"IQ" : "Irak",
	"IR" : "République Islamique D'Iran",
	"IS" : "Islande",
	"IT" : "Italie",
	"JE" : "Jersey",
	"JM" : "Jamaïque",
	"JO" : "Jordanie",
	"JP" : "Japon",
	"KE" : "Kenya",
	"KG" : "Kirghizistan",
	"KH" : "Cambodge",
	"KI" : "Kiribati",
	"KM" : "Comores",
	"KN" : "Saint-Christophe-et-Niévès",
	"KP" : "République Populaire Démocratique De Corée",
	"KR" : "République De Corée",
	"KW" : "Koweït",
	"KY" : "Îles Caïmans",
	"KZ" : "Kazakhstan",
	"LA" : "République Démocratique Populaire Lao",
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
	"MD" : "République De Moldavie",
	"ME" : "Monténégro",
	"MF" : "Saint-Martin (Partie Française)",
	"MG" : "Madagascar",
	"MH" : "Îles Marshall",
	"MK" : "Macédoine",
	"ML" : "Mali",
	"MM" : "Birmanie",
	"MN" : "Mongolie",
	"MO" : "Macao",
	"MP" : "Îles Mariannes Du Nord",
	"MQ" : "Martinique",
	"MR" : "Mauritanie",
	"MS" : "Montserrat",
	"MT" : "Malte",
	"MU" : "Maurice",
	"MV" : "Maldives",
	"MW" : "Malawi",
	"MX" : "Mexique",
	"MY" : "Malaisie",
	"MZ" : "Mozambique",
	"NA" : "Namibie",
	"NC" : "Nouvelle-Calédonie",
	"NE" : "Niger",
	"NF" : "Île Norfolk",
	"NG" : "Nigéria",
	"NI" : "Nicaragua",
	"NL" : "Pays-Bas",
	"NO" : "Norvège",
	"NP" : "Népal",
	"NR" : "Nauru",
	"NU" : "Niue",
	"NZ" : "Nouvelle-Zélande",
	"OM" : "Oman",
	"PA" : "Panama",
	"PE" : "Pérou",
	"PF" : "Polynésie Française",
	"PG" : "Papouasie-Nouvelle-Guinée",
	"PH" : "Philippines",
	"PK" : "Pakistan",
	"PL" : "Pologne",
	"PM" : "Saint-Pierre-Et-Miquelon",
	"PN" : "Pitcairn",
	"PR" : "Porto Rico",
	"PS" : "Territoires Palestiniens Occupés",
	"PT" : "Portugal",
	"PW" : "Palaos",
	"PY" : "Paraguay",
	"QA" : "Qatar",
	"RE" : "Réunion",
	"RO" : "Roumanie",
	"RS" : "Serbie",
	"RU" : "Fédération De Russie",
	"RW" : "Rwanda",
	"SA" : "Arabie Saoudite",
	"SB" : "Îles Salomon",
	"SC" : "Seychelles",
	"SD" : "Soudan",
	"SE" : "Suède",
	"SG" : "Singapour",
	"SH" : "Sainte-Hélène",
	"SI" : "Slovénie",
	"SJ" : "Svalbard Et Jan Mayen",
	"SK" : "Slovaquie",
	"SL" : "Sierra Leone",
	"SM" : "Saint-Marin",
	"SN" : "Sénégal",
	"SO" : "Somalie",
	"SR" : "Suriname",
	"SS" : "Soudan Du Sud",
	"ST" : "Sao Tomé-Et-Principe",
	"SV" : "République Du Salvador",
	"SX" : "Saint-Martin (Partie Néerlandaise)",
	"SY" : "République Arabe Syrienne",
	"SZ" : "Swaziland",
	"TC" : "Îles Turks-Et-Caïcos",
	"TD" : "Tchad",
	"TF" : "Terres Australes Françaises",
	"TG" : "Togo",
	"TH" : "Thaïlande",
	"TJ" : "Tadjikistan",
	"TK" : "Tokelau",
	"TL" : "Timor-Leste",
	"TM" : "Turkménistan",
	"TN" : "Tunisie",
	"TO" : "Tonga",
	"TR" : "Turquie",
	"TT" : "Trinité-Et-Tobago",
	"TV" : "Tuvalu",
	"TW" : "Taïwan",
	"TZ" : "République-Unie De Tanzanie",
	"UA" : "Ukraine",
	"UG" : "Ouganda",
	"UM" : "Îles Mineures Éloignées Des États-Unis",
	"US" : "États-Unis",
	"UY" : "Uruguay",
	"UZ" : "Ouzbékistan",
	"VA" : "Saint-Siège (État De La Cité Du Vatican)",
	"VC" : "Saint-Vincent-Et-Les Grenadines",
	"VE" : "Venezuela",
	"VG" : "Îles Vierges Britanniques",
	"VI" : "Îles Vierges Des États-Unis",
	"VN" : "Viet Nam",
	"VU" : "Vanuatu",
	"WF" : "Wallis Et Futuna",
	"WS" : "Samoa",
	"YE" : "Yémen",
	"YT" : "Mayotte",
	"ZA" : "Afrique Du Sud",
	"ZM" : "Zambie",
	"ZW" : "Zimbabwe",
	"LB" : "Liban",
    "FR" : "France",
    "CN" : "Chine"
}
let keys = Object.keys(pays)
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
        let input = document.getElementById("reponse")
        if(input.value === pays[keys[number]])
        {
            changeColor2(keys[number], "green")
            keys.splice(number, 1);
            number = Math.floor(Math.random() * keys.length);
            document.getElementById("nomPays").innerHTML = pays[keys[number]].charAt(0)
        }
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

