// Log a preconstructed element to the console.
console.log(pagejs.construct("test-id", "strong", "Hello, World!", [["style","color:blue"],["class","test-class"]]));

// Make the same element, but actually add it.
pagejs.addBasic("test-id", "strong", "Hello, World!", [["style","color:blue"],["class","test-class"]]);

// Make a bunch of random numbers.
for (var i=0; i<10; i++) {
    pagejs.addCode("<br>");
    pagejs.addBasic(`number-${i.toString()}`, "span", Math.random().toString());
}