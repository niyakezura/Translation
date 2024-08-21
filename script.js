document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('trans_button');

    translateButton.addEventListener('click', () => {
        const text = document.getElementById('trans_text').value;

        // 言語設定の要素からの取得方法を調整
        const languageSelects = document.querySelectorAll('select[name="prob-list1"], select[name="prob-list2"]');
        const sourceLang = languageSelects[0].value;
        const targetLang = languageSelects[1].value;

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
});