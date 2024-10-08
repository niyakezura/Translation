document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('trans_button');
    let text = document.getElementById('trans_text').value;
    let sourceLang = document.getElementById('sourceLang').value;
    let targetLang = document.getElementById('targetLang').value;
    const reverseButton = document.getElementsByClassName('reverseButton')[0];

    translateButton.addEventListener('click', () => {
        text = document.getElementById('trans_text').value;
        sourceLang = document.getElementById('sourceLang').value;
        targetLang = document.getElementById('targetLang').value;

        const API_KEY = '274449d3-cad7-4a56-b8b6-b8db3dfe510c:fx';
        const url = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(text)}&source_lang=${sourceLang}&target_lang=${targetLang}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to translate text');
                }
                return response.json();
            })
            .then(result => {
                document.getElementById('trans_outtext').value = result.translations[0].text;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    reverseButton.addEventListener('click', () => {
        sourceLang = document.getElementById('sourceLang').value;
        targetLang = document.getElementById('targetLang').value;

        document.getElementById('sourceLang').value = targetLang;
        document.getElementById('targetLang').value = sourceLang;
    });
});