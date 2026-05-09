const joinBtn = document.querySelector(".secondary");

joinBtn.addEventListener("click", (e) => {

  e.preventDefault();

  const name = prompt("Введіть ваше ім’я");
  const email = prompt("Введіть ваш email");
  const password = prompt("Введіть пароль");

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem("marsUser", JSON.stringify(user));

  alert("Реєстрація успішна 🚀");
});

const exploreBtn = document.querySelector(".primary");

exploreBtn.addEventListener("click", (e) => {

  e.preventDefault();

  document.querySelector(".cards").scrollIntoView({
    behavior: "smooth"
  });

  const info = document.createElement("div");

  info.textContent = "🚀 Відкриваємо інфраструктуру марсіанської бази...";

  info.style.position = "fixed";
  info.style.top = "30px";
  info.style.right = "30px";

  info.style.background = "#C1440E";
  info.style.color = "white";

  info.style.padding = "15px 25px";
  info.style.borderRadius = "10px";

  info.style.fontSize = "16px";

  info.style.opacity = "0";
  info.style.transform = "translateY(-20px)";
  info.style.transition = "all 0.5s ease";

  document.body.appendChild(info);
  setTimeout(() => {
    info.style.opacity = "1";
    info.style.transform = "translateY(0)";
  }, 100);

  setTimeout(() => {

    info.style.opacity = "0";
    info.style.transform = "translateY(-20px)";

    setTimeout(() => {
      info.remove();
    }, 500);

  }, 3000);

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("click", () => {

    const oldMessage = document.querySelector(".thank-message");

    if (oldMessage) {
      oldMessage.remove();
    }

    const message = document.createElement("p");

    message.textContent = "Дякую, що натиснув мене! 🚀";

    message.classList.add("thank-message");

    message.style.opacity = "0";
    message.style.transform = "translateY(20px)";
    message.style.transition = "all 0.6s ease";
    message.style.marginTop = "30px";
    message.style.fontSize = "20px";
    message.style.color = "#F4A261";
    message.style.textAlign = "center";

    document.querySelector(".cards").appendChild(message);

    setTimeout(() => {
      message.style.opacity = "1";
      message.style.transform = "translateY(0)";
    }, 100);

  });

});
