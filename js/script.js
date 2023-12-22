$(function () {
  //대상을 변수에 저장
  const $window = $(window);
  const $loading = $(".loading");

  //로딩이 완료되면 (Load)
  $window.on("load", function () {
    //너무 빨리 사라지므로 조금 이따가 사라지게끔(로딩 페이지 길게)
    //setTimeout(동작, 시간)
    setTimeout(function () {
      $loading.fadeOut();
    }, 1000);
  });
});
