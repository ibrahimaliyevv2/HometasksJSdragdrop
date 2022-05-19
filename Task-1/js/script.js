let leftList = document.getElementById('list1');
let rightList = document.getElementById('list2');

let leftListItems = document.querySelectorAll('#list1 li');
let rightListItems = document.querySelectorAll('#list2 li');

let box = document.getElementById("box");

//from left-list dragstart
leftListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

//to right-list dragover
rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})

//to right-list drop
rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    e.target.appendChild(li);
})

//from right-list dragstart
rightListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

//to left-list dragover
leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})

//to left-list drop
leftList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    e.target.appendChild(li);
})

//box dragover
box.addEventListener('dragover', function(e){
    e.preventDefault();
})

//box drop
box.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    let newText = document.createElement('p'); 
    li.remove();
    newText.classList.add("text-new");
    newText.textContent = li.textContent;
    e.target.appendChild(newText);  
})