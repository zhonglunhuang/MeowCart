// 宣告商品屬性
class items {
    constructor(title, price, quantity = 1) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
}

let itemList = [];

function addItems(e) {
    let item = new items();  // item繼承items屬性
    if (e.target.nodeName === 'I') {    //點擊到小貓ICON觸發  
        let title = e.target.parentNode.parentNode.children[0].textContent;
        if (itemList.find((e) => e.title == title)) {    //如果商品資料陣列裡有符合點擊的小貓名稱，就會去資料裡增加數量
            itemList.find((e) => e.title == title).quantity++;
        } else {
            item.title = e.target.parentNode.parentNode.children[0].textContent;   //否則就會新建一個小貓品項在資料陣列裡
            item.price = e.target.parentNode.parentNode.children[1].textContent.replace('$', '');
            itemList.push(item);
        }
    } else {    //點擊到小貓ICON以外的button觸發
        let title = e.target.parentNode.children[0].textContent;
        if (itemList.find((e) => e.title == title)) {  //如果商品資料陣列裡有符合點擊的小貓名稱，就會去資料裡增加數量
            itemList.find((e) => e.title == title).quantity++;
        } else {
            item.title = e.target.parentNode.children[0].textContent;      //否則就會新建一個小貓品項在資料陣列裡
            item.price = e.target.parentNode.children[1].textContent.replace('$', '');
            itemList.push(item);
        }
    }
    return itemList;    //回傳新增小貓品項的商品資料陣列
}

export default addItems;
