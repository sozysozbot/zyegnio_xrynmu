

function getRow(isBase, end)
{
	return '<tr>'+'<td>-'+end+'</td>' +
		foo(isBase,'a', ['','r','i','u','ru','y'],end) +
		foo(isBase,'e', ['','r','i','ri','u','ru','y', 'ry'],end) +
		foo(isBase,'∅', ['i','ri','y','ry'],end) +
		foo(isBase,'o', ['','r','i','y'],end) +
		foo(isBase,'u', ['u','y'],end) +
		foo(isBase,'ə', ['','i','u','ry'],end) +
		'</tr>';
}



function generate(id,isBase){
	var str='<table id="'+id+'" border="1">\
	<tr>\
		<td></td>\
		<td colspan="6"><span class="main">a</span></td>\
		<td colspan="8"><span class="main">e</span></td>\
		<td colspan="4"><span class="kaihom">介i</span>+<span class="main">主∅</span></td>\
		<td colspan="4"><span class="main">o</span></td>\
		<td colspan="2"><span class="kaihom">介u</span>+<span class="main">主u</span></td>\
		<td colspan="4"><span class="main">ə</span></td>\
	</tr>\
	<tr>\
	<td></td>';


	str+=
		getKaihomRow(['0','r','i','u','ru','y']) +
		getKaihomRow(['0','r','i','ri','u','ru','y', 'ry']) +
		getKaihomRow(['i','ri','y','ry']) +
		getKaihomRow(['0','r','i','y']) +
		getKaihomRow(['u','y']) +
		getKaihomRow(['0','i','u','ry']);
	str += '</tr>';


	var ends = ["" ,"i","n","t","u","m","p","ŋ","k"]

	for(var i=0;i<ends.length;i++){
		str += getRow(isBase, ends[i]);	
	}

	str += '</table>';
	document.write(str);
}
