# StHamer Schaum-Komponente

Hier sind alle essenziellen Informationen und Konfigurationen, die die Mitarbeiter brauchen, um die Inhalte der Website anzupassen, und die Analysen anzupassen (z.B neue Preise einpflegen).


Dort werden die Analysemöglichkeiten konfiguriert.
Zugang: Obere Navigation Komponenten > Schaum Dr. StHamer = Übersichtsseite

## 2.2.1 Dashboard
Übersichtsseite der Komponente. Hier könnten später für Sie wichtige Statistiken ausgegeben werden. Aktuell werden hier nur die Anzahl der Schäume ausgegeben.

## 2.2.2 Aufträge
Auflistung der Bestellungen und welche Proben darin enthalten sind.


## 2.2.3 Proben
Auflistung der einzelnen Analysen

## 2.2.4 Kunden
Der Standard Joomla! User wird so mit den Daten aus Chemtop angelegt. Diese zusätzlichen Userdaten können dann im backend zu dem Userdaten im einen eigenen Reiter eingesehen werden.
Diese Daten können hier nicht angepasst werden. Eine Anpassung dieser Daten kann nur aus einem ChemTop CSV Export geschehen.
Daher können Adressänderungen nur in ChemTop durchgeführt werden.


## 2.2.5 Tests
Hier können die Tests konfiguriert werden. Es können auch Test gelöscht und deaktiviert werden.

Folgende Angaben können Sie zu einem Test verändern:

### 2.2.5.1 Reiter: Details
Test*: Deutscher Name des Tests.

Preis*: Hier bitte den Netto-Preis eintragen.

Beschreibung: Längere Beschreibung des Tests z.B. mit Nennung von entsprechenden Normen.

Status: Ob dieser Test gerade veröffentlicht oder deaktiviert ist.

### 2.2.5.2 Reiter: Übersetzungen
Hier können die Übersetzungen für verschiedene Sprachen angelegt werden. Bisher ist das nur English. Wenn man auf das Grüne „+“ Symbol klickt, kann man weitere Übersetzungen zu dem Test abspeichern.

### 2.2.5.3 Reiter: Veröffentlichung und Berechtigungen

DO NOT TOUCH – so lassen, wie es ist!

## 2.2.6 Schaummittelarten
Anlegen der Schaummittelarten

Anmerkung:
Meerwasser / Frischwasser wird in der Matrix konfiguriert. Da es je nachdem verschiedene Basistests geben kann.

### 2.2.6.1 Reiter: Details
Schaumtyp*: Eindeutiger Name des Schaums z.B. AFFF

Preis*:	ToDo>Niels Brauchen wir den überhaupt? Kann das nicht weg?

Beschreibung: Längere Beschreibung was den Schaumtyp ausmacht.

### 2.2.6.2 Reiter: Zumischrate
Zumischrate anzeigen: Ja/Nein

Zumischraten: Können per Checkbox ausgewählt werden.

### 2.2.6.3 Reiter: Übersetzungen
Hier können weitere Sprachen mit hinzugefügt werden. Standardmäßig sollte dies Englisch sein.
Sprache:

Artikel: (Name des Artikels) was meistens der auch die deutsche Abkürzung sein sollte.

Beschreibung: Die übersetzte Beschreibung des Artikels.

### 2.2.6.4 Reiter: Veröffentlichung und Berechtigungen

DO NOT TOUCH – so lassen, wie es ist!


### 2.2.7 Artikel (Paket)
Hier werden bestellbare Pakete konfiguriert. Die man von ihnen Analysieren lassen kann.

### 2.2.7.1 Reiter: Details
Status: Veröffentlicht/Versteckt

Matrix nutzen: „Ja“ nur bei Routinemustern, alles andere hat ein „Nein“

Art.-Nr:	„LL-Nummer“ der Produkte

Preis: 		Netto-Preis für den Artikel (Paket)

Beschreibung: Langbeschreibung des Artikels. Dieser wird auch in der Übersichtsseite „unsere Analysepakete“ ausgegeben.


### 2.2.7.2 Reiter: Übersetzungen
Übersetzung des Artikels (Pakets) in andere Sprachen.
Mit dem „+“ können später noch weitere Sprachen hinzugefügt werden.

### 2.2.7.3 Reiter: Veröffentlichung und Berechtigungen
DO NOT TOUCH – so lassen, wie es ist!

## 2.2.8 Matrix (Artikel/Tests)
Das eigentliche Kernstück der Komponente - hier können zu den Routinemuster-Proben die einzelnen Tests konfiguriert werden.
Herbei muss jeder Schaum einmal in Meerwasser und in Frischwasser angelegt werden. Da diese teilweise unterschiedliche Basistests haben.

### 2.2.8.1 Reiter: Details
Status:	veröffentlicht / versteckt

Wasserart:	Meerwasser / Frischwasser

Schaumittelart:	Hier steht zur Auswahl was man in dem Bereich Schaummittelarten eingestellt hat und „veröffentlicht“ ist.

Artikel: Zu welchem Artikel gehört dieser Schaum


### 2.2.8.2 Reiter: Berechtigungsmatrix
Alle zur Verfügung stehenden angaben können hier zu dem entsprechenden Schaum mit definiertem Wassertyp definiert werden.

Beispiel-Test:
- Baistest (ist standardmäßig mit enthalten)
- Zusatztest (kann hinzugewählt werden, die Kosten für die Untersuchung erhöhen sich)
- nicht machen (dieser Test kann nicht mit diesem schaumgemacht werden).

Zusätzlich hat man noch die Optionen:
- Austauschbar (der Basistest kann deaktiviert werden, und es kann dafür ein anderer Zusatz-Test vom Kunden kostenneutral dazugenommen werden.
- Nicht austauschbar verhindert den Austausch eines Basistest gegen einen anderen. 

Reihenfolge: Wie die Zusatztests ausgegeben werden


*Beispiele:*
- Basistest – nicht austauschbar: Test muss vom Kunden genommen werden.
- Baistest - austauschbar: Test kann vom Kunden deaktiviert werden und er kann dafür einen verfügbaren Zusatztest auswählen.

Der Preis eines Routinemusters sinkt nie unter den Grundbetrag, selbst wenn der Kunde Tests abwählt und keine Zusatztests auswählt!
ToDo>Niels: Ist doch so oder? Sollte auf jeden Fall so sein. Prices only Go Up.

### 2.2.8.3 Reiter: Veröffentlichung und Berechtigungen

DO NOT TOUCH – so lassen, wie es ist!