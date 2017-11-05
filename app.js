document.addEventListener('DOMContentLoaded', function () {
  var cardTemplate = document.querySelector('#card-template');
  var cardList = document.querySelector('#card-list');
  for (var i = 1; i <= 10; i++) {
    var card = document.importNode(cardTemplate, true).content;

    var no = card.querySelector('.no');
    no.textContent = i;

    var title = card.querySelector('.title');
    title.textContent = 'カードタイトル';

    cardList.appendChild(card);
  }
});