const wrapper = document.querySelector(".wrapper");
const map = document.querySelector(".map");
const root = document.querySelector(":root");
const width = 41;
root.style.setProperty("--point-width", `${width}px`);

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

map.onclick = function () {
  const pointsEl = document.querySelectorAll(".point");
  pointsEl.forEach(e => {
    if (e.classList.contains("active")) {
      e.classList.add("notActive");
      e.classList.remove("active");
      e.style.width = `${width}px`;
    }
    return;
  });
};

for (let i = 0; i < points.length; i++) {
  let top = points[i].coordinates.top;
  let left = points[i].coordinates.left;
  let color = points[i].color;
  map.innerHTML += `
  <div 
    class="point notActive" 
    onclick="pointBtn(${i})" 
    style="top:${top}%; left:${left}%; background-color:${color}"
  >
    <p>${points[i].name}</p>
  </div>`;
}

function pointBtn(i) {
  event.stopPropagation();
  const pointsEl = document.querySelectorAll(".point");
  if (pointsEl[i].classList.contains("notActive")) {
    pointsEl[i].classList.remove("notActive");
    pointsEl[i].classList.add("active");
    pointsEl[i].style.width = `calc(${points[i].name.length}rem / 2 + ${
      width + 16
    }px)`;
  } else {
    pointsEl[i].classList.add("notActive");
    pointsEl[i].classList.remove("active");
    pointsEl[i].style.width = `${width}px`;
  }
}
