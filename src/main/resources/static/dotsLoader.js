getDots();

function getDots() {
    let x = new XMLHttpRequest();
    x.open("GET", "/getDots", true);
    x.onload = function (){
        let entries = x.responseText.split(";");
        entries.forEach(function (entry, i, entries) {
            let newTr = document.createElement('tr');
            let params = entry.split("&");
            params.forEach(function (param, j, params) {
                let newTd = document.createElement('td');
                newTd.innerHTML = param;
                newTr.appendChild(newTd);
            });
            results.appendChild(newTr);
        });
    };
    x.send(null);
}

function addDot() {
    let x = document.getElementsByName("xValueInput")[0].value;
    let y = document.getElementsByName("yValueInput")[0].value;
    let r = document.getElementsByName("rValueInput")[0].value;
    if(isNaN(parseFloat(y)) || !isFinite(y) || y == ""){
        alert("Введите значение y!!!");
        return
    }
    let body = '?xValueInput=' + x + '&yValueInput=' + y + '&rValueInput=' + r;
    let l = new XMLHttpRequest();
    l.open("GET", "/add"+body, true);
    l.onload = function (){
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        getDots();
    };
    l.send(null);
}
