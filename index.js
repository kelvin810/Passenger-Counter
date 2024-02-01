



let countEl = document.getElementById("count-el");
console.log(countEl.innerText)
 let saveEl = document.getElementById("save-el");
let count = 0;
 countEl.innerText = count;
function increment() {
  console.log("The button was clicked");
  count +=  1;
  countEl.innerText = count;
  
  console.log(`count: ${count}`);
} 

function save() {
  console.log(count)
  
  let savedEntry = count + " - "
  saveEl.textContent += savedEntry;
 count = 0;
 countEl.textContent = count;
}

 

