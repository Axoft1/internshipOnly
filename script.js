const wrapper = document.querySelector(".wrapper");
const map = document.querySelector(".map");
const root = document.querySelector(":root");
const WIDTH = 41;
const HEIGHT = 41;
root.style.setProperty("--point-width", `${WIDTH}px`);
root.style.setProperty("--point-height", `${HEIGHT}px`);

const points = [
  {
    name: "Мост",
    coordinates: { top: 66, left: 24 },
    color: "#3877EE",
  },
  {
    name: "Суд",
    coordinates: { top: 28, left: 27 },
    color: "#3877EE",
  },
  {
    name: "Вокзал",
    coordinates: { top: 40, left: 40 },
    color: "#6ABF4B",
  },
  {
    name: "Дом",
    coordinates: { top: 18, left: 73 },
    color: "#3877EE",
  },
  {
    name: "Гостиница",
    coordinates: { top: 74, left: 57 },
    color: "#6ABF4B",
  },
  {
    name: "Банк",
    coordinates: { top: 38, left: 60 },
    color: "#6ABF4B",
  },
  {
    name: "Вход",
    coordinates: { top: 59, left: 57 },
    color: "#3877EE",
  },
  {
    name: "Перон",
    coordinates: { top: 44, left: 74 },
    color: "#3877EE",
  },
  {
    name: "Офис",
    coordinates: { top: 62, left: 68 },
    color: "#6ABF4B",
  },
  {
    name: "Штаб",
    coordinates: { top: 70, left: 86 },
    color: "#3877EE",
  },
];

map.onclick = function (e) {
  const pointsEl = document.querySelectorAll(".point");

  if (e.target.classList.contains("notActive")) {
    e.target.classList.remove("notActive");
    e.target.classList.add("active");
    e.target.style.width = `calc(${e.target.innerText.length}em / 2 + ${
      WIDTH + 16
    }px)`;
  } else if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    e.target.classList.add("notActive");
    e.target.style.width = `${WIDTH}px`;
  } else {
    pointsEl.forEach(e => {
      if (e.classList.contains("active")) {
        e.classList.add("notActive");
        e.classList.remove("active");
        e.style.width = `${WIDTH}px`;
      }
      return;
    });
  }
};

for (let i = 0; i < points.length; i++) {
  let top = points[i].coordinates.top;
  let left = points[i].coordinates.left;
  let color = points[i].color;
  map.innerHTML += `
  <div 
    class="point notActive" 
    style="top:${top}%; left:${left}%; background-color:${color}"
  >
    <p>${points[i].name}</p>
  </div>`;
}
