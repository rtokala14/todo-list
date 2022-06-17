import { displayItems } from "./itemsControl";

// Factory function for boards
const Board = (title, desc) => {
    const getTitle = () => title;
    const getDesc = () => desc;
    
    let items = [];
    let htmlItem = null;

    const addItem = (item) => {
        items.push(item);
    }

    const removeItem = (item) => {
        for (let i = 0; i < items.length; i++) {
            if (items.Title === item.Title) {
                items.splice(i, 1);
            }
        }
    }

    const getItems = () => items;

    return {getDesc, getTitle, addItem, removeItem, getItems, htmlItem}
}

const boardList = [];
let activeBoard = null;

const modal = document.getElementById('addBoardModal');
const form = document.getElementById('addBoardForm');
const overlay = document.getElementById('overlay');
const addBtn = document.getElementById('button-board');

const addNewBoardListener = () => {
    addBtn.addEventListener('click', () => {
        form.reset();
        modal.classList.add('active');
        overlay.classList.add('active');
    })

    overlay.onclick = () => closeModal();
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

form.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('addBoardTitle').value;
    const desc = document.getElementById('addBoardDesc').value;
    const newBoard = Board(title, desc);
    boardList.push(newBoard);
    closeModal();
    displayBoards(newBoard.getTitle());
}

const displayBoards = (activeTitle) => {
    const cont = document.getElementById('boards-container');
    cont.textContent = '';
    boardList.forEach((board) => {
        let card = document.createElement('li');
        card.textContent = board.getTitle();
        card.classList.add('board-title');
        if (board.getTitle() === activeTitle) {
            card.classList.add('active');
            activeBoard = board;
            displayItems(board);
        }
        card.addEventListener('click', () => {
            activeBoard.htmlItem.classList.remove('active');
            card.classList.add('active');
            activeBoard = board;
            displayItems(board);
        });
        board.htmlItem = card;
        cont.appendChild(card);
    })
}

export {addNewBoardListener, activeBoard};