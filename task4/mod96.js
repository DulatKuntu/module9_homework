let node = document.querySelector("body")
let btn = document.querySelector(".call")
function getData(url,callback){
	console.log("ASD")
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
		const snippet = `
		<div class="card">
			<img src=${data.url} width=500px>
		</div>
		`
	
	node.innerHTML = snippet
}

btn.addEventListener('click', ()=>{
	let first = document.querySelector(".first").value
	let second = document.querySelector(".second").value
	if(first>99&&first<301&&second>99&&second<301){
		fetch(`https://picsum.photos/${first}/${second}`)
		.then((response=>{
			displayResult(response)
			console.log(response)
		}))
		.catch(()=>{
			console.log("error")
		})
	}else{
		console.log("Number is out of border")
	}
})