const parser = new DOMParser()

const xmlString = `
	<list>
	  <student>
	    <name lang="en">
	      <first>Ivan</first>
	      <second>Ivanov</second>
	    </name>
	    <age>35</age>
	    <prof>teacher</prof>
	  </student>
	  <student>
	    <name lang="ru">
	      <first>Петр</first>
	      <second>Петров</second>
	    </name>
	    <age>58</age>
	    <prof>driver</prof>
	  </student>
	</list>`

const xmlDom = parser.parseFromString(xmlString,"text/xml")
let student={
	list: [{},{}],
}
let object ={}
const array = xmlDom.querySelectorAll("student")
for(let i=0;i<array.length;i++){
	let name = array[i].querySelector("name")
	student.list[i].langAttribute = name.getAttribute('lang')
	student.list[i].firstName = name.querySelector("first").textContent
	student.list[i].secondName = name.querySelector("second").textContent
	student.list[i].age = array[i].querySelector("age").textContent
	student.list[i].prof = array[i].querySelector("prof").textContent
}
console.log(student.list)

const jsonString = 
`{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`
const obj = JSON.parse(jsonString)
console.log(obj)