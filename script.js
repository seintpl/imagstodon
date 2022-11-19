function findprof(instance,nick) {
    document.getElementById("profiles").innerHTML += '<div class="col-md-3 text-center pb-3 border" style="min-height:300px"><div style="font-weight:bold">'+instance+'</div><div id="'+instance+'"><br /><br /><br />Profile not found here.';
    var urljson = 'https://'.concat(instance,'/@',nick,'.json');
    fetch(urljson)
      .then((response) => {
         return response.json()
      })
      .then((data) => {
         try {
            if (data["id"]) {
                document.getElementById(instance).innerHTML = '<a href="'+data["id"]+'" target="_blank">Go to profile<br /></a>';
            }  
         }
         catch {
         }
         try {
            if (data["type"]) {
                document.getElementById(instance).innerHTML += 'Account-type: '+data["type"];
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
            document.getElementById(instance).innerHTML += '<a href="'+data["id"]+'" target="_blank"><img src="'+data["icon"]["url"]+'" width="75%" /></a>';
         }
         catch {
         } 
         document.getElementById(instance).innerHTML += '</div></div>';
      })
}

function imag() {
  f = document.getElementById("nickname").value;
  document.getElementById("profiles").innerHTML = '';
  if (f=='') {document.getElementById("profiles").innerHTML = '<div style="padding-top: 10px; font-weight:bold;">Enter nickname above.</div>';}
  else {
    fetch('instances.json')
    .then((res) => {
       return res.json()
    })
    .then((urldata) => {
      urldata.instances.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            findprof(`${value}`,f);
        });
      });
    })
  } 
}