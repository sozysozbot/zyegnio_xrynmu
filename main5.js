function getRow(isBase, end) {
	var f = function(txt) {
		return "";
	};
	return (
		"<tr>" +
		"<td>-" +
		end +
		"</td>" +
		foo(isBase, "e", ["r", "ru", "", "u", "ri", "ry", "i", "y"], end, f) +
		foo(isBase, "a", ["r", "ru", "", "u", "i", "y"], end, f) +
		foo(isBase, "ə", ["", "u", "ry", "i"], end, f) +
		foo(isBase, "o", ["r", "", "i", "y"], end, f) +
		foo(isBase, "u", ["u", "y"], end, f) +
		foo(isBase, "∅", ["ri", "ry", "i", "y"], end, f) +
		"</tr>"
	);
}

function generate(id, isBase) {
	var str =
		'<table id="' +
		id +
		'" border="1">\
	<tr>\
		<td></td>\
		<td colspan="8"><span class="main">e</span></td>\
		<td colspan="6"><span class="main">a</span></td>\
		<td colspan="4"><span class="main">ə</span></td>\
		<td colspan="4"><span class="main">o</span></td>\
		<td colspan="2"><span class="kaihom">介u</span>+<span class="main">主u</span></td>\
		<td colspan="4"><span class="kaihom">介i</span>+<span class="main">主∅</span></td>\
	</tr>\
	<tr>\
	<td></td>';

	str +=
		getKaihomRow(["r", "ru", "0", "u", "ri", "ry", "i", "y"]) +
		getKaihomRow(["r", "ru", "0", "u", "i", "y"]) +
		getKaihomRow(["0", "u", "ry", "i"]) +
		getKaihomRow(["r", "0", "i", "y"]) +
		getKaihomRow(["u", "y"]) +
		getKaihomRow(["ri", "ry", "i", "y"]);
	str += "</tr>";

	var ends = ["", "i", "n", "t", "u", "m", "p", "ŋ", "k"];

	for (var i = 0; i < ends.length; i++) {
		str += getRow(isBase, ends[i]);
	}

	str += "</table>";
	document.write(str);
}
