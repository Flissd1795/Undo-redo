// Last action performed is the first one that gets undone
// Undo stack need to: store actions performed
let undoStack = []; // actions performed 

// Redo stack needs to: store actions that have been undone
let redoStack = [];

function performAction(action) {
    undoStack.push(action);
    redoStack = []; // Clear stack: once new action happens, previously undone actions can no longer be redone
}

function undo() {
    if (undoStack.length === 0) return 'Nothing to undo';
    
    // Take the latest action from the undo stack 
    let latestAction = undoStack.pop();
    // Add action to the redo stack
    redoStack.push(latestAction);

    return `Undid ${latestAction}`
}

function redo() {
    if (redoStack.length === 0) return 'Nothing to redo';

    // Take action from the redo stack 
    let action = redoStack.pop();
    // Add it to the undo stack
    undoStack.push(action);

    return `Redid ${action}`;
}

function showStacks() {
    console.log('Undo stack:', undoStack);
    console.log('Redo stack:', redoStack);
}

performAction("A");
performAction("B");
performAction("C");

showStacks();

undo();
showStacks();

undo();
showStacks();

performAction("D");
showStacks();

