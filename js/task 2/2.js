function add() {
    var sum1 = document.getElementById("sum1").value;
    var sum2 = document.getElementById("sum2").value;
    var sum = parseInt(sum1) + parseInt(sum2);
    document.getElementById("result").innerText = sum;
}