// add input tag
var inputText = document.getElementById("input")
// add button tag
var subBtn = document.getElementById("button")

// Todo list 

var todoListTag = document.getElementById("todolist")

// array to store all todo elements , initally empty

var todoArr = []


//  When ADD button is clicked
subBtn.addEventListener("click" , addItemToArray)

// if input is on focus and enter is clicked addItemToArray should be called to Add element to array
inputText.addEventListener("keypress",(event)=>{
  // console.log(event.key)
  if(event.key == "Enter"){
    addItemToArray()
  }
})

function addItemToArray(){

  // event.target.value==inputText.value   <---- extra

  // push the value to Array if its not an empty string
  if(inputText.value!="")
  todoArr.push(inputText.value)
  // reset the value to empty string ""
  inputText.value=""
  // console.log("todoArr: ", todoArr)


  display()
}

function display() {

  // clear out previous old ones everytime we add one item to array and display it
  todoListTag.innerHTML = "";

  todoArr.map((curr,i)=>{

    var listItem = `<li id="item">
    <div>${curr}</div>
    <div>
      <span onclick="deleteItem(${i})">&times;</span>
      <span>|</span>
      <span onclick="editItem(${i})">Edit</span>
    </div>

  </li>`

  todoListTag.innerHTML += listItem
  })
  
}

function deleteItem(index){

  console.log("index: ", index);

  todoArr.splice(index ,1);
  display();
}


function editItem(index){

  var newValue = prompt("Pls edit")


  todoArr.splice(index,1,newValue)

  display();
}
// reset the todo list

document.getElementById("reset").addEventListener("click",()=>{
  todoArr=[]
  display()

})