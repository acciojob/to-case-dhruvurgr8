function toCase(text) {
  result1 = text.toLowerCase();
	result2 = text.toUpperCase();
	return `${result1}-${result2}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
