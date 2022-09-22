const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

for (const [key, value] of searchParameters.entries()) {
  console.log(key, value);
}

console.log(searchParameters.getAll("q"));
