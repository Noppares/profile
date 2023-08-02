function displayApp(data){
    let content = document.querySelector('#app');
    let ul = document.createElement('ul');
    for (let i = 0; i < data.length; i++){
        let li = document.createElement('li');
        li.innerHTML = 'ID : ' + data[i].id + ' ' + data[i].symbol;
        ul.appendChild(li);
        content.appendChild(ul);
    }
    console.log(data);
}
function fetchData(){
    fetch('https://api.coincap.io/v2/assets')
        .then(res => res.json())
        .then(data => displayApp(data));
}

fetchData();