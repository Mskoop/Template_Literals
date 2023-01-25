
/* ========== Temlates Literals ===========
 ============ Übung 1.1. ================= */

/* Variablen */

const vorName = "Maciek ";
const nachName = "Skoopman";
const alter = 52;
const land = "Polen";
const gewicht = 82;
const hobby = "Sport und Kochen ";
const essen = "mediterran ";
const sport = "Laufen";
const marke = "Zegna ";
const invest = "Börse und Oldtimer";
const besteZeit = "Herbst ";
const besterOrt = "Japan ";

/* Aufbau mit String Contatination */

let ichBin = ("Ich heisse " + vorName + nachName + "," + " bin " + alter + " Jahre alt " + "und " + "komme aus " + land + "."  + " Meine Hobbies sind " + hobby+ "," + " ich gehe gern " + sport + " und " + "esse gern "+ essen+ "." + "Ich interessiere mich für " + invest + "." + " Meine Lieblingszeit ist " + besteZeit + "und ich möchte den nächsten Urlaub in " + besterOrt + "verbringen"+ "." )


/* console.log(ichBin)

 Ich heisse Maciek Skoopman, bin 52 Jahre alt und komme aus Polen. Meine Hobbies sind Sport und Kochen , ich gehe gern Laufen und esse gern mediterran .Ich interessiere mich für Börse und Oldtimer. Meine Lieblingszeit ist Herbst und ich möchte den nächsten Urlaub in Japan verbingen. */


/* =========AUSGABE IN HTML ============ */

/*  Neue Variable aufsetzen/bilden und eine Referenz zu Html-Dokument herstellen >> über gEbI oder 
 Neue Variable wird für die Verbindung zum Dokument benötigt,  */

let ichWillRaus = document.getElementById("mitStringImHtml")

/* Für die neue Variable definieren, was sie im Html ausgeben soll - hier: den zuvor mit Strings konfigurierten Satz sichbar machen */

ichWillRaus.innerHTML = ichBin 



/* ==================== */
/* ==================== */


/*  Aufbau mit Template Literals */


let ichBin2 = `Ich heiße ${vorName} ${nachName}, bin ${alter} und komme aus ${land}. 
Meine Hobbies sind ${hobby}, ich gehe gern ${sport} und esse gern ${essen}. 
Ich interessiere mich für ${invest}.
Meine Lieblingsjahreszeit ist ${besteZeit} und ich möchte den nächsten Urlaub in ${besterOrt} verbringen.`


/* console.log(ichBin2)

Ich heiße Maciek  Skoopman, bin 52 und komme aus Polen. 
Meine Hobbies sind Sport und Kochen , ich gehe gern Laufen und esse gern mediterran . 
Ich interessiere mich für Börse und Oldtimer.
Meine Lieblingsjahreszeit ist Herbst  und ich möchte den nächsten Urlaub in Japan  verbringen. */


/* =========AUSGABE IN HTML ============ */

/*  Neue Variable aufsetzen/bilden und eine Referenz zu Html-Dokument herstellen >> über gEbI oder qS*/

let ichWillRaus2 = document.querySelector("p")

/* die Variable findet Output im Html über Zuordnung mit innerHTML und gleichzeitige Bestimmung, dass ausgegeben werden soll  - hier: die zuvor mit Templates konfigurierte Variable*/

ichWillRaus2.innerHTML = ichBin2



