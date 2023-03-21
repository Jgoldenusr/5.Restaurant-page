import pan_01 from "../img/01.png";
import pan_02 from "../img/02.png";
import pan_03 from "../img/03.png";
import pan_04 from "../img/04.png";
import pan_05 from "../img/05.png";
import pan_06 from "../img/06.png";
import pan_07 from "../img/07.png";
import pan_08 from "../img/08.png";

let imgArray = [pan_01, pan_02, pan_03, pan_04, pan_05, pan_06, pan_07, pan_08];

let textArray = [
  "Pan redondo: 0.25bs",
  "Pan campesino: 3.00bs",
  "Pan canilla: 0.45bs",
  "Pan de hamburguesa: 0.30bs",
  "Cachito: 1.00bs",
  "Pan de guayaba: 1.00bs",
  "Dona: 0.50bs",
  "Galleta: 0.25bs",
  "Rosquita: 0.30bs",
];

export default function menuModule() {
  const cellContainer = document.createElement("div");
  cellContainer.classList.add("cell_container");

  for (let i = 0; i < imgArray.length; i++) {
    const cell = document.createElement("div");
    const cellImgWrapper = document.createElement("div");
    const cellTextWrapper = document.createElement("div");
    const cellText = document.createElement("p");
    const cellImg = document.createElement("img");

    cell.classList.add("cell");
    cellImgWrapper.classList.add("cellImgDiv");
    cellTextWrapper.classList.add("cellTextDiv");
    cellImg.classList.add("cellImg");
    cellText.classList.add("cellText");

    cellImg.src = imgArray[i];
    cellText.textContent = textArray[i];

    cell.append(cellImgWrapper);
    cell.append(cellTextWrapper);
    cellImgWrapper.append(cellImg);
    cellTextWrapper.append(cellText);
    cellContainer.append(cell);
  }

  return cellContainer;
}
