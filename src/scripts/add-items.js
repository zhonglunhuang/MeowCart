class items {
    constructor(title, price, quantity = 1) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
}

let itemList = [];

function addItems(e) {
    let item = new items();
    if (e.target.nodeName === 'I') {
        let title = e.target.parentNode.parentNode.children[0].textContent;
        if (itemList.find((e) => e.title == title)) {
            itemList.find((e) => e.title == title).quantity++;
        } else {
            item.title = e.target.parentNode.parentNode.children[0].textContent;
            item.price = e.target.parentNode.parentNode.children[1].textContent.replace('$', '');
            itemList.push(item);
        }
    } else {
        let title = e.target.parentNode.children[0].textContent;
        if (itemList.find((e) => e.title == title)) {
            itemList.find((e) => e.title == title).quantity++;
        } else {
            item.title = e.target.parentNode.children[0].textContent;
            item.price = e.target.parentNode.children[1].textContent.replace('$', '');
            itemList.push(item);
        }
    }
    console.log(item);
    console.log(itemList);
    return itemList;
}

export default addItems;
