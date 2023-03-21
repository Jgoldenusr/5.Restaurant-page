import menuModule from "./menuModule";
import homeModule from "./homeModule";
import contactModule from "./contactModule";

export default function bodyModule() {
  function flushMainContainer() {
    let tempNodeList = mainContainer.querySelectorAll("*");
    tempNodeList.forEach((node) => {
      node.remove();
    });
  }

  const header = document.createElement("header");
  const selectionPanel = document.createElement("div");
  const homeButton = document.createElement("div");
  const menuButton = document.createElement("div");
  const contactButton = document.createElement("div");
  const mainContainer = document.createElement("div");

  selectionPanel.classList.add("selection_panel");
  homeButton.classList.add("button");
  menuButton.classList.add("button");
  contactButton.classList.add("button");
  mainContainer.classList.add("main_container");

  header.textContent = "Panadería Danny's";
  homeButton.textContent = "Inicio";
  menuButton.textContent = "Carta";
  contactButton.textContent = "Contacto";

  document.body.append(header);
  document.body.append(selectionPanel);
  document.body.append(mainContainer);
  selectionPanel.append(homeButton);
  selectionPanel.append(menuButton);
  selectionPanel.append(contactButton);

  homeButton.addEventListener("click", () => {
    flushMainContainer();
    mainContainer.append(homeModule());
  });
  menuButton.addEventListener("click", () => {
    flushMainContainer();
    mainContainer.append(menuModule());
  });
  contactButton.addEventListener("click", () => {
    flushMainContainer();
    mainContainer.append(contactModule());
  });

  homeButton.click();
}
