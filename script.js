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

// creates custom li and adds to ol
function createCustomElement(playerName) {
    const element = document.createElement('li');
    element.classList.add('p-4');
    element.innerText = playerName;
    selectedFivePlayerList.appendChild(element);
};

// disables select button after clicking on it
function disableSelectButton() {
    selectedPlayer.setAttribute('disabled', 'true');
    selectedPlayer.innerText = 'Selected';
};

// calculates selected player cost
function calculatePlayerTotalCost() {
    // gets per player cost value from input box
    const perPlayerCostString = perPlayerCostBox.value;
    
    // converts per player value to number
    const perPlayerCostNumber = parseFloat(perPlayerCostString);

    return selectedPlayerCounter * perPlayerCostNumber;    
};

// calculates total cost(player+manager+coach)
function calculateTotalCost(playerCost, managerCost, coachCost) {
    return playerCost + managerCost + coachCost;
};

// changes inner text of player cost
function updateTotalPlayerExpensesField() {
    const totalPlayerExpenses =  calculatePlayerTotalCost();
    
    if(selectedPlayerCounter === 0) {
        alert('You didn\'t select any player. Please select any.');
    }

    if(typeof totalPlayerExpenses === 'number' && isNaN(totalPlayerExpenses) === false) {
        totalPlayerExpensesField.innerText = totalPlayerExpenses;
    }
    else {
        alert(alertMessage);
    }
};

// changes inner text of total cost
function updateTotalExpensesField() {

    // gets player costs from player expenses field
    const totalPlayerExpensesString = totalPlayerExpensesField.innerText;
    const totalPlayerExpensesNumber = parseFloat(totalPlayerExpensesString);
    const totalPlayerExpenses = totalPlayerExpensesNumber;

    // gets manager costs from manager cost field
    const managerCostString = managerCostBox.value;
    const managerCostNumber = parseFloat(managerCostString);

    // gets coach costs from coach cost field
    const coachCostString = coachCostBox.value;
    const coachCostNumber = parseFloat(coachCostString);

    // calcute total expenses
    const totalExpenses = calculateTotalCost(totalPlayerExpenses, managerCostNumber, coachCostNumber);
    
    // shows total expenses if the output value is number type
    if(typeof totalExpenses === 'number' && isNaN(totalExpenses) === false) {
        totalExpensesField.innerText = totalExpenses;
    }
    else {
        alert(alertMessage);
    }

};

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
            disableSelectButton();
        }
        else {
            
            // shows alert when five players are selected
            alert('All five slots are full. Can not add another.');
        }
    })
};

// button to calculate player cost
playerTotalCostButton.addEventListener('click', function() {
    updateTotalPlayerExpensesField();
});

// button to calculate total cost
calculateTotalButton.addEventListener('click', function() {
    if(selectedPlayerCounter !== 0) {
        updateTotalExpensesField();
    }
});