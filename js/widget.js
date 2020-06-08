const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const orgid = urlParams.get('orgid')
console.log(orgid);

const depid = urlParams.get('depid')
console.log(depid);

const region = urlParams.get('region')
console.log(region);

