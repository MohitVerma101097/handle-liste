let items = [];

const input = document.querySelector("#itemInput");
const button = document.querySelector("#addItem");
const itemList = document.querySelector("#itemList");

button.addEventListener("click", addItem);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

function addItem() {
    let itemName = input.value.trim().toLowerCase();
    if (itemName) {
        let existingItem = items.find((item) => item.name === itemName);
        if (existingItem) {
            existingItem.count++;
        } else {
            items.push({ name: itemName, count: 1 });
        }
        updateList();
    }
    input.value = "";
    input.focus();
}

function updateList() {
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = 'Slett'
    
        li.textContent = `${item.name} (${item.count})`;
        itemList.append(li, deleteBtn);
        deleteBtn.addEventListener("click", ()=>{
            slett(index, li)
        })
    });
}

const slett = (index, li) =>{
    items[index].count--;
    if(items[index].count === 0){
        items.splice(index,1)
        li.remove()
    }
    updateList();
}
