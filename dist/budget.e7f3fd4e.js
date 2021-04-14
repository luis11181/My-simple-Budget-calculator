parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"t5up":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(){e(this,t),this._html=this._html_generieren()}return n(t,[{key:"_html_generieren",value:function(){var e=document.createElement("nav");e.setAttribute("id","navigationsleiste");var t=document.createElement("a");t.setAttribute("href","#");var n=document.createElement("span");return n.setAttribute("id","markenname"),n.textContent="Monatlichen Budget/ Montly Budget",t.insertAdjacentElement("afterbegin",n),e.insertAdjacentElement("afterbegin",t),e}},{key:"anzeigen",value:function(){var e=document.querySelector("body");null!==e&&e.insertAdjacentElement("afterbegin",this._html)}}]),t}();exports.default=r;
},{}],"lNVB":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n,r){e(this,t),this._fehlertext=n,this._formular_fehler=r,this._html=this._html_generieren()}return n(t,[{key:"_html_generieren",value:function(){var e=document.createElement("div");e.setAttribute("class","fehlerbox");var t=document.createElement("span");t.textContent=this._fehlertext,e.insertAdjacentElement("afterbegin",t);var n=document.createElement("ul");return this._formular_fehler.forEach(function(e){var t=document.createElement("li");t.textContent=e,n.insertAdjacentElement("beforeend",t)}),e.insertAdjacentElement("beforeend",n),e}},{key:"_entfernen",value:function(){var e=document.querySelector(".fehlerbox");null!==e&&e.remove()}},{key:"anzeigen",value:function(){this._entfernen();var e=document.querySelector("#eingabeformular-container");null!==e&&e.insertAdjacentElement("afterbegin",this._html)}}]),t}();exports.default=r;
},{}],"lnBy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Fehlerbox.js")),t=n(require("../budget.js"));function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var l=function(){function n(){a(this,n),this._html=this._html_generieren()}return i(n,[{key:"_formulardaten_holen",value:function(e){return{titel:e.target.elements.titel.value,betrag:e.target.elements.betrag.value,einnahme:e.target.elements.einnahme.checked,datum:e.target.elements.datum.valueAsDate}}},{key:"_formulardaten_verarbeiten",value:function(e){return{titel:e.titel.trim(),typ:!1===e.einnahme?"ausgabe":"einnahme",betrag:100*parseFloat(e.betrag),datum:e.datum}}},{key:"_formulardaten_validieren",value:function(e){var t=[];return""===e.titel&&t.push("Titel"),isNaN(e.betrag)&&t.push("Betrag"),null===e.datum&&t.push("Datum"),t}},{key:"_datum_aktualisieren",value:function(){var e=document.querySelector("#datum");null!==e&&(e.valueAsDate=new Date)}},{key:"_absenden_event_hinzufuegen",value:function(n){var a=this;n.querySelector("#eingabeformular").addEventListener("submit",function(n){n.preventDefault();var r=a._formulardaten_verarbeiten(a._formulardaten_holen(n)),i=a._formulardaten_validieren(r);if(0===i.length){t.default.eintrag_hinzufuegen(r);var l=document.querySelector(".fehlerbox");null!==l&&l.remove(),n.target.reset(),a._datum_aktualisieren()}else{new e.default("Folgende Felder wurden nicht korrekt ausgefüllt:/The following items weren't filled correctly",i).anzeigen()}})}},{key:"_html_generieren",value:function(){var e=document.createElement("section");return e.setAttribute("id","eingabeformular-container"),e.innerHTML='<form id="eingabeformular" action="#" method="get"></form>\n        <div class="eingabeformular-zeile">\n            <h1> Einnahme/earning || Ausgabe/expense </h1>\n        </div>\n        <div class="eingabeformular-zeile">\n            <div class="titel-typ-eingabe-gruppe">\n                <label for="titel">Titel</label>\n                <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="pan" size="10" title="Item name">\n                <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" >\n                <label for="einnahme" >Einnahme</label>\n                <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular"  checked>\n                <label for="ausgabe" >Ausgabe"</label>\n            </div>\n        </div>\n        <div class="eingabeformular-zeile">\n            <div class="betrag-datum-eingabe-gruppe">\n                <label for="betrag">Betrag</label>\n                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="xx,xx" size="10" step="0.01" min="0.01" title="Betrag des Eintrags (Just the number)">\n                <label for="datum">Datum/Date</label>\n                <input type="date" id="datum" name="datum" form="eingabeformular" size="10">\n            </div>\n        </div>\n        <div class="eingabeformular-zeile">\n            <button class="standard" type="submit" form="eingabeformular">Hinzufügen/Add</button>\n        </div>',this._absenden_event_hinzufuegen(e),e}},{key:"anzeigen",value:function(){var e=document.querySelector("#navigationsleiste");null!==e&&(e.insertAdjacentElement("afterend",this._html),this._datum_aktualisieren())}}]),n}();exports.default=l;
},{"./Fehlerbox.js":"lNVB","../budget.js":"x102"}],"dicM":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function t(n,a){e(this,t),this._jahr=n,this._monat=a,this._eintraege=[],this._bilanz=0,this._html=this._html_generieren()}return n(t,[{key:"monat",value:function(){return this._monat}},{key:"jahr",value:function(){return this._jahr}},{key:"html",value:function(){return this._html}},{key:"eintrag_hinzufuegen",value:function(e){this._eintraege.push(e),this._aktualisieren()}},{key:"_eintraege_sortieren",value:function(){this._eintraege.sort(function(e,t){return e.datum()>t.datum()?-1:e.datum()<t.datum()?1:e.timestamp()>t.timestamp()?-1:1})}},{key:"_bilanzieren",value:function(){var e=0;this._eintraege.forEach(function(t){"einnahme"===t.typ()?e+=t.betrag():e-=t.betrag()}),this._bilanz=e}},{key:"_html_generieren",value:function(){var e=document.createElement("article");e.setAttribute("class","monatsliste");var t=document.createElement("h2"),n=document.createElement("span");n.setAttribute("class","monat-jahr"),n.textContent="".concat(new Date(this._jahr,this._monat-1).toLocaleString("de-DE",{month:"long",year:"numeric"})),t.insertAdjacentElement("afterbegin",n);var a=document.createElement("span");this._bilanz>=0?a.setAttribute("class","monatsbilanz positiv"):a.setAttribute("class","monatsbilanz negativ"),a.textContent="".concat((this._bilanz/100).toFixed(2).replace(/\./,",")," $"),t.insertAdjacentElement("beforeend",a),e.insertAdjacentElement("afterbegin",t);var i=document.createElement("ul");return this._eintraege.forEach(function(e){i.insertAdjacentElement("beforeend",e.html())}),e.insertAdjacentElement("beforeend",i),e}},{key:"_aktualisieren",value:function(){this._eintraege_sortieren(),this._bilanzieren(),this._html=this._html_generieren()}}]),t}();exports.default=a;
},{}],"lBOk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Monatsliste.js"));function n(e){return e&&e.__esModule?e:{default:e}}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}var a=function(){function n(){t(this,n),this._monatslisten=[],this._html=this._html_generieren()}return r(n,[{key:"_eintrag_hinzufuegen",value:function(e){var n=e.datum().toLocaleString("de-DE",{month:"numeric"}),t=e.datum().toLocaleString("de-DE",{year:"numeric"}),i=!1;this._monatslisten.forEach(function(r){n===r.monat()&&t===r.jahr()&&(r.eintrag_hinzufuegen(e),i=!0)}),i||this._monatsliste_hinzufuegen(t,n,e)}},{key:"_monatsliste_hinzufuegen",value:function(n,t,i){var r=new e.default(n,t);r.eintrag_hinzufuegen(i),this._monatslisten.push(r)}},{key:"_monatslisten_sortieren",value:function(){this._monatslisten.sort(function(e,n){return e.jahr()<n.jahr()?1:e.jahr()>n.jahr()?-1:e.monat()<n.monat()?1:-1})}},{key:"_html_generieren",value:function(){var e=document.createElement("section");return e.setAttribute("id","monatslisten"),this._monatslisten.forEach(function(n){e.insertAdjacentElement("beforeend",n.html())}),e}},{key:"aktualisieren",value:function(e){var n=this;this._monatslisten=[],e.forEach(function(e){return n._eintrag_hinzufuegen(e)}),this._monatslisten_sortieren(),this._html=this._html_generieren(),this.anzeigen()}},{key:"_entfernen",value:function(){var e=document.querySelector("#monatslisten");null!==e&&e.remove()}},{key:"anzeigen",value:function(){var e=document.querySelector("#eingabeformular-container");null!==e&&(this._entfernen(),e.insertAdjacentElement("afterend",this._html))}}]),n}();exports.default=a;
},{"./Monatsliste.js":"dicM"}],"TlhK":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function t(){e(this,t),this._einnahmen=0,this._ausgaben=0,this._bilanz=0,this._html=this._html_generieren()}return n(t,[{key:"aktualisieren",value:function(e){var t=this;this._einnahmen=0,this._ausgaben=0,this._bilanz=0,e.forEach(function(e){switch(e.typ()){case"einnahme":t._einnahmen=t._einnahmen+e.betrag(),t._bilanz=t._bilanz+e.betrag();break;case"ausgabe":t._ausgaben=t._ausgaben+e.betrag(),t._bilanz=t._bilanz-e.betrag();break;default:console.log('Der Typ "'.concat(e.typ(),'" ist nicht bekannt.'))}}),this._html=this._html_generieren(),this.anzeigen()}},{key:"_html_generieren",value:function(){var e=document.createElement("aside");e.setAttribute("id","gesamtbilanz");var t=document.createElement("h1");t.textContent="Gesamtbilanz/Balance",e.insertAdjacentElement("afterbegin",t);var n=document.createElement("div");n.setAttribute("class","gesamtbilanz-zeile einnahmen");var a=document.createElement("span");a.textContent="Einnahmen/Earnings:",n.insertAdjacentElement("afterbegin",a);var i=document.createElement("span");i.textContent="".concat((this._einnahmen/100).toFixed(2).replace(/\./,",")," $"),n.insertAdjacentElement("beforeend",i),e.insertAdjacentElement("beforeend",n);var r=document.createElement("div");r.setAttribute("class","gesamtbilanz-zeile ausgaben");var s=document.createElement("span");s.textContent="Ausgaben/Expenses:",r.insertAdjacentElement("afterbegin",s);var l=document.createElement("span");l.textContent="".concat((this._ausgaben/100).toFixed(2).replace(/\./,",")," $"),r.insertAdjacentElement("beforeend",l),e.insertAdjacentElement("beforeend",r);var c=document.createElement("div");c.setAttribute("class","gesamtbilanz-zeile bilanz");var o=document.createElement("span");o.textContent="Bilanz/Balance:",c.insertAdjacentElement("afterbegin",o);var u=document.createElement("span");return this._bilanz>=0?u.setAttribute("class","positiv"):u.setAttribute("class","negativ"),u.textContent="".concat((this._bilanz/100).toFixed(2).replace(/\./,",")," $"),c.insertAdjacentElement("beforeend",u),e.insertAdjacentElement("beforeend",c),e}},{key:"_entfernen",value:function(){var e=document.querySelector("#gesamtbilanz");null!==e&&e.remove()}},{key:"anzeigen",value:function(){this._entfernen(),document.querySelector("body").insertAdjacentElement("beforeend",this._html)}}]),t}();exports.default=a;
},{}],"rLSp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../budget.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var i=function(){function e(t,r,a,i){n(this,e),this._titel=t,this._betrag=r,this._typ=a,this._datum=i,this._timestamp=Date.now(),this._html=this._html_generieren()}return a(e,[{key:"titel",value:function(){return this._titel}},{key:"betrag",value:function(){return this._betrag}},{key:"typ",value:function(){return this._typ}},{key:"datum",value:function(){return this._datum}},{key:"timestamp",value:function(){return this._timestamp}},{key:"html",value:function(){return this._html}},{key:"_eintrag_entfernen_event_hinzufuegen",value:function(e){e.querySelector(".entfernen-button").addEventListener("click",function(e){var n=e.target.parentElement.getAttribute("data-timestamp");t.default.eintrag_entfernen(n)})}},{key:"_html_generieren",value:function(){var t=document.createElement("li");"einnahme"===this._typ?t.setAttribute("class","einnahme"):t.setAttribute("class","ausgabe"),t.setAttribute("data-timestamp",this._timestamp);var e=document.createElement("span");e.setAttribute("class","datum"),e.textContent=this._datum.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"}),t.insertAdjacentElement("afterbegin",e);var n=document.createElement("span");n.setAttribute("class","titel"),n.textContent=this._titel,e.insertAdjacentElement("afterend",n);var r=document.createElement("span");r.setAttribute("class","betrag"),r.textContent="".concat((this._betrag/100).toFixed(2).replace(/\./,",")," $"),n.insertAdjacentElement("afterend",r);var a=document.createElement("button");a.setAttribute("class","entfernen-button"),r.insertAdjacentElement("afterend",a);var i=document.createElement("i");return i.setAttribute("class","fas fa-trash"),a.insertAdjacentElement("afterbegin",i),this._eintrag_entfernen_event_hinzufuegen(t),t}}]),e}();exports.default=i;
},{"../budget.js":"x102"}],"zQro":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./Navigationsleiste.js")),t=r(require("./Eingabeformular.js")),i=r(require("./Monatslistensammlung.js")),n=r(require("./Gesamtbilanz.js")),a=r(require("./Eintrag.js"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,i){return t&&l(e.prototype,t),i&&l(e,i),e}var g=function(){function r(){s(this,r),this._eintraege=[],this._navigationsleiste=new e.default,this._eingabeformular=new t.default,this._monatslistensammlung=new i.default,this._gesamtbilanz=new n.default,this._wiederherstellen()}return u(r,[{key:"eintrag_hinzufuegen",value:function(e){var t=new a.default(e.titel,e.betrag,e.typ,e.datum);this._eintraege.push(t),this._monatslistensammlung.aktualisieren(this._eintraege),this._gesamtbilanz.aktualisieren(this._eintraege),this._speichern()}},{key:"eintrag_entfernen",value:function(e){for(var t,i=0;i<this._eintraege.length;i++)if(this._eintraege[i].timestamp()===parseInt(e)){t=i;break}this._eintraege.splice(t,1),this._monatslistensammlung.aktualisieren(this._eintraege),this._gesamtbilanz.aktualisieren(this._eintraege),this._speichern()}},{key:"_speichern",value:function(){localStorage.setItem("eintraege",JSON.stringify(this._eintraege))}},{key:"_wiederherstellen",value:function(){var e=this,t=localStorage.getItem("eintraege");null!==t&&JSON.parse(t).forEach(function(t){e.eintrag_hinzufuegen({titel:t._titel,betrag:t._betrag,typ:t._typ,datum:new Date(t._datum)})})}},{key:"start",value:function(){this._navigationsleiste.anzeigen(),this._eingabeformular.anzeigen(),this._monatslistensammlung.anzeigen(),this._gesamtbilanz.anzeigen()}}]),r}();exports.default=g;
},{"./Navigationsleiste.js":"t5up","./Eingabeformular.js":"lnBy","./Monatslistensammlung.js":"lBOk","./Gesamtbilanz.js":"TlhK","./Eintrag.js":"rLSp"}],"x102":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./classes/Haushaltsbuch.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=new e.default;r.start();var s=r;exports.default=s;
},{"./classes/Haushaltsbuch.js":"zQro"}]},{},["x102"], null)
//# sourceMappingURL=/budget.e7f3fd4e.js.map
