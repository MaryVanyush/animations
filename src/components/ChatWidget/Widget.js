import "./style.css";

export default class Widget {
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
