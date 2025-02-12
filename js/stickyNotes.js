const addStickyNoteButton = document.getElementById("addStickyNote");
let stickyNotes = JSON.parse(localStorage.getItem("stickyNotes")) || [];

function saveStickyNotes() {
    localStorage.setItem("stickyNotes", JSON.stringify(stickyNotes));
}

function renderStickyNotes() {
    document.querySelectorAll(".sticky-note").forEach(note => note.remove());

    stickyNotes.forEach(note => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("sticky-note");
        noteDiv.setAttribute("data-id", note.id);
        noteDiv.style.position = "absolute";
        noteDiv.style.left = note.left + "px";
        noteDiv.style.top = note.top + "px";

        const dragHandle = document.createElement("div");
        dragHandle.classList.add("drag-handle");
        dragHandle.textContent = "☰";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-note");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => {
            deleteStickyNote(note.id);
        });

        const textarea = document.createElement("textarea");
        textarea.value = note.text;
        textarea.addEventListener("input", (e) => {
            updateStickyNote(note.id, e.target.value);
        });

        noteDiv.appendChild(dragHandle);
        noteDiv.appendChild(deleteBtn);
        noteDiv.appendChild(textarea);
        document.body.appendChild(noteDiv);

        dragHandle.addEventListener("mousedown", (e) => {
            currentDragNote = noteDiv;
            dragOffsetX = e.clientX - noteDiv.offsetLeft;
            dragOffsetY = e.clientY - noteDiv.offsetTop;
        });
    });
}

function addStickyNote() {
    const newNote = {
        id: Date.now(),
        text: "",
        left: 100,
        top: 100
    };
    stickyNotes.push(newNote);
    saveStickyNotes();
    renderStickyNotes();
}

function deleteStickyNote(id) {
    stickyNotes = stickyNotes.filter(note => note.id !== id);
    saveStickyNotes();
    renderStickyNotes();
}

function updateStickyNote(id, newText) {
    const note = stickyNotes.find(note => note.id === id);
    if (note) {
        note.text = newText;
        saveStickyNotes();
    }
}

addStickyNoteButton.addEventListener("click", addStickyNote);

let currentDragNote = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

document.addEventListener("mousemove", (e) => {
    if (currentDragNote) {
        currentDragNote.style.left = (e.clientX - dragOffsetX) + "px";
        currentDragNote.style.top = (e.clientY - dragOffsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    if (currentDragNote) {
        const noteId = parseInt(currentDragNote.getAttribute("data-id"));
        const note = stickyNotes.find(n => n.id === noteId);
        if (note) {
            note.left = currentDragNote.offsetLeft;
            note.top = currentDragNote.offsetTop;
            saveStickyNotes();
        }
        currentDragNote = null;
    }
});

renderStickyNotes();
