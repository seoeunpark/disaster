function flipCoin() {
    var x = parseInt(Math.random() * 2);
    coinsrc = (!x) ? "image/firemain.png" : "image/hotmain.png" ;
    document.coinform.coinbutton.value = '....재난을 선택 중입니다....';
    window.setTimeout("changeCoin();", 3000);
}
function changeCoin() {
    document['coin'].src = coinsrc;
    document.coinform.coinbutton.value = '선택된 재난입니다.';
}