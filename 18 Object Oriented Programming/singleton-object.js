// =========================================
// 🚀 Object Literal (Most Basic Singleton)
// =========================================

// const config = {
//   appName: "seven_royals",
//   version: "1.0.0",
//   showInfo() {
//     console.log(`${this.appName} - ${this.version}`);
//   },
// };

// config.showInfo();

// ======================================
// 🚀 Singleton Using Function (Closure)
// ======================================

// const appSetting = (function () {
//   let instance;

//   function createInstance() {
//     return {
//       darkMode: false,
//       language: "en",
//     };
//   }

//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }

//       return instance;
//     },
//   };
// })();

// const setting1 = appSetting.getInstance();
// const setting2 = appSetting.getInstance();

// console.log(setting1 === setting2); // true ✔

// ====================================
// 🚀 Singleton with Class (ES6 Style)
// ====================================

class Logger {
  constructor(name) {
    if (Logger.instance) {
      return Logger.instance;
    }

    this.name = name;
    Logger.instance = this;
  }

  log(greetType) {
    console.log(`${greetType} ${this.name}`);
  }
}

const logger1 = new Logger("Hussain");
const logger2 = new Logger("Zaryab");

console.log(logger1);
console.log(logger2);

logger1.log("Hye!");
logger2.log("Hello!");

console.log(logger1 === logger2); // true ✔
