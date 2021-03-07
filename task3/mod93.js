let node = document.querySelector("body")
let btn = document.querySelector(".call")
function getData(url,callback){
	const xhr = new XMLHttpRequest
	xhr.open("get",url)

	xhr.onload = function(){
		if(xhr.status!=200){
			console.log(xht.status)
		}else{
			let result = JSON.parse(xhr.response)
			if(callback){
				callback(result)
			}
		}
	}

	xhr.onprogress = function(event){
		console.log(event.loaded, event.total)
	}

	xhr.onerror = function(){
		console.log(xhr.status)
	}

	xhr.send()
}


function displayResult(data){
	let total=""
	data.forEach(item=>{
		const snippet = `
		<div class="card">
			<img src=${item.download_url} width=500px>
			<p>${item.author}</p>
		</div>
		`
	total = total+snippet
	})
	node.innerHTML = total
}

btn.addEventListener('click', ()=>{
	let val = document.querySelector(".num").value
	if(val>0&&val<11){
		getData(`https://picsum.photos/v2/list/?limit=${val}`,displayResult)
	}else{
		console.log("Number is out of border")
	}
})