/*
The Goal
In this exercise, you have to analyze records of temperature to find the closest to zero.

	
Sample temperatures
Here, -1 is the closest to 0.

Rules
Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).
 	Game Input
Your program must read the data from the standard input and write the result on the standard output.
Input
Line 1: N, the number of temperatures to analyze

Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526

Output
Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.
Constraints
0 ≤ N < 10000
Example
Input
5
1 -2 -8 4 5
Output

1
*/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 var temps  = [];
 const n = parseInt(readline()); // the number of temperatures to analyse
 var inputs = readline().split(' ');
 for (let i = 0; i < n; i++) {
     const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
     temps.push(t); // My only pieced added to boiler code trial
 }
 
 // My code starts here
 // This exercise could have been solved with sort with a fraction of code, however 
 // the exercise was about arrays, loops, and conditions.
 let closest = 0;
 for (let j = 0; j < temps.length; j++){
    //Set initial temp from first in the array
     if (j === 0){
         closest = temps[j];
     }
     
     if ( Math.abs(temps[j]) == Math.abs(closest) && temps[j] > closest) {
         closest = temps[j];
     } else if ( Math.abs(temps[j]) < Math.abs(closest)){
         closest = temps[j];
     }
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(closest);
 