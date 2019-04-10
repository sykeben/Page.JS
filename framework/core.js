var pagejs = {

    // List of item IDs.
    itemList: [],

    // Canvas-related.
    canvas: {

        // Canvas ID.
        id: "pagejs-canvas",

        // Attrib adder.
        addAttrib: function(attrib, data) {
            document.getElementById(pagejs.canvas.id).setAttribute(attrib, data);
        },

        // Attrib remover.
        remAttrib: function(attrib) {
            document.getElementById(pagejs.canvas.id).removeAttribute(attrib);
        }

    },

    // Raw code adder (USE THIS SPARINGLY, ITEMS ARE NOT ADDED TO THE LIST THIS WAY).
    addCode: function(code) {
        document.getElementById(pagejs.canvas.id).innerHTML += code;
    },

    // Element-related.
    element: {

        // Constructor.
        construct: function(id, tag, content, attribs) {
            var attribsText = "";
            if (attribs != undefined) {
                for (var i=0; i<attribs.length; i++) {
                    attribsText += " " + attribs[i][0] + "=\"" + attribs[i][1] + "\"";
                };
            };
            return `<${tag} id=\"${id}\"${attribsText}>${content}</${tag}>`;
        },
        
        // Basic adder.
        addBasic: function(id, tag, content, attribs) {
            pagejs.addCode(pagejs.element.construct(id, tag, content, attribs));
            pagejs.itemList.push(id);
        },

        // Remover.
        remove: function(id) {
            document.getElementById(id).remove;
            for (i; i<pagejs.itemList.length; i++) {
                if (pagejs.itemList[i] == id) {
                    pagejs.itemList.splice(i, 1);
                }
            };
        }

    }

};