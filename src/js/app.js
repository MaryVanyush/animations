import Widget from "../components/ChatWidget/Widget";
import Liker from "../components/Liker/Liker";

const btn = document.querySelector(".btn-collapse");
const text = document.querySelector(".collapse-text");
const btnCopy = document.querySelector(".btn-collapse-copy");

btn.addEventListener("click", () => {
  text.classList.toggle("collapse-text-show");
});

btnCopy.addEventListener("click", () => {
  const textToCopy = text.textContent;
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
