function analyzerText() {
    let text = document.getElementById("inputText").value;

    if(text.trim() === "") {
        document.getElementById("result").innerHTML = "Please enter some text.";
        return;
    }

    let charCount = text.trim().length;

    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

    let reverseText = text.split("").reverse().join("");

    document.getElementById("result").innerHTML = "Total Characters: " + charCount + "<br>" +
        "Total Words: " + wordCount + "<br><br>" +
        "Reversed Text: " + reverseText;
    }
