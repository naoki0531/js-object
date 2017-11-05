var APP = APP || {};
document.addEventListener('DOMContentLoaded', function () {
  var todoData = [
    {no: '1', title: '買物'},
    {no: '2', title: '勉強'},
    {no: '3', title: '申請'}
  ];

  var cardList = document.querySelector('#card-list');
  for (var i = 0; i <= 2; i++) {
    cardList.appendChild(new APP.Card(todoData[i]).getHtml());
  }
});