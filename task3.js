function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function () { self._enabled = true; }
    this.disable = function () { self._enabled = false; }
}

function Fridge(power) {
    Machine.apply(this, arguments);
    var food = [];

    this.getFood = function () {
        return food.slice();
    };

    this.addFood = function () {
        if (!this._enabled) 
            throw new Error("Холодильник выключен");
        

        var maxFood = food.length + arguments.length;
        if (maxFood > this._power / 100) 
            throw new Error("Превышено максимальное количество продуктов в холодильнике");

        for (var i = 0; i < arguments.length; i++) 
            food.push(arguments[i]);
    };


}