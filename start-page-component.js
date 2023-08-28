import { goToPage, setDifficulty, } from "./index.js";
import { GAME_PAGE } from "./routes.js";


export function renderStartPageComponent ({ appEl }) {
    appEl.innerHTML = `
    <div class="center">
        <div class=" selection-form">
            <h1 class="selection-form__header">Выбери  <br> сложность</h1> 
            <div class="selection-form__card-container">
                <input type="radio" id="radio1" name="radios" value="easy" checked>
                <label for="radio1">1</label>
        
                <input type="radio" id="radio2" name="radios" value="normal">
                <label for="radio2">2</label>
        
                <input type="radio" id="radio3" name="radios" value="hard">
                <label for="radio3">3</label>
            </div>
            <button class="selection-form__start-button">Старт</button>
        </div>
    </div>`

    // выбор уровня сложности
     const getSelectedDifficulty = () => {
        const radioButtons = document.querySelectorAll(
            ".selection-form__card-container input[type='radio']",
        );
        let selectedDifficulty = 'easy';
        radioButtons.forEach((radio) => {
            if (radio.checked) {
                selectedDifficulty = radio.value;
            }
        });

        return selectedDifficulty;
    };


    const selectionFormStartButton = document.querySelector('.selection-form__start-button');

    selectionFormStartButton.addEventListener('click', (event) => {
        setDifficulty(getSelectedDifficulty());
        goToPage(GAME_PAGE);
        event.stopPropagation();
    });
}
