import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import additems from './add-items.js';
import { updateList, changeItem } from './updateList.js';
import { clearItem, clearAllItem } from './clearItem.js';
// 實作寫在這裡！

//宣告商品資料陣列來儲存購物車品項與數量 
let itemList = [];

//監聽加購小貓事件
document.querySelectorAll('.btn-warning').forEach((x) =>
    x.addEventListener('click', (e) => {
        itemList = additems(e);  //新增小貓加入購物車，並儲存資料
        updateList(itemList); //更新購物車小計與總計
    })
);

document.querySelector('tbody').addEventListener('click', (event) => {
    const target = event.target;
    clearItem(itemList, target);  //清除個別小貓品項資料
    changeItem(itemList, target); //更新個別小貓數量
    updateList(itemList); //更新購物車小計與總計

});

document.querySelector('.btn-success').addEventListener('click', () => {
    itemList = clearAllItem(itemList); //清除陣列資料與網頁資料
    updateList(itemList); //更新購物車小計與總計
});
