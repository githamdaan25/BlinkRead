document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('process');
    const inputText = document.getElementById('inputText');
    const resultDiv = document.getElementById('bionice_reading_text');
    const loader = document.getElementById('loader');
    const resetButton = document.getElementById('reset');

    btn.addEventListener('click', () => {
        const data = inputText.value;
        if (data.trim() === '') {
            alert('Please enter a sentence.');
            return;
        }

        loader.style.display = 'block';
        let text = '';
        const lines = data.split('\n');

        lines.forEach(line => {
            const words = line.split(' ');
            words.forEach(word => {
                const length = word.length;
                if (length === 0) {
                    text += ' ';
                } else {
                    const mid = Math.ceil(length / 2);
                    text += `<b>${word.substring(0, mid)}</b>${word.substring(mid)} `;
                }
            });
            text += '<br>';
        });

        resultDiv.innerHTML = text;
        loader.style.display = 'none';
    });

    resetButton.addEventListener('click', () => {
        inputText.value = ''; // Clear the input box
        resultDiv.innerHTML = 'Fast ReadX your text here'; // Reset the output box
    });
});
