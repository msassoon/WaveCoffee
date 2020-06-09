var queryString = window.location.search;
console.log(queryString);

var urlParams = new URLSearchParams(queryString);

var vorgid = urlParams.get('orgid')
console.log(vorgid);

var vdepid = urlParams.get('depid')
console.log(vdepid);

var vregion = urlParams.get('region')
console.log(vregion);

if (vregion == 'euw1')
{var vurl = 'ie';
 console.log(vurl);}
else if (vregion == 'use1' || vregion == 'use2' || vregion == 'usw1' || vregion == 'usw2')
{var vurl = 'com';
 console.log(vurl);}

  (function(a,t,c,l,o,u,d){a['_genesysJourneySdk']=o;a[o]=a[o]||function(){
  (a[o].q=a[o].q||[]).push(arguments)},a[o].l=1*new Date();u=t.createElement(c),
  d=t.getElementsByTagName(c)[0];u.async=1;u.src=l;u.charset='utf-8';d.parentNode.insertBefore(u,d)
  })(window, document, 'script', 'https://apps.mypurecloud.' + vurl + '/journey/sdk/js/web/v1/ac.js', 'ac');
  ac('init', vorgid, { region: vregion });
  ac('load', 'autotrackUrlChange');
