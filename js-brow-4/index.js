const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "/about",
    items: [],
  },
  {
    name: "Products",
    link: "/products",
    items: [
      {
        name: "Product 1",
        link: "/products/1",
        items: [],
      },
      {
        name: "Product 2",
        link: "/products/2",
        items: [
          {
            name: "Product 2.1",
            link: "/products/2/1",
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    items: [
      {
        name: "Service 1",
        link: "/services/1",
        items: [
          {
            name: "Service 1.1",
            link: "/services/1/1",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "/services/2",
        items: [
          {
            name: "Service 2.1",
            link: "/services/2/1",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "/services/2/2",
            items: [],
          },
        ],
      },
    ],
  },
];

const ul = document.createElement("ul");

for (let i = 0; i < menu.length; i++) {
  const li = document.createElement("li");
  li.textContent = menu[i].name;

  if (menu[i].items.length > 0) {
    for (let j = 0; j < menu[i].items.length; j++) {
      const subUl = document.createElement("ul");
      const subLi = document.createElement("li");
      subLi.textContent = menu[i].items[j].name;

      if (menu[i].items[j].items.length > 0) {
        for (let K = 0; K < menu[i].items[j].items.length; K++) {
          const subSubUl = document.createElement("ul");
          const subSubLi = document.createElement("li");
          subSubLi.textContent = menu[i].items[j].items[K].name;
          subSubUl.appendChild(subSubLi);
          subLi.appendChild(subSubUl);
          subUl.appendChild(subLi);
          li.appendChild(subUl);
        }
      }
    }
  }

  ul.appendChild(li);
}

document.body.appendChild(ul);
