"use strict";

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

class GoodsItem {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="product-item">
					<div class="product-image">
						<img src="${this.img}" alt="${this.title}">
					</div>
	  				<h3 class="product-title">${this.title}</h3>
	  				<p class="product-price">${this.price}</p>
	  				<button class="buy-btn">Купить</button>
	  </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { id: 1, title: "Notebook", price: 2000, img: "/image/notebook.webp" },
      { id: 2, title: "Mouse", price: 20, img: "/image/mouse.webp" },
      { id: 3, title: "Keyboard", price: 200, img: "/image/keyboard.webp" },
      { id: 4, title: "Gamepad", price: 50, img: "/image/gamepad.webp" },
    ];
  }

  getSumGoods() {
    let endedSum = 0;
    this.goods.forEach((good) => {
      console.log(good.price);
      return (endedSum += good.price);
    });
    console.log(endedSum);
    return (document.querySelector(".good-sum").innerHTML = `<span>${endedSum}</span>`);
  }

  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(good.title, good.price, good.img);
      listHtml += goodItem.render();
    });
    document.querySelector(".good-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getSumGoods();

// Классы для создания корзины и элемента козины
