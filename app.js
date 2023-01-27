let form = document.querySelector("#my-form");
let amount = document.querySelector('#amount');
let discriptiton = document.querySelector('#discriptiton');
let category = document.querySelector('#category');
let count = 0;
form.addEventListener('submit',(e) => {
    e.preventDefault();
    count = count+1;
    expence ={
        amount : amount.value,
        discriptiton : discriptiton.value,
        category : category.value
    }
    document.querySelector("#my-form").reset();
    expenceSeralized = JSON.stringify(expence)
    localStorage.setItem(count+expence.amount+expence.discriptiton,expenceSeralized)
    addExpence(expence);
    console.log(count);
})

function addExpence(expence){
    let ul = document.getElementById("items");
    let li = document.createElement('li');
    li.className = "list-group-item border-info";
    li.appendChild(document.createTextNode(`Amount: ${expence.amount}, Discriptiton: ${expence.discriptiton}, Expence: ${expence.category}`));
    //Edit button
    var editB = document.createElement('input');
    editB.type = 'button'
    editB.value = 'Edit'
    editB.className = "form-control bg-info"
    editB.addEventListener('click',(e)=>{
        document.getElementById('amount').value = expence.amount;
        document.getElementById('discriptiton').value = expence.discriptiton;
        document.getElementById('category').value = expence.category;
        li.remove();
    })
    //delete button
    var deleteB = document.createElement('input');
    deleteB.type = 'button'
    deleteB.value = 'Delete'
    deleteB.className = "form-control bg-info"
    deleteB.addEventListener('click',(e) =>{
        localStorage.removeItem(expence.amount+expence.discriptiton);
        li.remove();
    })
    li.append(editB);
    li.append(deleteB);
    ul.append(li);
}
Object.keys(localStorage).forEach((key) => {
    stringifiedDetailsOfExpence = localStorage.getItem(key);
    detailsOfExpence = JSON.parse(stringifiedDetailsOfExpence);    
    addExpence(detailsOfExpence);
});
