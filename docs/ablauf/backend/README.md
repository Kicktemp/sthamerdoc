# Backend

Für die Verwaltung wurde im Backend eine Komponente entwickelt.

## Optionen

Über Optionen werden die Basis Einstellungen verwaltet wie:

- Standard MwSt. 
- Upload-Pfad
- Empfänger von E-Mails
- Absender E-Mail
- Absender Name
- Bestellnummer Aufbau
- Bestellnummer Länge
- Zertifikat Demo Bild
- Ordner (Import, Export, User Ordner)
- Zugangsberechtigung für den User Ordner

## Dashboard

Das Dashboard liefert über eine Tabelle eine kleine Statisitk über Bestellungen. 
 
## Artikel 

## Tests

`#__sthamer_tests`

| Feld | Zweck | Feld Typ
| ------- | ---------- | --------
| title | Name des Test | VARCHAR(250)
| price | Preis (Netto) | DECIMAL
| description | Beschreibung | TEXT
| translations | Übersetzungen in der jeweiligen Sprache | TEXT
| ordering | Rheihenfolge | INT

## Schaummittelarten

`#__sthamer_foams`

| Feld | Zweck | Feld Typ
| ------- | ---------- | --------
| title | Name Schaummitteltyp | VARCHAR(250)
| description | Beschreibung | TEXT
| translations | Übersetzungen in der jeweiligen Sprache | TEXT
| ordering | Rheihenfolge | INT
| addprice | Preis (Netto) | DECIMAL
| isar | Zumischrate anzeigen | TINYINT - DEFAULT 1
| proportioning | Zumischraten Checkboxen | TEXT

## Artikel

`#__sthamer_articles`

| Feld | Zweck | Feld Typ
| ------- | ---------- | --------
| title | Name Artikel | VARCHAR(250)
| articleid | Art.-Nr. | VARCHAR(250)
| description | Beschreibung | TEXT
| price | Preis (Netto) | DECIMAL
| translations | Übersetzungen in der jeweiligen Sprache | TEXT
| matrix | Matrix (Artikel/Test) nutzen | TINYINT - DEFAULT 1
| ordering | Rheihenfolge | INT

## Matrix (Artikel/Tests)

Um bei dem Prozess für das Beauftragen einer Analyse den Preis zu steuern, wird eine Matrix benötigt.
Nach der Auswahl des Artikel wird geprüft ob dieser eine Matrix hat. Die Matrix bietet die Möglichkeit weitere Tests zu beauftragen.
In Abhängigkeit zum Artikel, zur Schaummittelart und der Wasserart gibt es unterschiedliche Tests zur Auswahl.

Jeder Test kann als Basistest (nicht abwählbar), Zusatztest oder nicht machen gekennzeichnet werden.

Einige Test sind als Basistest oder Zusatztest gekennzeichnet, diese Test können zur Abwahl gesperrt werden, d.h. Diese sind Notwendig und sind nicht austauschbar.

`#__sthamer_proofs`

| Feld | Zweck | Feld Typ
| ------- | ---------- | --------
| title | Name Matrix | VARCHAR(255)
| article_id | Artikel ID | INT
| foam_id | Schaummittelart ID | INT
| watertype | Wasserart (AQM oder AQF) | TINYINT
| ordering | Rheihenfolge | INT

`#__sthamer_proof_test_map`
| Feld | Zweck | Feld Typ
| ------- | ---------- | --------
| test_id | Test ID | INT
| proof_id | M ID | INT
| watertype_id | Wasserart (AQM oder AQF) | TINYINT
| testtype | Wasserart (AQM oder AQF) | TINYINT
| selectable | Wasserart (AQM oder AQF) | TINYINT
| proof_ordering | Schaummittelart ID | INT
