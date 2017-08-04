/*
Uses regex found at http://www.regular-expressions.info/creditcard.html to return
the brand of the Credit Card

@param cardNumber: (int) credit card number
Returns: (String) Brand of the credit card
*/
function returnCardBrand(cardNumber) {
    var brand = {
        "Visa":/^4[0-9]{12}(?:[0-9]{3})?$/,
        "MasterCard": /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
        "America Express": /^3[47][0-9]{13}$/,
        "Discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        "JCB" : /^(?:2131|1800|35\d{3})\d{11}$/
    }
    //Test the cardNumber to see if it meets a brands specifications
    for(var i in brand) {
        if(brand[i].test(cardNumber)) {
            return i
        }
    }
}

/*
Uses Luhn's Algorithm to validate the credit card number.
Code originally from gist.github.com/DiegoSalazar/4075533

@param cardNumber: (int) credit card number
Returns: (Boolean) if the credit card is valid (true), or if it is invalid (false)
*/
function isValidCard(cardNumber) {
// Card number is only valid if there are numbers, spaces, or dashes
// If there are any other characters, the card is invalid
    if (/[^0-9-\s]+/.test(cardNumber)) {
      return false;
    }

// Luhn Algorithm
    var nCheck = 0;
    var nDigit = 0;
    var bEven = false;
    cardNumber = cardNumber.toString().replace(/\D/g, "");

    for (var i = cardNumber.length - 1; i >= 0; i--) {
        var cDigit = cardNumber.charAt(i);
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

//Test with a Valid Discover Card
var num = 6011111111111117;
console.log(returnCardBrand(num));
console.log(isValidCard(num));

/* Test returns: 
Discover
true
*/
