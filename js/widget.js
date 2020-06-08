const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const product = urlParams.get('orgid')
console.log(orgid);

const product = urlParams.get('depid')
console.log(depid);

const product = urlParams.get('region')
console.log(region);
