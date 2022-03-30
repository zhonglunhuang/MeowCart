function updateList(itemList) {
    //用於更新購物車金額
    let tb = document.querySelector('tbody');
    let td = document.querySelectorAll('tbody > tr > td:first-child');
    itemList.forEach((e) => {
        //從商品資料陣列比對網頁的相同品項，並修正金額
        td.forEach((x) => {
            if (x.textContent == e.title) {
                x.parentElement.querySelector('td > input').value = e.quantity;
                x.parentElement.children[3].textContent = `$${e.quantity * e.price}`;
            }
        });
    });
    let nowList = []; //14~20行，為了找出網頁現有的品項，並比對出資料庫有，網頁沒有的品項
    td.forEach((e) => {
        nowList.push(e.textContent);
    });
    // console.log(nowList);
    let newItem = itemList.filter((e) => {
        return nowList.indexOf(e.title) === -1;
    });
    newItem.forEach((e) => {
        let tr = `<tr><td>${e.title}</td><td><input type="number" value="${e.quantity}" /></td><td>$${
            e.price
        }</td><td>$${
            e.quantity * e.price
        }</td><td><button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td></tr>`;
        tb.insertAdjacentHTML('afterbegin', tr);
        console.log('新增成功');
    });
    // newItem = [];

    // 刷新總計
    let total = document.querySelectorAll('tbody > tr > td:nth-child(4)');
    let totalCount = 0;
    total.forEach((e) => {
        totalCount = totalCount + Number(e.textContent.replace('$', ''));
    });
    document.querySelector('tfoot > tr > td:nth-child(3)').textContent = `$${totalCount.toFixed(2)}`;

    //變更數量
}

function changeItem(itemList, target) {
    if (target.nodeName == 'INPUT') {
        const changeItem = target.closest('tr');
        itemList.forEach((e) => {
            if (e.title == changeItem.firstChild.textContent && changeItem.querySelector('input').value > 0) {
                e.quantity = changeItem.querySelector('input').value;
            }
        });
    }
}

export { updateList, changeItem };
