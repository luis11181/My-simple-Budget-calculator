/**
 * Das Modul "Gesamtbilanz" stellt die Klasse "Gesamtbilanz" zur Verfügung.
 * @module classes/Gesamtbilanz
 */

/**
 * Die Klasse "Gesamtbilanz" stellt alle Eigenschaften
 * und Methoden der Gesamtbilanz (inkl. HTML) zur Verfügung.
 */
export default class Gesamtbilanz {

    /**
     * Der Konstruktor setzt bei Instaziierung der Klasse "Gesamtbilanz" alle 
     * u.g. Eigenschaften der Gesamtbilanz und generiert deren HTML.
     * @prop {Number} _einnahmen - die Summe aller Einnahmen (in Cent, ganzzahlig)
     * @prop {Number} _ausgaben - die Summe aller Ausgaben (in Cent, ganzzahlig)
     * @prop {Number} _bilanz - die Differnz aus Einnahmen und Ausgaben (in Cent, ganzzahlig)
     * @prop {Element} _html - das HTML der Gesamtbilanz
     */
    constructor() {
        this._einnahmen = 0;
        this._ausgaben = 0;
        this._bilanz = 0;
        this._html = this._html_generieren();
    }

    /**
     * Diese Methode aktualisiert die Gesamtbilanz des Haushaltsbuch beim Hinzufügen oder Entfernen
     * eines Eintrags anhand der Einträge des Haushaltsbuchs, generiert das HTML der Gesamtbilanz neu
     * und zeigt die neu generierte Gesamtbilanz an.
     * @param {Arrays} eintraege - Arrays mit allen Einträgen des Haushaltsbuchs
     */
    aktualisieren(eintraege) {
        this._einnahmen = 0;
        this._ausgaben = 0;
        this._bilanz = 0;
        eintraege.forEach(eintrag => {
            switch (eintrag.typ()) {
                case "einnahme":
                    this._einnahmen = this._einnahmen + eintrag.betrag();
                    this._bilanz = this._bilanz + eintrag.betrag();
                    break;
                case "ausgabe":
                    this._ausgaben = this._ausgaben + eintrag.betrag();
                    this._bilanz = this._bilanz - eintrag.betrag();
                    break;
                default:
                    console.log(`Der Typ "${eintrag.typ()}" ist nicht bekannt.`);
                    break;
            }
        });
        this._html = this._html_generieren();
        this.anzeigen();
    }

    /**
     * Diese private Methode generiert das HTML der Gesamtbilanz.
     * @return {Element} - das Gesamtbilanz-Element mit all seinen Kindelementen
     */
    _html_generieren() {
        let gesamtbilanz = document.createElement("aside");
        gesamtbilanz.setAttribute("id", "gesamtbilanz");

        let ueberschrift = document.createElement("h1");
        ueberschrift.textContent = "Gesamtbilanz";
        gesamtbilanz.insertAdjacentElement("afterbegin", ueberschrift);

        let einnahmen_zeile = document.createElement("div");
        einnahmen_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen");
        let einnahmen_titel = document.createElement("span");
        einnahmen_titel.textContent = "Einnahmen:";
        einnahmen_zeile.insertAdjacentElement("afterbegin", einnahmen_titel);
        let einnahmen_betrag = document.createElement("span");
        einnahmen_betrag.textContent = `${(this._einnahmen / 100).toFixed(2).replace(/\./, ",")} €`;
        einnahmen_zeile.insertAdjacentElement("beforeend", einnahmen_betrag);
        gesamtbilanz.insertAdjacentElement("beforeend", einnahmen_zeile);

        let ausgaben_zeile = document.createElement("div");
        ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben");
        let ausgaben_titel = document.createElement("span");
        ausgaben_titel.textContent = "Ausgaben:";
        ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel);
        let ausgaben_betrag = document.createElement("span");
        ausgaben_betrag.textContent = `${(this._ausgaben / 100).toFixed(2).replace(/\./, ",")} €`;
        ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag);
        gesamtbilanz.insertAdjacentElement("beforeend", ausgaben_zeile);

        let bilanz_zeile = document.createElement("div");
        bilanz_zeile.setAttribute("class", "gesamtbilanz-zeile bilanz");
        let bilanz_titel = document.createElement("span");
        bilanz_titel.textContent = "Bilanz:";
        bilanz_zeile.insertAdjacentElement("afterbegin", bilanz_titel);
        let bilanz_betrag = document.createElement("span");
        this._bilanz >= 0 ? bilanz_betrag.setAttribute("class", "positiv") : bilanz_betrag.setAttribute("class", "negativ");
        bilanz_betrag.textContent = `${(this._bilanz / 100).toFixed(2).replace(/\./, ",")} €`;
        bilanz_zeile.insertAdjacentElement("beforeend", bilanz_betrag);
        gesamtbilanz.insertAdjacentElement("beforeend", bilanz_zeile);

        return gesamtbilanz;
    }

    /**
     * Diese private Methode entfernt eine bereits bestehende Gesamtbilanz, wenn vorhanden.
     */
    _entfernen() {
        let gesamtbilanz = document.querySelector("#gesamtbilanz");
        if (gesamtbilanz !== null) {
            gesamtbilanz.remove();
        }
    }

    /**
     * Diese Methode zeigt die generierte Gesamtbilanz an der richtigen Stelle in der UI an.
     */
    anzeigen() {
        this._entfernen();
        document.querySelector("body").insertAdjacentElement("beforeend", this._html);
    }

}