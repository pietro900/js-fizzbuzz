//Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:;
//al posto dei multipli di 3 stampi "Fizz";
//al posto dei multipli di 5 stampi "Buzz";
//al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz";


//stampo i numeri da 1 a 100;
for (var i = 1; i <= 100; i++) {
    console.log(i);

    //definisco i numeri multipli di 3 e 5;
    if ( i % 5 == 0 && i % 3 == 0 ) {
        console.log("fizzbuzz");
    }

    //definisco i numeri multipli di 3;
    else if ( i % 5 == 0 ) {
        console.log("buzz");
    }

    //definisco i numeri multipli di 5;
    else if ( i % 3 == 0 ) {
    console.log("fizz");
    }
}

document.getElementById('lista').innerHTML = (i);
