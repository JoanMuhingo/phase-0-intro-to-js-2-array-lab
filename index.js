// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(){
    cats.push("Ralph");
};
function destructivelyPrependCat(){
cats.unshift("Bob");
};
function destructivelyRemoveLastCat(){
    cats.pop();
};
function  destructivelyRemoveFirstCat(){
    cats.shift();
};
function appendCat(name="Broom"){    
let appendCat = [...cats, name];
return appendCat;
};
 function  prependCat(name="Arnold"){
 let  prependCat= [name,...cats];
 return prependCat;
 };
  function removeLastCat(){
  let removeLastCat = cats.slice(0, cats.length -1);
  return removeLastCat;
};

function removeFirstCat(){
  let removeFirstCat=cats.slice(1);
  return removeFirstCat;
};
 console.log(cats);