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
const addBtn = document.getElementById('button-item');

const addNewItemListener = () => {
    addBtn.addEventListener('click', () => {
        if (activeBoard !== null) {
            form.reset();
            modal.classList.add('active');
            overlay.classList.add('active');
        }
    })

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
        card.textContent = item.getTitle() + item.getParent().getTitle();
        card.classList.add('item-title');
        item.htmlItem = card;
        cont.appendChild(card);
    })
}

export {addNewItemListener, displayItems};