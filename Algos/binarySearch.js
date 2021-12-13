const binarySearch = (arr, num) => {
	let left = arr[0];
	let right = arr.length;
	while(left <= right){
		let center = left + Math.floor((right - left) / 2);

		if(num === arr[center]){
			return center;
		}
		if(num < arr[center]){
			right = center - 1;
		} else{
			left = center + 1;
		}
	}
	return -1
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 52))