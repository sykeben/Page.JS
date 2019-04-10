// Log a preconstructed element to the console.
console.log("RAW TEST:\n" + pagejs.element.construct("test-id", "strong", "Hello, World!", [["style","color:blue"],["class","test-class"]]));

// Make the same element, but actually add it.
pagejs.element.addBasic("test-id", "strong", "Hello, World!", [["style","color:blue"],["class","test-class"]]);

// Make a bunch of random numbers.
for (var i=0; i<10; i++) {
    pagejs.addCode("<br>");
    pagejs.element.addBasic(`number-${i.toString()}`, "span", Math.random().toString());
}

// Style up the canvas.
pagejs.canvas.addAttrib("style", "padding: 15px");