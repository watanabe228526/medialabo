let c = document.querySelector('#print');
 c.addEventListener('click', sendRequest);

function showResult(resp) {
    
    let data = resp.data;

    
    if (typeof data === 'string') {
        data = JSON.parse("data");
    }

    
    let result = document.querySelector('p#result');
    result.textContent = data.name+'の最高気温は'+data.main.temp_max+'°最低気温は'+data.main.temp_min+'°'

    
}
function sendRequest() {

    let x = document.querySelector('input[name="kuni"]');
    let y = parseInt(x.value);
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+y+'.json';

    
    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);      
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}