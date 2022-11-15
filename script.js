function findprof(instance,nick) {
    document.getElementById("profiles").innerHTML += '<div class="col-md-3 text-center pb-3 border"><div style="font-weight:bold">'+instance+'</div><div id="'+instance+'"><br /><br /><br />Profile not found here.';
    var urljson = 'https://'.concat(instance,'/@',nick,'.json');
    var http = new XMLHttpRequest();
        http.open('HEAD', urljson, false);
        http.send();
        if (http.status != 404) {
          fetch(urljson)
            .then((response) => {
               return response.json()
            })
            .then((data) => {
               document.getElementById(instance).innerHTML = 'Account-type: '+data["type"]+'<br />Published: '+data["published"].slice(0,10)+'<br />'+data["summary"]+'<a href="'+data["id"]+'"><img src="'+data["icon"]["url"]+'" width="75%" /></a></div></div>';
            })
        }
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
    findprof('mastodon.brussels',f);
    findprof('mastodon.fun',f);
    findprof('mastodon.xyz',f);
    findprof('mastodon.brussels',f);
    findprof('mastodon.host',f);
    findprof('mastodon.irish',f);
    findprof('mastodon.cloud',f);
    findprof('mastodon.cc',f);
    findprof('kolektiva.social',f);
    findprof('mastodon.vlaanderen',f);
  } 
}
