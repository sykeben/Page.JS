// Log a preconstructed element to the console.
console.log("RAW TEST:\n" + pagejs.element.construct("test-id", "strong", "Hello, World!", [["style","color:blue"],["class","test-class"]]));

// Style up the canvas.
pagejs.canvas.addAttrib("style", "padding: 15px");

// Make the same element, but actually add it.
pagejs.element.addBasic("test-id", "strong", "Hello, World!", [["style","color:blue"],["class","test-class"]]);

// Make a bunch of random numbers.
for (var i=0; i<10; i++) {
    pagejs.basics.break.add(`number-break-${i.toString()}`);
    pagejs.element.addBasic(`number-${i.toString()}`, "span", `[${i}] ${Math.random().toString()}`);
}

// Add a button to delete #4.
pagejs.basics.break.add(`button-seperator`);
pagejs.element.addBasic("delete-4", "button", "Delete #4", [["onclick","removeNumber4();"]]);

// Log the element list.
console.log("ELEMENT LIST: " + pagejs.itemList.toString());

// #4 Remover.
function removeNumber4() {
    pagejs.element.remove("number-4");
};