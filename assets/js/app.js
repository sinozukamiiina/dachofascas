document.addEventListener('DOMContentLoaded', function() {
    // ここに計算やDOM操作のコードを記述
    document.getElementById('calculate').addEventListener('click', function() {
        var input = document.getElementById('inputValue').value;
        var result = parseInt(input) * 2; // 簡単な計算例
        document.getElementById('output').textContent = '計算結果: ' + result;
    });
});
