//* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
//* Update the current existing inventory item quantities (in arr1). 
//* If an item cannot be found, add the new item and quantity into the inventory array. 
//* The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
	arr2.forEach(newItem => {
		const newStockName = newItem[1];
		const newStockQty = newItem[0];
		
		arr1.forEach(oldItem => {
			if (oldItem.includes(newStockName)) oldItem[0] += newStockQty;
		});

		if (!arr1.find(e => e.includes(newStockName))) {
			arr1.push(newItem);
		};
	});

	return arr1.sort((a, b) => (a[1] < b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
}

const curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

const newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));