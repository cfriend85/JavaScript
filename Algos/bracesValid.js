const bracesValid = (input) => {
	let last_index = 0;
	open = ['(', '[', '{']
	close = [')', ']', '}']

	for (let i = 0; i < input.length; i++) {
		if (input[i] == open[0]) {
			last = 0;
			last_index = i;
		} else if (input[i] == open[1]){
			last = 1;
			last_index = i;
		} else if (input[i] == open[2]){
			last = 2;
			last_index = i;
		} else{
			break;
		}
	}
	if (close[last] == input[last_index + 1]) {
		return true;
	}
	return false;
}
console.log(bracesValid("{{()}}[]"))