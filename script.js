const container = document.querySelector(".container");
const qr = document.querySelector(".qr");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const qrImg = document.querySelector(".qrImg");

btn.addEventListener("click", () => {
    let url = input.value;
    if (!url) return;
    btn.innerText = "読み込み中";

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
    qrImg.addEventListener("load", () => {
        qrImg.addEventListener("load", () => {
            qr.classList.add("active");
            btn.innerText = "QR生成"
        })
    })
})