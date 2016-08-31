/**
 * Created by amitthakkar on 31/08/16.
 */
/*
 * ApplicationContext is Singleton class.
 */
var ApplicationContext = (function () {
    var instance; // instance variable to hold the reference of Object.
    function initialize() {
        // private members here
        var _this = this;
        var secretKey = +new Date() + "" + parseInt(Math.random() * 1000, 10);
        return {
            // public members.
            getSecretKey: function () {
                return port;
            }
        };
    }

    return {
        /* 
         * If instance variable is already having reference to the ApplicationContext, then return it, 
         * Otherwise initialize the instance variable first and then return.
         */
        getInstance: function () {
            if (!instance) {
                instance = initialize();
            }
            return instance;
        }
    };
})();
var app1 = ApplicationContext.getInstance();
var app2 = ApplicationContext.getInstance();
console.log(app1.getSecretKey() == app2.getSecretKey()); // true