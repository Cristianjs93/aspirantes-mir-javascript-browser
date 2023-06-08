const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "about",
    items: [],
  },
  {
    name: "Products",
    link: "products",
    items: [
      {
        name: "Product 1",
        link: "products1",
        items: [],
      },
      {
        name: "Product 2",
        link: "products2",
        items: [
          {
            name: "Product 2.1",
            link: "products21",
            items: [
              {
                name: "Product 2.1.1",
                link: "products211",
                items: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "services",
    items: [
      {
        name: "Service 1",
        link: "services1",
        items: [
          {
            name: "Service 1.1",
            link: "services11",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "services2",
        items: [
          {
            name: "Service 2.1",
            link: "services21",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "services22",
            items: [],
          },
        ],
      },
    ],
  },
];

const main = document.querySelector("main");

function createMenu(menu, asignElement) {
  const mainUl = document.createElement("ul");
  menu.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.classList.value = `${item.link}`;
    mainUl.appendChild(li);

    if (item.items) {
      if (item.items.length > 0) {
        const button = document.createElement("button");
        button.classList.toggle("button");
        button.textContent = "+";
        button.name = "button";
        button.classList.value = `${item.link}b`;
        li.appendChild(button);
      }
      createMenu(item.items, li);
    }
    asignElement.appendChild(mainUl);
  });
}

createMenu(menu, main);

// Mostrar menu products
const products = document.querySelector(".products");

const productsb = document.querySelector(".productsb");
const products1 = document.querySelector(".products1");
const products2 = document.querySelector(".products2");
products1.classList.toggle("subMenu");
products2.classList.toggle("subMenu");
productsb.addEventListener("click", showSubMenu1);

function showSubMenu1() {
  products1.classList.toggle("show");
  products2.classList.toggle("show");
  let div = document.createElement("div");
  div.classList.value = "divProducts";
  div.appendChild(products1);
  div.appendChild(products2);
  products.appendChild(div);
  products.classList.toggle("active");
  div.classList.toggle("inactive");
}

//Mostrar menu products 2.1
const products2b = document.querySelector(".products2b");
const products21 = document.querySelector(".products21");
products21.classList.toggle("subMenu");
products2b.addEventListener("click", showSubMenu21);

function showSubMenu21() {
  products21.classList.toggle("show");
  let div = document.createElement("div");
  div.classList.value = "divProducts2";
  div.appendChild(products21);
  products2.appendChild(div);
  products2.classList.toggle("active");
  div.classList.toggle("inactive");
}

// Mostrar menu products 2.1.1
const products21b = document.querySelector(".products21b");
const products211 = document.querySelector(".products211");
products211.classList.toggle("subMenu");
products21b.addEventListener("click", showSubMenu211);

function showSubMenu211() {
  products211.classList.toggle("show");
  let div = document.createElement("div");
  div.classList.value = "divProducts21";
  div.appendChild(products211);
  products21.appendChild(div);
  products21.classList.toggle("active");
  div.classList.toggle("inactive");
}

// Mostrar menu services
const services = document.querySelector(".services");

const servicesb = document.querySelector(".servicesb");
const services1 = document.querySelector(".services1");
const services2 = document.querySelector(".services2");
services1.classList.toggle("subMenu");
services2.classList.toggle("subMenu");
servicesb.addEventListener("click", showSubMenu2);

function showSubMenu2() {
  services1.classList.toggle("show");
  services2.classList.toggle("show");
  let div = document.createElement("div");
  div.classList.value = "divServices";
  div.appendChild(services1);
  div.appendChild(services2);
  services.appendChild(div);
  services.classList.toggle("active");
  div.classList.toggle("inactive");
}

// mostrar menu services 1.1
const services1b = document.querySelector(".services1b");
const services11 = document.querySelector(".services11");
services11.classList.toggle("subMenu");
services1b.addEventListener("click", showSubMenu11);

function showSubMenu11() {
  services11.classList.toggle("show");
  let div = document.createElement("div");
  div.classList.value = "divServices1";
  div.appendChild(services11);
  services1.appendChild(div);
  services1.classList.toggle("active");
  div.classList.toggle("inactive");
}

// mostrar menu services 2.1 y 2.2
const services2b = document.querySelector(".services2b");
const services21 = document.querySelector(".services21");
const services22 = document.querySelector(".services22");
services21.classList.toggle("subMenu");
services22.classList.toggle("subMenu");
services2b.addEventListener("click", showSubMenu2122);

function showSubMenu2122() {
  services21.classList.toggle("show");
  services22.classList.toggle("show");
  let div = document.createElement("div");
  div.classList.value = "divServices2";
  div.appendChild(services21);
  div.appendChild(services22);
  services2.appendChild(div);
  services2.classList.toggle("active");
  div.classList.toggle("inactive");
}
