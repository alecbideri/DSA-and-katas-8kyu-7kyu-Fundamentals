
// pure Javascript without filter methods 

function searchNames(logins){
  const match = [];

  for(const subArray of logins){
    if(subArray.length === 2 && subArray[0].includes('_')){
      match.push(subArray);
    }
  }

  return match;
}

const logins = [
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
  ["baz", "baz@baz.com"],
];


// using filter method 

function SearchNames(logins){
  return logins.filter(login=> login[0].endsWith('_'))
}

console.log(SearchNames(logins));