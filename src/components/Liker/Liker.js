import "./style.css";

export default class Liker {
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
      flyHeart4: "fly-heart4",
    };
    const randomIndex = Math.floor(
      Math.random() * Object.keys(trajectory).length,
    );
    return trajectory[Object.keys(trajectory)[randomIndex]];
  }

  removeHeart() {
    this.heart.addEventListener("animationend", () => {
      this.heart.remove();
    });
    this.likerBox = null;
  }
}
