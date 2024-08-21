document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translateButton');

    translateButton.addEventListener('click', () => {
        const text = document.getElementById('text').value;
        const targetLang = document.getElementById('language').value;

        const API_KEY = '274449d3-cad7-4a56-b8b6-b8db3dfe510c:fx';
        const url = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`;

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to translate text');
            }
            return response.json();
        })
        .then(result => {
            document.getElementById('result').textContent = result.translations[0].text;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});