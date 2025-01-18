import { gameSettings, startGame } from "./main.js";

const popupBackground: HTMLElement = document.querySelector("#popup-background");
const popupTitle: HTMLElement = document.querySelector(".popup-title");

const popupDefaultContainer: HTMLElement = document.querySelector(".popup-default-container"); 
const popupSettingsContainer: HTMLElement = document.querySelector(".popup-settings-container"); 

const playBtn: HTMLButtonElement = popupDefaultContainer.querySelector("#popup-play-btn");
const settingsBtn: HTMLButtonElement = popupDefaultContainer.querySelector("#popup-settings-btn");
const saveBtn: HTMLButtonElement = popupSettingsContainer.querySelector("#popup-save-btn");

const boardSizeElement: HTMLSelectElement = popupSettingsContainer.querySelector("#board-size-select");
const gameSpeedElement: HTMLSelectElement = popupSettingsContainer.querySelector("#game-speed-select");
const snakeColorElement: HTMLInputElement = popupSettingsContainer.querySelector("#snake-color");

playBtn.addEventListener("click", function()
{
    closePopup();
    startGame();
});

settingsBtn.addEventListener("click", openSettings);
saveBtn.addEventListener("click", processSaveSettings);

function processSaveSettings()
{
    gameSettings.boardSize = parseInt(boardSizeElement.value);
    gameSettings.gameSpeed = parseInt(gameSpeedElement.value);
    gameSettings.snakeColor = snakeColorElement.value;

    console.log(gameSettings)

    closeSettings();
}

function openSettings()
{
    popupDefaultContainer.style.display = "none";
    popupSettingsContainer.style.display = "flex"
}

function closeSettings()
{
    popupDefaultContainer.style.display = "flex";
    popupSettingsContainer.style.display = "none"
}

export const openPopup = (text: string) =>
{
    popupBackground.style.opacity = "1";
    popupTitle.textContent = text;
}

const closePopup = () =>
{
    popupBackground.style.opacity = "0";
}
