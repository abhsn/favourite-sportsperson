const buttons = document.getElementsByTagName('button');
const selectedFivePlayerList = document.getElementById('selected-five-list');
let selectedPlayerCounter = 0;

function createCustomElement(playerName) {
    const element = document.createElement('li');
    element.classList.add('p-4');
    element.innerText = playerName;
    selectedFivePlayerList.appendChild(element);
}

// adds eventlistener to every button
for(button of buttons) {
    button.addEventListener('click', function(event) {
        
        // each click on button
        selectedPlayer = event.target;

        // gets inner text of previous element of clicked button
        const selectedPlayerName = selectedPlayer.previousElementSibling.innerText;
        
        if(selectedPlayerCounter < 5) {

            // increases selected player(s) counter
            selectedPlayerCounter++;

            // calls the function to create a li element and adds it to ol
            createCustomElement(selectedPlayerName);

            // disable the button after clicking on it
            selectedPlayer.setAttribute('disabled', 'true');
            selectedPlayer.innerText = 'Selected';
        }
        else {
            
            // shows alert when five players are selected
            alert('All five slots are full. Can not add another.');
        }
    })
};