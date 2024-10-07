function appendElementsToHTML(array) {
    // დავკიდოთ ელემენტები html-ში სადაც გვინდა
    const wordsContainer = document.getElementById("words");
    wordsContainer.innerHTML = ""; // წავშალოთ წინა ელემენტები

    // გავდივართ მასივის თითოეულ წევრზე
    array.forEach(i => {
        // ვქმნით ახალ HTML ელემენტს
        const newElement = document.createElement("span");

        newElement.classList.add("word");

        // ვამატებთ მასივის ელემენტის მნიშვნელობას
        newElement.textContent = i;

        // ვამატებთ ელემენტს კონტეინერს
        wordsContainer.appendChild(newElement);
    });
}

let words = ["word", "world", "hello", "gia", "event", "html", "javascript", "script", "apple","banana", "grape",
     "orange", "mango", "kiwi", "pineapple", "strawberry", "blueberry", "peach", "watermelon", "papaya", "apricot",
      "cantaloupe", "dragonfruit", "raspberry", "blackberry", "coconut", "fig", "pomegranate", "ocean", "mountain",
       "forest", "desert", "river", "lake", "valley", "island", "cliff", "canyon", "waterfall", "sunrise", "sunset",
        "rainbow", "storm", "cloud", "earthquake", "hurricane", "blizzard", "tornado","const", "let", "var",
         "function", "return", "if", "else", "switch", "case", "break", "continue", "for", "while", "do", "try",
          "catch", "finally", "throw", "async", "await", "promise", "class", "extends", "super", "constructor", 
          "import", "export", "default", "this", "new", "delete", "typeof", "instanceof", "in", "of", "with", 
          "static", "get", "set", "yield", "let", "map", "filter", "reduce", "spread", "rest", "void", "null", 
          "undefined", "true", "false", "number", "string", "boolean", "object", "array", "function", "NaN", 
          "Infinity", "eval", "parseInt", "parseFloat", "Math", "Date", "RegExp", "console", "document", "window",
           "localStorage", "sessionStorage", "fetch", "XMLHttpRequest", "addEventListener", "removeEventListener", 
           "setTimeout", "setInterval", "clearTimeout", "clearInterval", "Promise", "Symbol", "Map", "Set", 
           "WeakMap", "WeakSet", "ArrayBuffer", "TypedArray", "DataView", "JSON", "Error", "TypeError", 
           "ReferenceError", "SyntaxError", "RangeError", "URIError", "eval", "bind", "call", "apply", "forEach", 
           "some", "every", "includes", "indexOf", "join", "slice", "splice", "push", "pop", "shift", "unshift",
           "abstract", "await", "boolean", "byte", "char",
            "debugger", "double", "enum", "export", "final",
            "float", "goto", "implements", "import", "instanceof",
            "interface", "long", "native", "package", "private",
            "protected", "public", "short", "synchronized", "throws",
            "transient", "volatile", "with", "BigInt", "Array",
            "String", "Number", "Boolean", "Function", "Object",
            "Reflect", "WeakRef", "WeakSet", "WeakMap", "Set",
            "Map", "Promise", "Intl", "Math", "JSON",
            "Date", "ArrayBuffer", "DataView", "TypedArray", "console",
            "alert", "confirm", "prompt", "setImmediate", "clearImmediate",
            "setInterval", "clearInterval", "setTimeout", "clearTimeout", "window",
            "document", "navigator", "location", "history", "fetch",
            "XMLHttpRequest", "WebSocket", "EventSource", "fetch", "import",
            "toString", "toFixed", "toPrecision", "toLocaleString", "toLowerCase",
            "toUpperCase", "substring", "trim", "replace", "concat",
            "slice", "split", "join", "sort", "map",
            "filter", "reduce", "every", "some", "find",
            "findIndex", "indexOf", "lastIndexOf", "includes", "forEach",
            "push", "pop", "shift", "unshift", "splice",
            "slice", "flat", "flatMap", "reverse", "sort"
];
        

// სიტყვა შემთხვევითად
let wordRow = Math.floor(Math.random() * words.length);
let word = words[wordRow];

// დაყოფა სიმბოლოებად
let characters = word.split('');
appendElementsToHTML(characters);

const input = document.getElementById("input");
const score = document.getElementById("score");
let realScore = 0;

input.addEventListener("input", () => {
    let inputValue = input.value; 
    let wordArray = word.split('');

    wordArray.forEach((char, index) => {
        const wordSpans = document.querySelectorAll('.word');

        // სწორად შეყვანილი სიმბოლოების შემოწმება
        if (char === inputValue[index]) {
            wordSpans[index].classList.add("correct");
        } else {
            wordSpans[index].classList.remove("correct");
        }
    });

    // თუ შეყვანილი სიტყვა სწორია
    if (inputValue === word) {
        realScore += 1;
        score.textContent = realScore;

        // წაშალეთ ძველი სიმბოლოები და დაამატეთ ახალი სიტყვა
        wordRow = Math.floor(Math.random() * words.length);
        word = words[wordRow];
        characters = word.split('');
        appendElementsToHTML(characters);

        // გავასუფთავოთ შეყვანილი ველი
        input.value = '';
    }
});
