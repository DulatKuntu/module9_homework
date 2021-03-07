const btn = document.querySelector(".call")
const node = document.querySelector("body");
if (localStorage.length != 0) {
    let data = localStorage.getItem("localData")
    let result = JSON.parse(data)
    let snippet = '';
        result.forEach(item => {
            const result =
            `<div style=width:500px;height:400px;overflow:hidden>
                <img src="${item.download_url}" class="card">
                <p>${item.author}</p>
            </div>`;
            snippet = snippet + result;
        });
        node.innerHTML = snippet
}
btn.addEventListener('click', ()=>{
    let page = Number(document.querySelector(".first").value)
    let limit = Number(document.querySelector(".second").value)
    console.log(pag,limit)
    if ((isNaN(page) || page > 10 || page < 1) && (isNaN(limit) || limit > 10 || limit < 1)) {
        node.innerHTML = `<div>Номер страницы и лимит вне диапазона от 1 до 10</div>`
    } else if (isNaN(page) || page > 10 || page < 1) {
        node.innerHTML = `<div>Номер страницы вне диапазона от 1 до 10</div>`
    } else if (isNaN(limit) || limit > 10 || limit < 1){
        node.innerHTML = `<div>Лимит вне диапазона от 1 до 10</div>`
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response)=> {
            return response.json()
        })
        .then((data) => {
            localStorage.setItem("localData", JSON.stringify(data))
                let total = '';
                data.forEach(item => {
                    const snippet =
                    `<div style=width:500px;height:400px;overflow:hidden>
                        <img src="${item.download_url}" class="card">
                        <p>${item.author}</p>
                    </div>`;
                    total = total + snippet;
                });
                node.innerHTML = total
        })
        .catch(() => {
            console.log("error")
        })
    }

})