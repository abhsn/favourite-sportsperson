const buttons = document.getElementsByClassName('player-button');
const selectedFivePlayerList = document.getElementById('selected-five-list');
const perPlayerCostBox = document.getElementById('per-player-cost');
const playerTotalCostButton = document.getElementById('player-total-cost-button');
const totalPlayerExpensesField = document.getElementById('total-player-expense');
const managerCostBox = document.getElementById('manager-cost');
const coachCostBox = document.getElementById('coach-cost');
const calculateTotalButton = document.getElementById('calculate-total');
const totalExpensesField = document.getElementById('total-expense');
const alertMessage = 'Please provide a valid input.'
let selectedPlayerCounter = 0;

function createCustomElement(playerName) {
    const element = document.createElement('li');
    element.classList.add('p-4');
    element.innerText = playerName;
    selectedFivePlayerList.appendChild(element);
}

function calculatePlayerTotalCost() {
    // gets per player cost value from input box
    const perPlayerCostString = perPlayerCostBox.value;
    
    // converts per player value to number
    const perPlayerCostNumber = parseFloat(perPlayerCostString);

    return selectedPlayerCounter * perPlayerCostNumber;    
};

function calculateTotalCost(playerCost, managerCost, coachCost) {
    return playerCost + managerCost + coachCost;
}

function updateTotalPlayerExpensesField() {
    const totalPlayerExpenses =  calculatePlayerTotalCost();
    
    if(selectedPlayerCounter === 0) {
        alert('You didn\'t select any player.');
    }

    if(typeof totalPlayerExpenses === 'number' && isNaN(totalPlayerExpenses) === false) {
        totalPlayerExpensesField.innerText = totalPlayerExpenses;
    }
    else {
        alert(alertMessage);
    }
}

function updateTotalExpensesFiels() {
    
    const totalPlayerExpenses = calculatePlayerTotalCost();

    const managerCostString = managerCostBox.value;
    const managerCostNumber = parseFloat(managerCostString);

    const coachCostString = coachCostBox.value;
    const coachCostNumber = parseFloat(coachCostString);

    
    const totalExpenses = calculateTotalCost(totalPlayerExpenses, managerCostNumber, coachCostNumber);
    
    if(typeof totalExpenses === 'number' && isNaN(totalExpenses) === false) {
        totalExpensesField.innerText = totalExpenses;
    }
    else {
        alert(alertMessage);
    }

}

// adds eventlistener to every player button
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

playerTotalCostButton.addEventListener('click', function() {
    updateTotalPlayerExpensesField();
});

calculateTotalButton.addEventListener('click', function() {
    updateTotalPlayerExpensesField();
    if(selectedPlayerCounter !== 0) {
        updateTotalExpensesFiels();
    }
});