document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('trans_button');
    let text = document.getElementById('trans_text').value; // 翻訳するテキストを取得
    let sourceLang = document.getElementById('sourceLang').value; // 現在の入力言語を取得
    let targetLang = document.getElementById('targetLang').value; // 現在の出力言語を取得
    const reverseButton = document.getElementsByClassName('reverseButton')[0]; // reverseLangボタンの取得

    translateButton.addEventListener('click', () => {
        text = document.getElementById('trans_text').value; // 翻訳するテキストを取得
        sourceLang = document.getElementById('sourceLang').value; // 現在の入力言語を取得
        targetLang = document.getElementById('targetLang').value; // 現在の出力言語を取得

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
                document.getElementById('trans_outtext').value = result.translations[0].text; // 出力テキストのIDを修正
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