import { gameSettings, startGame } from "./main.js";
const popupBackground = document.querySelector("#popup-background");
const popup = document.querySelector("#popup");
const popupDefaultContainer = document.querySelector(".popup-default-container");
const popupSettingsContainer = document.querySelector(".popup-settings-container");
const playBtn = popupDefaultContainer.querySelector("#popup-play-btn");
const settingsBtn = popupDefaultContainer.querySelector("#popup-settings-btn");
const saveBtn = popupSettingsContainer.querySelector("#popup-save-btn");
const boardSizeElement = popupSettingsContainer.querySelector("#board-size-select");
const gameSpeedElement = popupSettingsContainer.querySelector("#game-speed-select");
const snakeColorElement = popupSettingsContainer.querySelector("#snake-color");
playBtn.addEventListener("click", function () {
    closePopup();
    startGame();
});
settingsBtn.addEventListener("click", openSettings);
saveBtn.addEventListener("click", processSaveSettings);
function processSaveSettings() {
    gameSettings.boardSize = parseInt(boardSizeElement.value);
    gameSettings.gameSpeed = parseInt(gameSpeedElement.value);
    gameSettings.snakeColor = snakeColorElement.value;
    console.log(gameSettings);
    closeSettings();
}
function openSettings() {
    popupDefaultContainer.style.display = "none";
    popupSettingsContainer.style.display = "flex";
}
function closeSettings() {
    popupDefaultContainer.style.display = "flex";
    popupSettingsContainer.style.display = "none";
}
const openPopup = () => {
    popupBackground.style.opacity = "1";
};
const closePopup = () => {
    popupBackground.style.opacity = "0";
};
