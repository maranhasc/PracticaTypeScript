"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
var mail = /** @class */ (function () {
    function mail(direccion, tipo) {
        this._direccion = direccion;
        this._tipo = tipo;
    }
    mail.prototype.getMail = function () {
        return "".concat(this._direccion, ", ").concat(this._tipo);
    };
    Object.defineProperty(mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (v) {
            this._direccion = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (v) {
            this._tipo = v;
        },
        enumerable: false,
        configurable: true
    });
    return mail;
}());
exports.mail = mail;
