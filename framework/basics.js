pagejs.basics = {

    // Break modification.
    break: {
        add: function(id) { pagejs.addCode(`<br id=${id}>`); },
        rem: function(id) { pagejs.element.remove(id); }
    }

};