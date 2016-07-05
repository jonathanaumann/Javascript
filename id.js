"use strict";

    var id = 0;

    function generateId() { return id++; };

    Object.prototype.id = function() {
        var newId = generateId();

        this.id = function() { return newId; };

        return newId;
    };



module.exports = generateId;