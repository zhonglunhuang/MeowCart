import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import  additems from "./add-items.js";
import  test from "./updateList.js";
// 實作寫在這裡！

// const btn = document.querySelector(".btn-warning")


document.querySelectorAll(".btn-warning").forEach((x) => x.addEventListener("click",(e) => {
    additems(e)
}))

document.addEventListener("click", test)