/* CHALLENGE 4: Next Term in Arithmetic Progression 
The user enters two numbers in an arithmetic sequence. The program calculates and displays the next number in the sequence.

Example

Input: 
    First number: 3
    Second number: 6

Output: 
    The next number in the sequence is: 9 */

    let numberOne = prompt('Enter one number');
    let numberTwo = prompt('Enter number two')

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    alert(`Next term in arithmetic progression is: ${(numberTwo-numberOne)+numberTwo}`);
