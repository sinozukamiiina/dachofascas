document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['合計', '平均'],
            datasets: [{
                label: '値',
                data: [0, 0], // 初期値
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // 入力フィールドを追加する関数
    function addInputField() {
        var container = document.getElementById('inputContainer');
        var newInput = document.createElement('input');
        newInput.type = 'number';
        newInput.className = 'inputValue';
        newInput.placeholder = '例: 2.5';
        container.appendChild(newInput);
    }

    // 最初の入力フィールドを追加
    addInputField();

    // 「入力フィールドを追加」ボタンのイベントリスナー
    document.getElementById('addInput').addEventListener('click', function() {
        addInputField();
    });

    document.getElementById('calculate').addEventListener('click', function() {
        var inputs = document.querySelectorAll('.inputValue');
        var total = 0;
        var count = 0;

        inputs.forEach(function(input) {
            var value = parseFloat(input.value);
            if (!isNaN(value)) {
                total += value;
                count++;
            }
        });

        var average = count > 0 ? total / count : 0;

        // 結果を表示
        document.getElementById('output').textContent = '合計: ' + total + ', 平均: ' + average;

        // グラフのデータを更新
        myChart.data.datasets[0].data = [total, average];
        myChart.update();
    });
});
