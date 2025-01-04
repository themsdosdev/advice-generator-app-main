/** @format */

const diceBtn = document.querySelector("#dicebtn");
const advice = document.querySelector("#advice-text");

diceBtn.addEventListener("click", async () => {
  try {
    const id = Math.floor(Math.random() * 200 + 1);
    console.log(id);

    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const data = await response.json();
    const adviceMsg = data.slip.advice;
    advice.innerText = adviceMsg;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
});