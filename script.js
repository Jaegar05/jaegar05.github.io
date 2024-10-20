let commandHistory = [];
let historyIndex = -1;

document.getElementById("commandInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let command = event.target.value.toLowerCase().trim();
        commandHistory.push(command);
        historyIndex = commandHistory.length; // Reset history index
        executeCommand(command);
        event.target.value = "";  // Clear input after command is entered
    } else if (event.key === "ArrowUp") {
        if (historyIndex > 0) {
            historyIndex--;
            event.target.value = commandHistory[historyIndex];
        }
    } else if (event.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            event.target.value = commandHistory[historyIndex] || "";
        }
    }
});

function executeCommand(command) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    switch(command) {
        case "hello":
            outputDiv.innerHTML = "<p>Hello, World!</p>";
            break;
        case "date":
            outputDiv.innerHTML = `<p>Current Date: ${new Date().toLocaleDateString()}</p>`;
            break;
        case "time":
            outputDiv.innerHTML = `<p>Current Time: ${new Date().toLocaleTimeString()}</p>`;
            break;
        case "help":
            outputDiv.innerHTML = "<p>Available commands: hello, date, time, help, info</p>";
            break;
        case "info":
            outputDiv.innerHTML = "<p>This is a simple command-based interface where you can enter commands to get responses.</p>";
            break;
        default:
            outputDiv.innerHTML = `<p>Unknown command: ${command}</p>`;
    }
}
