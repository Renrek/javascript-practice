/*
Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array.
*/

function arrayOfMultiples (num, length) {
	let multiplesArray = [];
	for(let i = 1; i <= length; i++){
		multiplesArray.push(i * num);
	}
	return multiplesArray;
}

/*
Test.assertSimilar(arrayOfMultiples(7, 5), [7, 14, 21, 28, 35])
Test.assertSimilar(arrayOfMultiples(12, 10), [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
Test.assertSimilar(arrayOfMultiples(17, 7), [17, 34, 51, 68, 85, 102, 119])
Test.assertSimilar(arrayOfMultiples(630, 14), [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820])
Test.assertSimilar(arrayOfMultiples(140, 3), [140, 280, 420])
Test.assertSimilar(arrayOfMultiples(7, 8), [7, 14, 21, 28, 35, 42, 49, 56])
Test.assertSimilar(arrayOfMultiples(11, 21), [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231])
*/