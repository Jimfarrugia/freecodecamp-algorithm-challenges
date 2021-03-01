//* Create a function that takes two or more arrays 
//* and returns an array of their symmetric difference.
//* The returned array must contain only unique values (no duplicates).

function sym(...args) {
	function symmetricDifference(a, b) {
		const result = [];
		a.forEach(value => {
			if (!b.includes(value) && !result.includes(value))
				result.push(value);
		});
		b.forEach(value => {
			if (!a.includes(value) && !result.includes(value))
				result.push(value);
		});
		return result.sort((a,b) => a - b);
	};
	return args.reduce(symmetricDifference);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // => [3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [5, 6, 7])); // => [3, 4, 6, 7]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // => [1, 4, 5]