import { activeBoard } from "./boardsControl";

// Factory function for To-Do items
const Item = (title, desc) => {
    const getTitle = () => title;
    const getDesc = () => desc;

    let checked = false;
    let htmlItem = null;
    let parentBoard = null;

    const getStatus = () => checked;

    const getParent = () => parentBoard;

    const setParent = (parent) => {
        parentBoard = parent;
    }

    return {getDesc, getStatus, getTitle, htmlItem, getParent, setParent}
}

const itemList = [];
let activeItem = null;

const modal = document.getElementById('addItemModal');
const form = document.getElementById('addItemForm');
const overlay = document.getElementById('overlay');
//const addBtn = document.getElementById('button-item');

const addNewItemListener = () => {

    overlay.onclick = () => closeModal();
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

form.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('addItemTitle').value;
    const desc = document.getElementById('addItemDesc').value;
    const newItem = Item(title, desc);
    itemList.push(newItem);
    newItem.setParent(activeBoard);
    closeModal();
    activeBoard.addItem(newItem);
    displayItems(activeBoard);
}

const displayItems = (board) => {
    const cont = document.getElementById('items-container');
    cont.textContent = '';
    board.getItems().forEach((item) => {
        let card = document.createElement('li');
        card.classList.add('item-box');
        card.appendChild(populateCard(item));
        item.htmlItem = card;
        cont.appendChild(card);
    });

    // Add the add-item button to container
    const finalAppend = document.createElement('li');
    finalAppend.classList.add('add-item-btn');
    finalAppend.textContent = "+";
    finalAppend.id = "button-item";
    finalAppend.addEventListener('click', () => {
        form.reset();
        modal.classList.add('active');
        overlay.classList.add('active');
    })
    cont.appendChild(finalAppend);
    finalAppend.classList.remove()
}

const populateCard = (item) => {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add(
        'border-b-2', 'p-2', 'border-black', 'flex', 
        'justify-between', 'items-center'
    );

    const title = document.createElement('h2');
    title.classList.add('text-lg', 'font-semibold');
    title.textContent = item.getTitle();
    outerDiv.appendChild(title);

    const btn = document.createElement('button');
    btn.className = "text-4xl text-primary";
    btn.textContent = "|";
    outerDiv.appendChild(btn);

    return outerDiv;
}

export {addNewItemListener, displayItems};