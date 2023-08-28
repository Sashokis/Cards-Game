import { GAME_PAGE, LOSS_PAGE, START_PAGE, WIN_PAGE } from "./routes.js";
import { renderGamePageComponent } from "./game-page-component.js";
import { renderStartPageComponent } from "./start-page-component.js";

export let page = null;

export let difficulty = '';

export const setDifficulty = (newDifficulty) => {
    difficulty = newDifficulty;
}

export const goToPage = (newPage) => {
  if ([START_PAGE, WIN_PAGE, LOSS_PAGE, GAME_PAGE].includes(newPage)){
    if (newPage === START_PAGE) {
        page = START_PAGE;
        return renderApp();
    }

    if (newPage === GAME_PAGE) {
        console.log(difficulty);
        page = GAME_PAGE;
        return renderApp();
    }

    if (newPage === WIN_PAGE) {
    }

    if (newPage === LOSS_PAGE) {
    }
  } 
  
  throw new Error("страницы не существует");
};

export const renderApp = () => {
  const appEl = document.getElementById("app");
  console.log(appEl);
  if (page === START_PAGE) {
    renderStartPageComponent({ appEl : appEl });
  }

  if (page === GAME_PAGE) {
       renderGamePageComponent({ appEl : appEl });
    }

    if (page === WIN_PAGE) {
    }

    if (page === LOSS_PAGE) {
    }
};

goToPage(START_PAGE);
