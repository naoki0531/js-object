var APP = APP || {};
APP.Card = function (todoData) {
  this.todoData = todoData;
  this.card = document.importNode(document.querySelector('#card-template'), true).content;
  this.init();
};
APP.Card.prototype = {
  init: function () {
    this.card.querySelector('.no').textContent = this.todoData.no;
    this.card.querySelector('.title').textContent = this.todoData.title;
  },
  getHtml: function () {
    return this.card;
  }
};