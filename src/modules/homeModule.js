import info_01 from "../img/09.png";
import info_02 from "../img/10.png";
import info_03 from "../img/11.png";
import info_04 from "../img/12.png";
import info_05 from "../img/13.png";
import info_06 from "../img/14.png";

let infoArray = [info_01, info_02, info_03, info_04, info_05, info_06];

let infoTextArray = [
  "En Panaderia Danny's disponemos de punto de venta para múltiples bancos",
  "También aceptamos pago por su monedero patria a través de Biopago",
  "Le ofrecemos muchisimos precios solidarios y atención de calidad",
  "Delivery disponible a todas las zonas de Cumaná (excepto Brasil Sur)",
  "Disponemos de oportunidades para mayoristas y lavadores de dinero",
  'Encuéntrenos en Cantarra Sector 5, en frente de la canchita "Los Asnos"',
];

export default function homeModule() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("cell1_container");

  for (let i = 0; i < infoArray.length; i++) {
    const cell = document.createElement("div");
    const cellImgWrapper = document.createElement("div");
    const cellTextWrapper = document.createElement("div");
    const cellImg = document.createElement("img");
    const cellText = document.createElement("p");

    cell.classList.add("cell");
    cellImgWrapper.classList.add("cellImgDiv");
    cellImg.classList.add("cellImg");
    cellText.classList.add("cellText");

    cellImg.src = infoArray[i];
    cellText.textContent = infoTextArray[i];

    cell.append(cellImgWrapper);
    cell.append(cellTextWrapper);
    cellImgWrapper.append(cellImg);
    cellTextWrapper.append(cellText);
    homeContainer.append(cell);
  }

  return homeContainer;
}
