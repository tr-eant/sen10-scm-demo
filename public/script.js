const button = document.getElementById('interactive-btn');
const output = document.getElementById('output-text');

let clickCount = 0

button.addEventListener('click', () => {
    clickCount += 1
    output.textContent = `Button clicked ${clickCount} time(s)! Pipeline is fully operational.`;
});
