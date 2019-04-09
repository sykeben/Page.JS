const pagejs = {

    // Canvas.
    canvas: 'pagejs-canvas',

    // Raw code adder.
    addCode: function(code) {
        document.getElementById(pagejs.canvas).innerHTML += code;
    },

    // Element constructor.
    construct: function(id, tag, content, attribs) {
        var attribsText = "";
        if (attribs != undefined) {
            for (var i=0; i<attribs.length; i++) {
                attribsText += " " + attribs[i][0] + "=\"" + attribs[i][1] + "\"";
            };
        };
        return `<${tag} id=\"${id}\"${attribsText}>${content}</${tag}>`;
    },

    // Basic element adder.
    addBasic: function(id, tag, content, attribs) {
        document.getElementById(pagejs.canvas).innerHTML += pagejs.construct(id, tag, content, attribs);
    }

}