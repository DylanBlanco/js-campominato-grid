const cells = parseInt(prompt(`inserisci numero:`));
console.log(`cells`, cells, typeof cells);

const cellsContainer = document.querySelector(`.cells-container`);
for (let i = 0; i < cells; i++) {
    const newCell = document.createElement(`div`);
    newCell.innerHTML = (i + 1);

    newCell.addEventListener(`click`, function () {
        //if (!newCell.classList.contains(`dylan`)) {
        //    console.log(newCell.innerText);
        //}
        
        newCell.classList.toggle(`dylan`);
        console.log(newCell.textContent);
    }
    );
    cellsContainer.append(newCell);
}