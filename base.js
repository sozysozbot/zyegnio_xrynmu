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
};

var historical = [[["東","董","送","屋"],["uŋ","yuŋ"]],[["冬","","宋","沃"],["oŋ"]],[["鍾","腫","用","燭"],["yoŋ"]],[["江","講","絳","覚"],["roŋ"]],[["支","紙","寘",""],["ie","rie","ye","rye"]],[["脂","旨","至",""],["i","ri","yi","ryi"]],[["之","止","志",""],["iə"]],[["微","尾","未",""],["iəi","yui"]],[["魚","語","御",""],["io"]],[["虞","麌","遇",""],["yo"]],[["模","姥","暮",""],["o"]],[["斉","薺","霽",""],["ei","uei"]],[["","","祭",""],["iei","riei","yei","ryei"]],[["","","泰",""],["ai","uai"]],[["佳","蟹","卦",""],["re","rue"]],[["皆","駭","怪",""],["rei","ruei"]],[["","","夬",""],["rai","ruai"]],[["灰","賄","隊",""],["ui"]],[["咍","海","代",""],["əi"]],[["","","廃",""],["iai","yoi"]],[["真","軫","震","質"],["in","rin","ryn"]],[["諄","準","稕","術"],["yn"]],[["臻","","","櫛"],["rin"]],[["文","吻","問","物"],["yun"]],[["欣","隠","焮","迄"],["iən"]],[["魂","混","慁","没"],["un"]],[["痕","很","恨",""],["ən"]],[["元","阮","願","月"],["ian","yon"]],[["寒","旱","翰","曷"],["an"]],[["桓","緩","換","末"],["uan"]],[["刪","潸","諫","鎋"],["ran","ruan"]],[["山","産","襉","黠"],["ren","ruen"]],[["先","銑","霰","屑"],["en","uen"]],[["仙","獮","線","薛"],["ien","rien","yen","ryen"]],[["蕭","篠","嘯",""],["eu"]],[["宵","小","笑",""],["ieu","rieu"]],[["肴","巧","效",""],["rau"]],[["豪","晧","号",""],["au"]],[["歌","哿","箇",""],["a"]],[["戈","果","過",""],["ua","ia","ya"]],[["麻","馬","禡",""],["ra","rua","ia"]],[["陽","養","漾","薬"],["iaŋ","yaŋ"]],[["唐","蕩","宕","鐸"],["aŋ","uaŋ"]],[["庚","梗","映","陌"],["raŋ","ruaŋ","rieŋ","ryeŋ"]],[["耕","耿","諍","麦"],["reŋ","rueŋ"]],[["清","静","勁","昔"],["ieŋ","rieŋ","yeŋ","ryeŋ"]],[["青","迥","径","錫"],["eŋ","ueŋ"]],[["蒸","拯","證","職"],["iəŋ","ryəŋ"]],[["登","等","嶝","徳"],["əŋ","uəŋ"]],[["尤","有","宥",""],["yu"]],[["侯","厚","候",""],["u"]],[["幽","黝","幼",""],["iu","riu"]],[["侵","寝","沁","緝"],["im","rim"]],[["覃","感","勘","合"],["əm"]],[["談","敢","闞","盍"],["am"]],[["塩","琰","豔","葉"],["iem","riem"]],[["添","忝","㮇","帖"],["em"]],[["厳","儼","釅","業"],["iam"]],[["凡","范","梵","乏"],["yom"]],[["咸","豏","陷","洽"],["rem"]],[["銜","檻","鑑","狎"],["ram"]]];

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

		if(top === "u" || top === "yu") {
			if(end === "") {
				tmp = null;
			} else if(end === "u") {
				tmp = tmp.replace(/uu/,"u");
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
				t = t.replace('u</span>u</td>','u</span></td>');
			}
			ans += t.replace('</td>',"<br>"+search(tmp)+"</td>");
		} else {
			ans += "<td></td>"
		}
	}
	return ans;
}