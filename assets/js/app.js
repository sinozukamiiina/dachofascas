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
        // type: 'bar', // グラフのタイプ
        // data: {
        //     labels: Array.from({length: 20}, (_, i) => i + 1), // X軸のラベル（1から20まで）
        //     datasets: [{
        //         label: '1の目が初めて出るまでの試行回数の確率 (%)',
        //         data: [16.67, 13.89, 11.57, 9.65, 8.04, 6.70, 5.58, 4.65, 3.88, 3.23, 2.69, 2.24, 1.87, 1.56, 1.30, 1.08, 0.90, 0.75, 0.63, 0.52], // Y軸のデータ
        //         backgroundColor: 'rgba(255, 99, 132, 0.2)', // バーカラー
        //         borderColor: 'rgba(255, 99, 132, 1)', // バーボーダーカラー
        //         borderWidth: 1
        //     }]
        // },
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
        newInput.placeholder = '確率: 1.5';
        container.appendChild(newInput);

        var newWeight = document.createElement('input');
        newWeight.type = 'number';
        newWeight.className = 'inputWeight';
        newWeight.placeholder = '確保数: 2';
        newWeight.value = 1; // デフォルトの重みは1
        container.appendChild(newWeight);
    }

    // 最初の入力フィールドを追加
    addInputField();

    // 「入力フィールドを追加」ボタンのイベントリスナー
    document.getElementById('addInput').addEventListener('click', function() {
        addInputField();
    });

    document.getElementById('calculate').addEventListener('click', function() {
        var inputs = document.querySelectorAll('.inputValue');
        var weight = document.querySelectorAll('.inputWeight');
        var total = 0;
        var count = 0;

        inputs.forEach(function(input) {
            var value = parseFloat(input.value);
            if (!isNaN(value)) {
                total += value * weight;
                count += weight;
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
