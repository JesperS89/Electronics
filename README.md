Välkommen till min Elektronikshop!

Nedan följer lite instruktioner om hur du ska använda detta API.

Det finns fyra kategorier med produkter att söka på. Dessa kategorier är datorer, mobiler, tv-apparater och ljudsystem.

Vill du se vilka produkter som finns i varje kategori går du in i Postman och väljer metoden GET.

Sedan skriver du in:

localhost:8008/computers för datorer.
localhost:8008/mobiles för mobiler.
localhost:8008/televisions för tv-apparater.
localhost:8008/audio för ljudsystem.

Vill du söka på ett specifikt id i varje kategori lägger du till /":ditt id" på varje länk, exempel nedan:

localhost:8008/audio/1

Du kan även lägga till, ta bort eller ändra en produkt i varje kategori, men för detta behöver du vara inloggad.

Nedan följer instruktioner för hur du loggar in:

Ändra metod till Post i Postman och lägg in länken localhost:8008/register.

Tryck på "Body", klicka in "raw" och se till att det står JSON i blått längst till höger i fältet.

Välj sedan ditt användarnamn och lösenord genom att klistra in texten nedan, byt i de högra fälten till det användarnamn och lösenord du vill ha.

{
"username":"Ditt användarnamn här",
"password": "Ditt lösenord här"
}

När detta steg är klart byter du i adressfältet till localhost:8008/login

{
"username":"Ditt användarnamn här",
"password": "Ditt lösenord här"
}

Använd samma text och tryck på send. Har du skrivit samma uppgifter som du använde i register kommer du att få ett svar med en lång kod/text.

Kopiera den här texten/koden och tryck på "Headers" i Postman.
I vänstra kolumnen "Key" skriver du "Authorization". I den högra kolumnen "Value" kopierar du in din nyckel.
Se även till att kolumnen längst till vänster är ibockad.

Gå sedan tillbaka till "Body" i Postman.

För att lägga till en produkt väljer du metoden "Post" i Postman.

I adressfältet skriver du in:

localhost:8008/computers för att lägga till datorer.
localhost:8008/mobiles för att lägga till mobiler.
localhost:8008/televisions för att lägga till tv-apparater.
localhost:8008/audio för att lägga till ljudsystem.

Sedan behöver du i textfältet under skriva in vilka egenskaper produkten ska ha.

Nedan kommer texten du ska använda för varje typ av objekt (ändra bara på den högra sidan):

Dator:

{
"name": "Namn",
"description": "Beskrivning",
"manufacturer": "Tillverkare",
"price": 12345,
"processor": "Processor"
}

Mobil:

{
"name": "Namn",
"description": "Beskrivning",
"manufacturer": "Tillverkare",
"price": 12345,
"screen_type": "Skärmtyp"
}

Tv-apparat:

{
"name": "Namn",
"description": "Beskrivning",
"manufacturer": "Tillverkare",
"price": 12345,
"screen_size": 55
}

Ljudsystem:

{
"name": "Namn",
"description": "Beskrivning",
"manufacturer": "Tillverkare",
"price": 12345,
"effect": 12345
}

Tryck sedan på send.

För att ändra en produkt som redan finns behöver du titta vilket ID produkten har som du vill ändra.

När du gjort detta så sätter du metoden "Put" i Postman.

I adressfältet skriver du sedan följande:

Om du vill ändra datorn med id 2:

localhost:8008/computers/2

Sedan väljer du bara den eller de egenskaperna du vill ändra på. Vill jag ändra pris och beskrivning t.ex så ser det ut som nedan:

{
"description": "Beskrivning",
"price": 12345,

}

Tryck sedan på send.

För att ta bort en produkt sätter du metoden "Delete" i Postman.

I adressfältet skriver du sedan om du vill ta bort ljudsystemet med id 3:

localhost:8008/audio/3

Tryck på send.
