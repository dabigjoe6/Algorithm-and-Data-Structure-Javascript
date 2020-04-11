//This is not exactly a leetcode question but a Bloomberg phonescreen interview question

// Given an int n. You can use only 2 operations:

// multiply by 2
// integer division by 3 (e.g. 10 / 3 = 3)
// Find the minimum number of steps required to generate n from 1.

// Example 1:

// Input: 10
// Output: 6
// Explanation: 1 * 2 * 2 * 2 * 2 / 3 * 2
// 6 steps required, as we have used 5 multiplications by 2, and one division by 3.

// Example 2:

// Input: 3
// Output: 7
// Explanation: 1 * 2 * 2 * 2 * 2 * 2 / 3 / 3
// 7 steps required, as we have used 5 multiplications by 2 and 2 divisions by 3.



function minNumberOfSteps(target) {
	let queue = [];
	let visited = {};

	let steps = 0;

	queue.push(1);

	while(queue.length > 0) {
		let size = queue.length;
		while(size > 0) {
			let current_value = queue.shift();

			if(current_value == target) {
				return steps;
			}

			let value1 = Math.round(current_value * 2);
			let value2 = Math.round(current_value / 3);

			if(!(value1 in visited)) {
				queue.push(value1);
				visited[value1] = '';
			}

				if(!(value2 in visited)) {
				queue.push(value2);
				visited[value2] = ''
			}

			size = size - 1;
		}

		steps = steps + 1;
	}

	return -1;
}

console.log(minNumberOfSteps(5));