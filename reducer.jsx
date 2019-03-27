var Map = require("Immutable").Map;

var reducer = function (state = Map, action) {
    switch (action.type){
        case "ADD_DOT":
            return state.update("entries", (entries) => entries.push(action.data));
        case "SET_STATE":
            return state.merge(action.state);
    }
    return state;
};

module.exports = reducer;