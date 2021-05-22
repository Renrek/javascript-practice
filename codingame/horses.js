/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 var horses = new Array();
 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     const pi = parseInt(readline());
     horses.push(pi);
 }
 orderedHorses = horses.sort((a, b) => a - b);
 var lastHorse = 0;
 var smallestDifference = 99999999;
 var currentDifference = 0;
 
 var i = 0, len = orderedHorses.length;
 while (i < len) {
     currentDifference = orderedHorses[i] - lastHorse;
     console.error(currentDifference);
     if (currentDifference < smallestDifference){
         smallestDifference = currentDifference;
     }
     lastHorse = orderedHorses[i];
     i++
 }
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 console.error(orderedHorses)
 console.log(smallestDifference);
 