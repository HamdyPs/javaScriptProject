const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const content = document.querySelector(".content");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createCard = (name) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const button = document.createElement("button");
  button.innerText = "delete";
  button.classList.add("del");

  button.addEventListener("click", () => {
    card.remove();
  });

  const top = document.createElement("div");
  top.classList.add("top");
  top.style.backgroundColor = `#${getRandomColor()}`;

  const h2 = document.createElement("h2");
  h2.textContent = "Hello";
  const p = document.createElement("p");
  p.textContent = "my name is";

  top.appendChild(h2);
  top.appendChild(p);

  const center = document.createElement("div");
  center.classList.add("center");

  const elh1 = document.createElement("h1");
  elh1.textContent = name;

  card.appendChild(button);
  card.appendChild(top);
  card.appendChild(center);
  center.appendChild(elh1);

  content.appendChild(card);
};

btn.addEventListener("click", () => {
  if (inp.value !== "") {
    createCard(inp.value);
    inp.value = "";
  } else {
    alert("write a name");
  }
});

btn1.addEventListener("click", () => {
  content.innerHTML = "";
});
