//document.getElementById("count-el").innerText=5
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment() {
    count+=1
    countEl.innerText=count
    
}

function save() {
    saveEl.textContent+=count+" - "
    count=0
    countEl.textContent=0
}