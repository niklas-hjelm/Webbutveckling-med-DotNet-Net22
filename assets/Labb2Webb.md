# LABB 2 APIer

    I denna uppgift skall vi implementera databashantering och REST API för en e-handel.
## Steg 3

Kunden för ditt förra uppdrag var väldigt nöjd med vad du åstadkommit och har rekommenderat dig för en av sina branschkollegor.

De har nu ett nytt uppdrag. Den nya kunden vill att du utvecklar ett REST Api och de vill att vi gör det med Microsoft .NET 7.0 teknologier.

Tanken med det nya uppdraget är att de vill kunna återanvända api:et till flera applikationer som kommer att utvecklas framöver.

De har följande krav på lösningen:

## Grundläggande krav
* Det ska gå att skapa nya proukter som lagras i en databas(SQL-Server eller MongoDB)
* Det ska gå att ändra och ta bort produkter i databasen
* Det ska gå att markera att produkter utgått ur sortimentet
* Det ska gå att hämta alla produkter
* Det ska gå att söka efter en produkt på produktens namn eller produktnummer
* Kunder ska kunna registrera sig och uppgifterna skall lagras i databasen.
* Kunder ska kunna uppdatera sina uppgifter
* Det ska gå att lista alla Kunder
* Det ska gå söka efter kunder på e-post adress
* När en kund anmäler sig/köper placerar en order måste vi kunna spåra vilken/vilka produkter som kunden har köpt
## Detaljkrav
### För en produkt skall följande uppgifter lagras i databasen

* Produktnummer
* Produktnamn
* Produktbeskrivning
* Pris
* Produktkategori (Mejeri, elektronik, husgeråd eller liknande)
* Status (om den finns i eller har utgått ur sortimentet)

### För en deltagare skall följande information lagras

* Förnamn
* Efternamn
* E-post
* Mobilnummer
* Adressuppgifter
## Designkrav
REST Api-lösningen skall utvecklas enligt objektorienterade principer och använda följa Single Responsibility Principle.

All databaskommunikation skall också ske med hjälp av Repository Pattern.

## Användargränssnitt
Här lämnas det fritt, antingen kan vi använda JavaScript, React, Vue.js, Blazor eller ASP.NET MVC för att implementera en applikation för att kommunicera med REST Api-lösningen. Klientapplikationen skall kunna presentera och hantera produkter och deltagare enligt de grundläggande kraven ovan.

## Redovisning

Använd repot genom uppgiften i GitHub-Classrom [HÄR](https://classroom.github.com/a/2IMRFnr5).
Skapa en branch som heter `development` att arbeta i. När arbetet är färdigt pusha till `main` och lämna in på ITHS-Distans.

## Bedömning
### Godkänt(G)

En API-specifikation ska skrivas och bifogas i repositoryt.
Denna specifikation ska tydligt redogöra för alla endpoints och deras funktion.

För att få godkänt skall alla delar för produkthantering vara implementerade. 

Kravet på att följa Single Responsibility Principle skall vara implementerat.

Repository Pattern skall vara implementerat och användas för all databaskommunikation.

En klientapplikation skall nyttja REST Api:et och uppfylla designkraven.

### Väl godkänt(VG)
För väl godkänt skall alla krav på G nivån vara uppfyllda. Förutom detta skall REST Api:et även implementera Unit of Work mönstret.

Klientapplikationen skall dessutom kunna hantera deltagare och presentation av vilka kurser som deltagaren har valt att anmäla sig till eller köpt.

Man ska dessutom nyttja rollbaseerad autentisering med JWT. Antingen egenimplementerat, OAuth eller med Identity Server.

Om en Admin är inloggad ska man få tillgång till en admin-sida där man kan se kunder och ordrar samt ändra i sortimentet.