/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/ChatWidget/Widget.js

class Widget {
  constructor() {
    this.setEvent = this.setEvent.bind(this);
    this.closeWidget = this.closeWidget.bind(this);
  }
  showWidget() {
    if (this.chatWidget) {
      this.chatWidget.classList.remove("chat-close-anim");
      return;
    }
    const body = document.querySelector("body");
    const chatBox = document.createElement("div");
    chatBox.classList = "callback-chat-widget";
    const closeChat = document.createElement("button");
    closeChat.classList = "close-chat";
    const title = document.createElement("h3");
    title.classList = "chat-title";
    title.textContent = "Напишите нам";
    const textBox = document.createElement("textarea");
    textBox.classList = "message-text";
    textBox.name = "message";
    const button = document.createElement("button");
    button.classList = "message-btn";
    button.type = "submit";
    button.textContent = "Отправить";
    chatBox.appendChild(title);
    chatBox.appendChild(closeChat);
    chatBox.appendChild(textBox);
    chatBox.appendChild(button);
    body.appendChild(chatBox);
    this.chatWidget = chatBox;
    this.setEvent();
  }
  setEvent() {
    const closeChatBtn = this.chatWidget.querySelector(".close-chat");
    closeChatBtn.addEventListener("click", this.closeWidget);
  }
  closeWidget() {
    const btnCallbackChat = document.querySelector(".btn-callback-chat");
    btnCallbackChat.classList.remove("btn-callback-chat-anim");
    this.chatWidget.classList.add("chat-close-anim");
  }
}
;// CONCATENATED MODULE: ./src/components/Liker/Liker.js

class Liker {
  constructor(likerBox) {
    this.likerBox = likerBox;
    this.toAnimateHeart();
  }
  toAnimateHeart() {
    const randomTrajectory = this.getTrajectory();
    const heart = document.createElement("div");
    heart.classList = "heart";
    this.likerBox.appendChild(heart);
    heart.style.animationName = randomTrajectory;
    this.heart = heart;
    this.removeHeart();
  }
  getTrajectory() {
    const trajectory = {
      flyHeart1: "fly-heart1",
      flyHeart2: "fly-heart2",
      flyHeart3: "fly-heart3",
      flyHeart4: "fly-heart4"
    };
    const randomIndex = Math.floor(Math.random() * Object.keys(trajectory).length);
    return trajectory[Object.keys(trajectory)[randomIndex]];
  }
  removeHeart() {
    this.heart.addEventListener("animationend", () => {
      this.heart.remove();
    });
    this.likerBox = null;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const btn = document.querySelector(".btn-collapse");
const app_text = document.querySelector(".collapse-text");
const btnCopy = document.querySelector(".btn-collapse-copy");
btn.addEventListener("click", () => {
  app_text.classList.toggle("collapse-text-show");
});
btnCopy.addEventListener("click", () => {
  const textToCopy = app_text.textContent;
  navigator.clipboard.writeText(textToCopy);
});
const widget = new Widget();
const btnCallbackChat = document.querySelector(".btn-callback-chat");
btnCallbackChat.addEventListener("click", () => {
  btnCallbackChat.classList.add("btn-callback-chat-anim");
  widget.showWidget();
});
const btnLiker = document.querySelector(".btn-liker");
btnLiker.addEventListener("click", () => {
  const likerBox = document.querySelector(".liker-box");
  const liker = new Liker(likerBox);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map