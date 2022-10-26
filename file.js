function quantStr(str) {
	let char = 0;
	let word = 0;
	let voyel = 0;
	let i = 0;
	if (str != "") {
		word = 1;
	}
	while (str[i] != ".") {
		i++;
		if (str[i] === " ") {
			word++;
		}

		if (str[i] != " " && str[i] != ".") {
			char++;
		}
		if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "y") {
			voyel++;
		}
	}
	let object = {
		NbrChar: char,
		NbrWord: word,
		NbrVoyel: voyel
	}
	return object;

}
