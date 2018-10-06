var printing_order = [
	["a", ["", "r", "i", "u", "ru", "y"]],
	["e", ["", "r", "i", "ri", "u", "ru", "y", "ry"]],
	["∅", ["i", "ri", "y", "ry"]],
	["o", ["", "r", "i", "y"]],
	["u", ["u", "y"]],
	["ə", ["", "i", "u", "ry"]]
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
