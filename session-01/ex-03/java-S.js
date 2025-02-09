/*CHALLENGE 3: Final Grade Calculation
A student receives three grades. The program calculates and displays the final average.

Example

Input: 
    First grade: 7.5
    Second grade: 8.5
    Third grade: 9.5

Output: 
    Final grade: 8.5  */

    let gradeOne = prompt ('Input grade one');
    let gradeTwo = prompt ('Input grade two');
    let gradeThree = prompt ('Input grade three');

    gradeOne = Number(gradeOne);
    gradeTwo = Number(gradeTwo);
    gradeThree = Number(gradeThree);

    alert(`The final average is: ${(gradeOne+gradeTwo+gradeThree)/3}`);