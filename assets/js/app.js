// Chart.jsライブラリを使用するためのグラフの初期設定
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['入力値', '出力値'],
        datasets: [{
            label: '値',
            data: [0, 0], // 初期値は0
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

// 入力値と計算結果を更新するためのイベントリスナー
document.getElementById('calculate').addEventListener('click', function() {
    var input = parseInt(document.getElementById('inputValue').value);
    var result = input * 2; // ここでの計算を適宜変更してください
    
    // 計算結果を表示
    document.getElementById('output').textContent = '計算結果: ' + result;
    
    // グラフのデータを更新
    myChart.data.datasets[0].data = [input, result];
    myChart.update();
});
