var section = {
	"通": ["uŋ","yuŋ","oŋ","yoŋ","uk","yuk","ok","yok"],
	"江": ["roŋ","rok"],
	"止": ["ie","rie","ye","rye","i","ri","yi","ryi","iə","iəi","yui"],
	"遇": ["io","yo","o"],
	"蟹": ["ei","uei","iei","riei","yei","ryei","ai","uai","re","rue","rei","ruei","rai","ruai","ui","əi","iai","yoi"],
	"臻": ["in","rin","ryn","yn","yun","iən","un","ən","ian","yon","it","rit","ryt","yt","yut","iət","ut","ət","iat","yot"],
	"山": ["an","uan","ran","ruan","ren","ruen","en","uen","ien","rien","yen","ryen","at","uat","rat","ruat","ret","ruet","et","uet","iet","riet","yet","ryet"],
	"效": ["eu","ieu","rieu","rau","au"],
	"果仮": ["a","ua","ia","ya","ra","rua"],
	"宕": ["iaŋ","yaŋ","aŋ","uaŋ","iak","yak","ak","uak"],
	"梗": ["raŋ","ruaŋ","rieŋ","ryeŋ","reŋ","rueŋ","ieŋ","yeŋ","eŋ","ueŋ","rak","ruak","riek","ryek","rek","ruek","iek","yek","ek","uek"],
	"曾": ["iəŋ","ryək","əŋ","uəŋ","iək","ək","uək"],
	"流": ["yu","u","iu","riu"],
	"深": ["im","rim","ip","rip"],
	"咸": ["əm","am","iem","riem","em","iam","yom","rem","ram","əp","ap","iep","riep","ep","iap","yop","rep","rap"]
}

function search(a){
	for(var b in section){ if(section[b].indexOf(a)+1){return b;}}
}

var all = ["uŋ","yuŋ","oŋ","yoŋ","roŋ","ie","rie","ye","rye","i","ri","yi","ryi","iə","iəi","yui","io","yo","o","ei","uei","iei","riei","yei","ryei","ai","uai","re","rue","rei","ruei","rai","ruai","ui","əi","iai","yoi","in","rin","ryn","yn",/*"rin",*/"yun","iən","un","ən","ian","yon","an","uan","ran","ruan","ren","ruen","en","uen","ien","rien","yen","ryen","eu","ieu","rieu","rau","au","a","ua","ia","ya","ra","rua",/*"ia",*/"iaŋ","yaŋ","aŋ","uaŋ","raŋ","ruaŋ","rieŋ","ryeŋ","reŋ","rueŋ","ieŋ",/*"rieŋ",*/"yeŋ",/*"ryeŋ",*/"eŋ","ueŋ","iəŋ","ryək","əŋ","uəŋ","yu","u","iu","riu","im","rim","əm","am","iem","riem","em","iam","yom","rem","ram",
"uk","yuk","ok","yok","rok",
"it","rit","ryt","yt","yut","iət","ut","ət","iat",
"yot","at","uat","rat","ruat","ret","ruet",
"et","uet","iet","riet","yet","ryet",
"iak","yak","ak","uak","rak","ruak",
"riek","ryek","rek","ruek","iek",
"yek","ek","uek","iək","ək","uək",
"ip","rip","əp","ap","iep","riep","ep","iap","yop","rep","rap"
];

function getKaihomRow(arr)
{
	var t = '';
	for(var i=0;i<arr.length;i++){
		t += '<td><span class="kaihom">-'+arr[i]+'-</span></td>';
	}
	return t;
}

function foo(isBase, main_v,kaihom_arr,end)
{
	var ans = '';
	for(var i=0; i<kaihom_arr.length;i++) {

		var top = (kaihom_arr[i] + main_v).replace(/i∅/,"i").replace(/y∅/,"y").replace(/uu/,"u");

		var tmp = (top + end);
		if(top === "i" || top === "ri") {
			if(end === "") {
				tmp = null;
			} else if(end === "i") {
				tmp = tmp.replace(/ii/,"i");
			}
		}

		if(top === "y" && end === "u") {
			tmp = null;
		}
		
		if(all.indexOf(tmp) + 1) {
			var t = '<td><span class="kaihom">'+kaihom_arr[i]+'</span><span class="main">'+main_v+'</span>'+end+'</td>';
			if(!isBase) {
				t = t.replace(/<span class="kaihom">(.*?)i<\/span><span class="main">∅/,'<span class="merger">$1i')
				t = t.replace(/<span class="kaihom">(.*?)y<\/span><span class="main">∅/,'<span class="merger">$1y')
				t = t.replace(/<span class="kaihom">(.*?)u<\/span><span class="main">u/,'<span class="merger">$1u')
				t = t.replace('i</span>i</td>','i</span></td>');
			}
			ans += t//.replace('</td>',"<br>"+search(tmp)+"</td>");
		} else {
			ans += "<td></td>"
		}
	}
	return ans;
}


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


	var ends = ["" ,"i","u","m","p","n","t","ŋ","k"]

	for(var i=0;i<ends.length;i++){
		str += getRow(isBase, ends[i]);	
	}

	str += '</table>';
	document.write(str);
}
