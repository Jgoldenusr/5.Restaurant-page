import contact_01 from "../img/15.png";
import contact_02 from "../img/16.png";
import contact_03 from "../img/17.png";
import contact_04 from "../img/18.png";

let contactArray = [contact_01, contact_02, contact_03, contact_04];

let contactTextArray = [
  'A través de Facebook en: "Delicateces Danny\'s y algo más"',
  "Encuéntrenos en Instagran por @DannysDelicatessen",
  "Encuéntrenos en Whatsapp por el número +584266666666",
  "Encuéntrenos en Telegram por el número +584299999999",
];

export default function contactModule() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("cell1_container");

  for (let i = 0; i < contactArray.length; i++) {
    const cell = document.createElement("div");
    const cellImgWrapper = document.createElement("div");
    const cellTextWrapper = document.createElement("div");
    const cellImg = document.createElement("img");
    const cellText = document.createElement("p");

    cell.classList.add("cell");
    cellImgWrapper.classList.add("cellImgDiv");
    cellImg.classList.add("cellImg");
    cellText.classList.add("cellText");

    cellImg.src = contactArray[i];
    cellText.textContent = contactTextArray[i];

    cell.append(cellImgWrapper);
    cell.append(cellTextWrapper);
    cellImgWrapper.append(cellImg);
    cellTextWrapper.append(cellText);
    contactContainer.append(cell);
  }

  return contactContainer;
}
