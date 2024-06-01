function pay() {
    let p = parseFloat(document.getElementById("price").value);
    let t = parseFloat(document.getElementById("total").value);
    let subT = p * t;

    let discount = 0;
    let tDiscount = 0;

    if (subT >= 250000) {
        discount = 25;
        tDiscount = subT * 0.25;
    } else if (subT >= 200000) {
        discount = 20;
        tDiscount = subT * 0.20;
    } else if (subT >= 150000) {
        discount = 15;
        tDiscount = subT * 0.15;
    } else if (subT >= 100000) {
        discount = 10;
        tDiscount = subT * 0.10;
    } else if (subT >= 50000) {
        discount = 5;
        tDiscount = subT * 0.05;
    }

    let tPay = subT - tDiscount;
    document.getElementById("sub").value = `Rp ${subT},-`;
    document.getElementById("nDiscount").value = `Rp ${tDiscount},-`;
    document.getElementById("discount").value = `${discount}%`;
    document.getElementById("pay").value = `Rp ${tPay},-`;
}

function payment() {
    let c = document.getElementById("code").value;
    let n = document.getElementById("name").value;
    let p = document.getElementById("price").value;
    let t = document.getElementById("total").value;

    let validation = [];

    if (c === "") {
        let text = document.getElementsByClassName("kode");
        text[0].style.color = "red";
        text = document.getElementsByClassName("textboxc");
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red";
        validation.push('Kode Barang Harus Diisi!\n');
    } else {
        let text = document.getElementsByClassName("textboxc");
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue";
        text = document.getElementsByClassName("kode");
        text[0].style.color = "black";
    }

    if (n === "") {
        let text = document.getElementsByClassName("nama");
        text[0].style.color = "red";
        text = document.getElementsByClassName("textboxn");
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red";
        validation.push('Nama Barang Harus Diisi!\n');
    } else {
        let text = document.getElementsByClassName("textboxn");
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue";
        text = document.getElementsByClassName("nama");
        text[0].style.color = "black";
    }

    if (p == 0 || p === "") {
        let text = document.getElementsByClassName("harga");
        text[0].style.color = "red";
        text = document.getElementsByClassName("textboxp");
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red";
        validation.push('Harga Tidak Boleh Nol!\n');
    } else {
        let text = document.getElementsByClassName("textboxp");
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue";
        text = document.getElementsByClassName("harga");
        text[0].style.color = "black";
    }

    if (t == 0 || t === "") {
        let text = document.getElementsByClassName("jumlah");
        text[0].style.color = "red";
        text = document.getElementsByClassName("textboxt");
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red";
        validation.push('Jumlah Tidak Boleh Nol!\n');
    } else {
        let text = document.getElementsByClassName("textboxt");
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue";
        text = document.getElementsByClassName("jumlah");
        text[0].style.color = "black";
    }

    if (validation.length == 0) {
        pay();
    } else {
        alert(validation.join(""));
    }
}
