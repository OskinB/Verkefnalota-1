// *** DROPDOWN ***
var changeBtn = document.querySelector(".change-btn-dropdown");

function changeDropdown(e) {
    document.getElementById("ingredient-options").classList.toggle("show");
}
changeBtn.innerHTML = `
    <div class="change-btn change-title d-flex flex-row justify-content-end align-items-center">
        <h3>Breyta skál</h3>
        <div id="change-icons-arrow" class="drop-left"></div>
    </div>

    <div id="ingredient-options" class="change-options dropdownText">
        <div class="option my-5">
            <div class="d-flex justify-content-center">
                <img src="img/seperator-small.png" alt="Seperator">
            </div>
            <h3>Kjöt & oumph</h3>
            <div class="d-flex justify-content-between align-items-center ml-4 mr-3 my-4">
                <span>Kjúklingur</span>
                <label class="checkbox-holder">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="option my-5">
            <div class="d-flex justify-content-center">
                <img src="img/seperator-small.png" alt="Seperator">
            </div>
            <h3>Grænmeti & ávextir</h3>
            <div class="d-flex justify-content-between align-items-center ml-4 mr-3 my-4">
                <span>Kirsuberjatómatar</span>
                <label class="checkbox-holder">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="option my-5">
            <div class="d-flex justify-content-center">
                <img src="img/seperator-small.png" alt="Seperator">
            </div>
            <h3>Fylling</h3>
            <div class="d-flex justify-content-between align-items-center ml-4 mr-3 my-4">
                <span>Hvít hrísgrjón</span>
                <label class="checkbox-holder">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="option mt-5">
            <div class="d-flex justify-content-center">
                <img src="img/seperator-small.png" alt="Seperator">
            </div>
            <h3>Sósur</h3>
            <div class="d-flex justify-content-between align-items-center ml-4 mr-3 my-4">
                <span>Goma sósa</span>
                <label class="checkbox-holder">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
    </div>
`

// So text in dropdown is also clickble
var dropdownChange = document.querySelector(".change-title");
dropdownChange.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    changeDropdown()
}

// **** TOGGLE BETWEEN ICONS IN DROPDOWN ****
function classArrowToggle() {
    this.classList.toggle('drop-left');
    this.classList.toggle('drop-down');
}
document.querySelector('#change-icons-arrow').addEventListener('click', classArrowToggle);

