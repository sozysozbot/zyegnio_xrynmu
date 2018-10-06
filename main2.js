var printing_order = [
	["e", ["r", "ru", "", "u", "ri", "ry", "i", "y"]],
	["a", ["r", "ru", "", "u", "i", "y"]],
	["ə", ["", "u", "ry", "i"]],
	["o", ["r", "", "i", "y"]],
	["u", ["u", "y"]],
	["∅", ["ri", "ry", "i", "y"]]
];

function generate(id, isBase) {
	generate_(id, isBase, printing_order, get_section);
}

