var printing_order = [
	["a", ["", "r", "i", "u", "ru", "y"]],
	["e", ["", "r", "i", "ri", "u", "ru", "y", "ry"]],
	["∅", ["i", "ri", "y", "ry"]],
	["o", ["", "r", "i", "y"]],
	["u", ["u", "y"]],
	["ə", ["", "i", "u", "ry"]]
];

function generate(id, isBase) {
	generate_(id, isBase, printing_order, get_section);
}
