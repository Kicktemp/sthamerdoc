# Cronjobs

Cronjobs sind Skripte die im Hintergrund des Systems laufen. Diese können zu bestimmten Zeiten oder auch im Interval ausgeführt werden.

Wir haben bei Sthamer Cronjobs um:

1. Kundenprofile anzulegen
2. Joomla Benutzer anzulegen
3. Bestellungen zu exportieren
4. E-Mails zu versenden 

<video width="480" height="270" controls>
  <source src="/mp4/CLI-Import.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 


## Video: CLI Einleitung
In diesem Video geht’s einmal um den groben Aufbau der Webseite. Wie diese funktioniert. Wir fangen an mit dem Frontend. Das Frontend ist zweisprachig. Das heißt, der User kann zwischen den Sprachen wechseln. Die Sprachen bzw. die Inhalte werden in einem sogenannten Backend gepflegt.
Das Frontend ist durch einen sogenannten Login-Bereich geschützt. Über diesen Login-Bereich können sich dann die User anmelden und dann ihre Daten auch aufrufen. Der Kunde kommt an die Daten heran nachdem der ganze Importprozess aus ChemTop erfolgte. Dieser wird weiter unten erklärt. Sobald der Kunde eingeloggt ist, kann er weitere Daten sehen. Er kann Analysen beauftragen, sein Kundenprofil sehen, Löschanfragen stellen. Impressum, AGBs und Datenschutzerklärung kann jeder einsehen, auch wenn er nicht eingeloggt ist.

### Wie funktioniert das genau?
 Im Backend können wir alles konfigurieren. Wir melden uns als super Administrator, der sich im Back-End an. Unter „Komponenten > Schaum StHamer“ befindet sich die Komponente.
Hier gibt es globale Optionen. In den Optionen haben wir den CLi Import. Das CLi  ist ein Skript / Prozess, der im Hintergrund läuft.

#### Die Website besteht aus:
- Front-,
- Backend
- sowie CLi Skripten.

CLi-Skripte sorgen hier dafür, das automatisiert in einem bestimmten Intervall Arbeiten ausgeführt werden. Ein Skript importiert die Kundendaten aus ChemTop mit Hilfe einer CSV-Datei. Diese CSV-Datei eindeutig aufgebaut (siehe Punkt CSV).
Kundennummer, Rechnungsanschrift, Zahlungskondition, Bestätigungs-E-Mail, Zertifizikatsadresse, die Sprache des Kunden. Des weiteren relevante Daten, die für die Programmierung wichtig sind. Ob der Kunde steuerfrei ist (der Kunde sieht nur Nettopreise), ob er überhaupt Preise angezeigt bekommt, den Usernamen. Das ist der Benutzername, mit dem er sich nachher anmeldet. Dann noch die E-Mail damit wir ihm die Zugangsdaten für sein Profil zu schicken können.

Mit dem Feld „Block“, können Sie aus ChemTop einen Kunden sperren. z.B. weil er nicht bezahlt hat. Dann können Sie diesen Kunden erstmal blockieren, ohne dass sie ihn gleich zu löschen. Wenn auf Block den BOLEAN gleich „1“ setzen, dann sorgt, das System einfach dafür, dass der säumige Kunde sich nicht mehr einloggen kann.
Wichtig: Für alle Änderungen (über die CSV) muss immer ein UPDATE gleich „1“ gesetzt werden. Damit eben unser System weiß, wie die Daten verarbeitet werden müssen.
In den Tab „Ordner“ wird definiert, wo das System nach neuen CSV-Dateien für den Import nachgucken soll.

Sowie den Pfad wo die  Ordner mit den Kundennummer angelegt werden.
Welcher System-Benutzer das CLI-Skript ausführt und in welche Benutzergruppe der Kunde angelegt wird, wenn er über die CSV Datei importiert wird. 

#### Beispiel:
[0 0:04:47]
- Aufbau der MySQL-Tabelle
- Bestätigung, dass die Kunden-Tabelle leer ist.
- Ablegen der CSV-Datei in dem entsprechenden Ordner.
- Das System greift auf die neue Datei zu und importiert die neuen Daten.
[00:05:17]
Das Script läuft durch, holt sich den Ordner „Import Folder“ raus. Es prüft, ob dieser Ordner schon existiert. Wenn ja, liest er die Dateien, die in diesem Ordner drin liegen ein. In diesem Beispiel hat er jetzt eine Datei Import gefunden.
[00:05:47]
Diese liest er pro Zeile ein. Das Skript überprüft jeden Datensatz, den er dort findet.  Ob die erste Zeile KUM_NUM ist. Wenn ja, dann geht er halt weiter und ansonsten würde er den Datensatz anlegen. Wenn er die Datei abgearbeitet hat, wird diese gelöscht.
[00:06:17]
Wir sehen, dass nach dem Durchlauf die CSV-Datei nun nicht mehr da ist. 

Die wurde gelöscht und ist deswegen für den nächsten Import nicht mehr vorhanden. Der neue Datensatz wurde angelegt. Als Customer (Kunde), da ist aber noch kein User, der sich anmelden kann geworden.
Wenn wir die Komponente gehen, können wir das einsehen. In *„Komponenten >StHamer Schaum > Kunden“* sehen wir, dass er steuerfrei ist und Preise angezeigt bekommt. Ihm ist aber noch kein Benutzer zugeordnet worden. Mit dem man sich einloggen könnte.

Hierfür lösen wir den nächsten Prozess aus.
[00:07:03] 
Der holt sich aus der Tabelle (stammer customer), nur die Datensätze raus die *UPDATE = 1* gesetzt haben. Er geht diese einzelne Datensätze durch und würde  nun einen Benutzer erstellen (CREATE User).
[00:07:33]
Das kann eine Aktualisierung (Update) aber auch ein Anlegen (CREATE) sein. Im Moment unserem Fall ist es so, dass CREATE = NULL gesetzt ist, deswegen wird hier auch kein Update ausgeführt, sondern ein INSERT (neue Einfügen). Wenn er damit dann durch ist, dann wurde der Joomla-Benutzer angelegt. Er wird in die jeweilige Benutzergruppe reingeschoben und Wert, wer die Veränderung vorgenommen hat wird auf den User 248 (Super-Administrator) angelegt und dem neuen Kunden wird ein „Kundennummer Ordner“ angelegt.
[00:08:03]
Dann sehen wir, dass wir jetzt einen Ordner mit seiner Kundennummer haben. Wenn wir ins Back-End reingehen (in Benutzer), dann haben wir den neuen Benutzer und „Passwort zurücksetzen ist erforderlich“ wurde bei ihm eingestellt. Der Kunde bekommt dann eine Begrüßungs-E-Mail.
[00:08:18]
Der Begrüßungstext ist komplett anpassbar. Im Standardtext kriegt er dann seine Zugangsdaten mit dem Passwort. Wenn der Kunde sich jetzt anmeldet, landet er auf seinem Profil.
Er hat erstmal überhaupt keine andere Möglichkeit, eine Analyse zu beauftragen. Zuerst wird er aufgefordert, der Datenschutzerklärung zuzustimmen. Wenn man auf den Link in er Beschriftung klickt, geht ein Popup auf und er kann an Ort und Stelle die Datenschutzerklärung (DSE) einsehen.

Bei der Gelegenheit muss sich der User auch gleich ein neues Passwort vergeben (damit liegt es in seiner Verantwortung, ein sicheres Passwort zu wählen).
[00:09:18]
Erst wenn der Kunde der DSE zugestimmt hat und sich ein neues Passwort vergeben hat, kann er die Website bedienen.
- Warenkorb angucken
- eine Analyse beauftragen
- Profil anzeigen lassen (was für Daten im System hinterlegt sind)

Der Kunde kann keine Profildaten ändern! Das geht nur aus dem ChemTop heraus.

Der letzte Besuch wird in der Datenbank gespeichert. Anhand dessen könnte man dann auch Inaktivität feststellen und Benutzer benachrichtigen,  dass Sie sich doch mal bitte wieder anmelden müssen (da sonst die Daten gelöscht würden).
Diese Prozesse sind angedacht und müssen noch explizit von Ihnen benannt werden.

#### Das ist der Prozess, wie das Ganze mit der CSV-Datei funktioniert:
- CSV-Datei wird auf Server hochgeladen
- diese hat einen bestimmten Aufbau
- wird erstmal einmal in Kunden importiert
- wenn der Kunde angelegt ist (und „created_by = null“ ist, dann wird daraus ein Joomla User generiert.
- es wird ein Benutzer-Ordner für ihn angelegt
- erst nach Zustimmung zu der DSE und der Vergabe eines neuen Passworts, hat er Zugriff auf das komplette Frontend.

Das war in groben Zügen der CLi-Prozess.

## Import

Für das anlegen der Kundenprofile muss eine CSV aus ChemTop in das Portal System hochgeladen werden.

Path: `/csv/import`

 



## Export

## Updates
