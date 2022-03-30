function clearItem(itemList, target) {
    const removeItem = target.closest('tr');
    const removeItemName = removeItem.firstChild.textContent;
    if (target.nodeName == 'I') {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].title == removeItemName) {
                itemList.splice(i, 1);
                removeItem.remove();
            }
        }
    } else if (target.nodeName == 'BUTTON') {
        for (let i = 0; i < itemList.length; i++) {
            if (itemList[i].title == removeItemName) {
                itemList.splice(i, 1);
                removeItem.remove();
            }
        }
    }
}

function clearAllItem(itemList) {
    while (document.querySelector('tbody').lastChild) {
        document.querySelector('tbody').lastChild.remove();
    }
    console.log(itemList);
    itemList.length = 0;
    console.log(itemList);
    return itemList;
}

export { clearItem, clearAllItem };
