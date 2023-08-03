function displayApp(data){
    let content = document.querySelector('#app');
    let ul = document.createElement('ul');
    for (let i = 0; i < data.length; i++){
        let li = document.createElement('li');
        li.innerHTML = 'ID : ' + data[i].id + ' ' + data[i].title;
        ul.appendChild(li);
        content.appendChild(ul);
    }
}
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayApp(data));
}

fetchData();