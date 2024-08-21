document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '274449d3-cad7-4a56-b8b6-b8db3dfe510c:fx'; // ここにAPIキーを設定します

    const data = {
        text: 'Hello, world!',
        target_lang: 'JA'
    };

    fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
        'Authorization': `DeepL-Auth-Key ${API_KEY}`, // APIキーをヘッダーに設定
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to translate text');
        }
        return response.json();
    })
    .then(result => {
    console.log(result.translations[0].text); // 翻訳されたテキストを出力
    })
    .catch(error => {
        console.error('Error:', error);
    });
});