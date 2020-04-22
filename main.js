//Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:;
//al posto dei multipli di 3 stampi "Fizz";
//al posto dei multipli di 5 stampi "Buzz";
//al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz";


//creo una lista di numeri da 1 a 100;
for (var i = 1; i <= 100 ; i++) {

    //identifico i numeri multipli di 3 e 5;
    if ( i % 5 == 0 && i % 3 == 0 ) {
        console.log("fizzbuzz");
    }

    //se il numero non è multiplo di 3 e 5 ma e solo un multiplo di 5, allora;
    else if ( i % 5 == 0 ) {
        console.log("buzz");
    }

    //se il numero non è multiplo di 3 e 5 e non è un multiplo di 3, allora;
    else if ( i % 3 == 0 ) {
    console.log("fizz");
    }

    //se il numero non ha nessuna delle condizioni precedenti allora verra stampato senza modifiche;
    else {
        console.log(i);
    }
}
