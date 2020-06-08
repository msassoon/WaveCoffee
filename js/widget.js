const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const vorgid = urlParams.get('orgid')
console.log(vorgid);

const vdepid = urlParams.get('depid')
console.log(vdepid);

const vregion = urlParams.get('region')
console.log(vregion);

