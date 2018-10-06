var printing_order = [
	["e", ["r", "ru", "", "u", "ri", "ry", "i", "y"]],
	["a", ["r", "ru", "", "u", "i", "y"]],
	["ə", ["", "u", "ry", "i"]],
	["o", ["r", "", "i", "y"]],
	["u", ["u", "y"]],
	["∅", ["ri", "ry", "i", "y"]]
];

function generate(id, isBase) {
	var str = '<table id="' + id + '" border="1"><tr><td></td>';
	for (var i = 0; i < printing_order.length; i++) {
		str += first_row[printing_order[i][0]];
	}

	str += "</tr><tr><td></td>";

	for (var i = 0; i < printing_order.length; i++) {
		str += getKaihomRow(printing_order[i][1]);
	}

	str += "</tr>";

	var ends = ["", "i", "n", "t", "u", "m", "p", "ŋ", "k"];

	for (var k = 0; k < ends.length; k++) {
		var s = "<tr>" + "<td>-" + ends[k] + "</td>";

		for (var i = 0; i < printing_order.length; i++) {
			s += foo(
				isBase,
				printing_order[i][0],
				printing_order[i][1],
				ends[k],
				get_section
			);
		}

		str += s + "</tr>";
	}

	str += "</table>";
	document.write(str);
}
