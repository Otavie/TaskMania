// Mobile Menu Hide and Show
const hamburgerContainer = document.querySelector('.hamburger-container');
const hamburgerLines = document.querySelector('.hamburger-lines');

const navLink = document.querySelector('.nav-link');
const navLinkHide = document.querySelector('.nav-link.hide');

hamburgerContainer.addEventListener('click', () => {
    navLink.classList.toggle('hide');
    hamburgerLines.classList.toggle('show');
    
    if (navLinkHide.style.opacity === '1') {
        navLink.removeAttribute('style');
    } else {
        navLink.style.opacity = '1';
    }
});

// Close Message Box for Error Notification
function closeMessageBox() {
    const messageBox = document.querySelector('.message-box');
    messageBox.style.display = 'none';
}

// Customize Mobile Menu Background
const path = location.pathname;
let navClass = '';

if (path === '/') { 
    navClass = 'home hide'; 
} else if (path === '/login') { 
    navClass = 'login hide';
} else if (path === '/signup') { 
    navClass = 'signup hide';
} else if (path.startsWith('/tasks')) {
    navClass = 'tasks hide';
} else if (path.startsWith('/edit')) {
    navClass = 'edit hide';
} else if (path.startsWith('/delete')) {
    navClass = 'delete hide';
} else {
    navClass = 'home hide'; 
}

document.querySelector('.nav-link').className = `nav-link ${navClass}`; 

const taskModalCustom = document.querySelector('.task-modal-custom');
const closeModelCustom = document.querySelector('.close-model-custom');
const createTaskButtons = document.querySelectorAll('.create-task-button');

createTaskButtons.forEach((createTaskButton) => {
    createTaskButton.addEventListener('click', () => {
        taskModalCustom.classList.add('show');
    })    
})

closeModelCustom.addEventListener('click', () => {
    taskModalCustom.classList.remove('show');
})

const selectState = document.querySelector(".select-state");
const stateOptions = document.querySelector(".state-options");
const options = document.querySelectorAll(".option");
let selectedOption = null;

const stateInput = document.getElementById('state');

selectState.addEventListener('click', () => {
    stateOptions.classList.toggle('active');
})

const selectFilterState = document.querySelector(".select-filter-state");
const filterOptions = document.querySelector(".filter-options");

selectFilterState.addEventListener('click', () => {
    filterOptions.classList.toggle('active');
})

options.forEach(option => {
    option.addEventListener('click', () => {
        // Update the Selected Option
        selectedOption = option.textContent;
        // Update the Text of the selectState Element
        selectState.querySelector('span').textContent = selectedOption;
        // Hide the Option
        stateOptions.classList.remove('active');
        stateInput.value = option.textContent;
    });
});
