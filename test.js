let item = {
    title : "胖胖",
    quantity: 1
}

let item2 = {
    title : "黑貓"
}

let list = []
list.push(item2)
list.push(item)
console.log(list);

console.log(item['title']);

console.log(list.find(e => e.title == "胖胖").quantity++);
console.log(list);



