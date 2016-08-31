# JavaScript Singleton Pattern

This blog explain JavaScript **Singleton** Design Pattern

Many a times, we face a requirement where we need only one object of a class to communicate across the application. **Singleton** Pattern comes into role in this scenario. 
**Singleton** is one of my favorite Design Patterns. **Singleton** pattern restricts us to initialize more than one object. We implement **Singleton** by creating a class, having 
a method named as getInstance(), which returns reference to object of that class. If object has already been initiated, then it will return reference to that object, 
otherwise will initiate a new instance and return reference to that newly initiated object. In JavaScript, we can easily implement **Singleton** Pattern.
```JavaScript
/*
 * ApplicationContext is Singleton class.
 */
var ApplicationContext = (function () {
    var instance; // instance variable to hold the reference of Object.
    function initialize() {
        // private members here
        var _this = this;
        var secretKey = +new Date() + "" + parseInt(Math.random()*1000, 10);
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
```

app1 and app2 both are having same object, so app1.getSecretKey() == app2.getSecretKey() is logging true.


Follow Me
---
[Github](https://github.com/AmitThakkar)

[Twitter](https://twitter.com/amit_thakkar01)

[LinkedIn](https://in.linkedin.com/in/amitthakkar01)

[More Blogs By Me](http://amitthakkar.github.io/)