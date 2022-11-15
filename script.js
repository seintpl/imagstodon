function findprof(instance,nick) {
    document.getElementById("profiles").innerHTML += '<div class="col-md-3 text-center pb-3 border" style="min-height:300px"><div style="font-weight:bold">'+instance+'</div><div id="'+instance+'"><br /><br /><br />Profile not found here.';
    var urljson = 'https://'.concat(instance,'/@',nick,'.json');
    fetch(urljson)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         try {
            if (data["type"]) {
                document.getElementById(instance).innerHTML = 'Account-type: '+data["type"];
                document.getElementById(instance).parentNode.style.backgroundColor = "#ddffdd";
            }  
         }
         catch {
         }
         try {
            if (data["published"]) document.getElementById(instance).innerHTML += '<br />Published: '+data["published"].slice(0,10);
         }
         catch {
         }
         try {
            if (data["summary"]) document.getElementById(instance).innerHTML += '<br />'+data["summary"];
         }
         catch {
         }         
         try {
            document.getElementById(instance).innerHTML += '<a href="'+data["id"]+'"><img src="'+data["icon"]["url"]+'" width="75%" /></a>';
         }
         catch {
         } 
         document.getElementById(instance).innerHTML += '</div></div>';
      })
}    

function imag() {
  f = document.getElementById("nickname").value;
  document.getElementById("profiles").innerHTML = '';
  if (f=='') {document.getElementById("imag_result").innerHTML = '<div style="padding-top: 10px; font-weight:bold;">Enter nickname above.</div>';}
  else {
    findprof('mastodon.social',f);
    findprof('mastodon.online',f);
    findprof('infosec.exchange',f);
    findprof('nerdculture.de',f);
    findprof('toot.wales',f);
    findprof('hachyderm.io',f);
    findprof('kolektiva.social',f);
    findprof('masto.ai',f);
    findprof('sueden.social',f);
    findprof('tkz.one',f);
    findprof('octodon.social',f);
    findprof('mastodon.nl',f);  
    findprof('mastodon.fun',f);
    findprof('mastodon.xyz',f);
    findprof('mastodon.cloud',f);
    findprof('mastodon.cc',f);
    findprof('0sint.social',f);
    findprof('kolektiva.social',f);
    findprof('mastodon.vlaanderen',f);
  } 
}