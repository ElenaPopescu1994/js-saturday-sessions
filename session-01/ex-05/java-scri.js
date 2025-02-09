/*CHALLENGE 5: Currency Conversion
The user enters an amount in one currency and an exchange rate. The program calculates and displays the converted amount.

Example

Input: 
    Amount: 100  
    Exchange rate: 4.5

Output: 
    Converted amount: 450   */

    let moneyAmount = prompt('Enter your amount of money');
    let exchangeRate = prompt('Enter one exchange rate');

    moneyAmount = Number(moneyAmount);
    exchangeRate = Number(exchangeRate);

    alert(`The converted amount is ${moneyAmount*exchangeRate}`);