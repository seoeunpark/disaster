var count = 0; matter = 0;

function whenfire() {
  answer = prompt("화재 발생 시 1.엘리베이터 2.계단")
  if (answer == 2) {
    alert("화재로부터 생존했어요!!");
    count++;
  }
  else {
    alert("화재시에는 계단을 이용해야해요");
    matter++;
  }
}

function whentyphoon() {
  answer = prompt("태풍 발생시 창문은 창틀에 단단하게 테이프 등으로 1.고정한다 2.고정하지 않는다.")
  if (answer == 1) {
    alert("태풍로부터 생존했어요!!");
    count++;
  }
  else {
    alert("태풍시에는 창문을 단단하게 고정해야해요.");
  }
  matter++;
}

function whenflood() {
  answer = prompt("홍수 발생 시 1.높은곳 2.낮은곳");
  if (answer == 1) {
    alert("홍수로부터 생존했어요!!");
    count++;
  }
  else {
    alert("홍수시에는 높은 곳으로 이동해야해요");
  }
  matter++;
}

function whenmeteor() {
  answer = prompt("소화기를 미리 1. 준비한다. 2.준비하지 않는다.")
  if (answer == 1) {
    alert("운석충돌로부터 생존했어요!!");
    count++;
  }
  else {
    alert("운석충돌시에는 소화기를 미리 준비해요");
  }
  matter++;
}
function whenfreezing() {
  answer = prompt(" 발생시 1.뛴다 2.조심히 걷는다")
  if (answer == 2) {
    alert("대설로부터 생존했어요!!");
    count++;
  }
  else {
    alert("대설시에는 천천히 조심히 걸어야 해요");
  }
  matter++;
}
function whenthunder() {
  answer = prompt("낙뢰 발생시 1.차에서 나간다. 2.차에 있는다.")
  if (answer == 2) {
    alert("낙뢰로부터 생존했어요!!");
    count++;
  }
  else {
    alert("낙뢰시에는 차에 있어야 해요");
  }
  matter++;
}
function whentsunami() {
  answer = prompt("해일 발생시 1.해안에서 멀리 떨어진다 2.해안 가까이 간다")
  if (answer == 1) {
    alert("해일로부터 생존했어요!!");
    count++;
  }
  else {
    alert("해일시에는 해안에서 멀리 떨어져야해요.");
  }
  matter++;
}

function whenvolcano() {
  answer = prompt("화산폭발  발생시 1.마스크를 끼지않는다. 2.낀다.")
  if (answer == 2) {
    alert("화산폭발으로부터 생존했어요!!");
    count++;
  }
  else {
    alert("화산폭발 시에는 마스크를 껴야해요.");
  }
  matter++;
}
function whenhot() {
  answer = prompt("폭염 발생시 1.물을 많이 마신다. 2.물을 마시지 않는다.")
  if (answer == 1) {
    alert("폭염으로부터 생존했어요!!");
    count++;
  }
  else {
    alert("폭염시에는 수분보충을 충분히 해야해요");
  }
  matter++;
}



function score() {
  if (count > 8) {
    alert("맞은 개수 : " + count + "개\n 재난 대처방법에 대해 완벽하게 아시고 계시군요!");
  }
  else if (count < 9 && count > 5) {
    alert("맞은 개수 : " + count + "개\n 조금 더 알아보면 재난으로부터 안전하실거에요");
  }
  else if (count < 6 && count > 4) {
    alert("맞은 개수 : " + count + "개\n 조금 위험해요. 재난으로부터 안전하지 않아요");
  }
  else if (count < 4 && count >= 0) {
    alert("맞은 개수 : " + count + "개\n 위험해요!! 재난으로부터 안전하지 않아요.")
  }
}
