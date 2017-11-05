var APP = APP || {};
APP.Card = function (todoData) {
  this.todoData = todoData;
  this.card = document.importNode(document.querySelector('#card-template'), true).content;
  this.card.querySelector('.no').textContent = this.todoData.no;
  this.card.querySelector('.title').textContent = this.todoData.title;
};
APP.Card.prototype = {
  getHtml: function () {
    return this.card;
  }
};