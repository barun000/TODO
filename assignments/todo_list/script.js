// let inputtext=document.getElementsByTagName("input")[0];
// let submitbutton=document.getElementsByTagName("button")[0];
// let todo=document.getElementsByClassName("todos")[0];
// let count=0;
// submittbutton.onclick=function(){
//     if(inputtext.value==""||inputtext.value==0){
//         alert("Please Enter Value")
//     }
//     else{
//         let paragraph=document.createElement('p');
//         let key=document.createAttribute('key');
//         key.value=count;
//         paragraph.setAttributeNode(key);
//         paragraph.innerHTML=inputtext.value;
//         todo.appendChild(paragraph);
//         inputtext.value="";
//         paragraph.onclick=function(){
//             todo.removeChild(paragraph);
//         }
//         count+=1;
//     }
// }


var input=document.querySelector('input');
var button=document.querySelector('button');
var todos=document.querySelector('div.todo');
let count=0;
button.addEventListener('click',function(){
    console.log(input.value);
    if(input.value){
        var newTodo=document.createElement('p');
        newTodo.innerText=input.value;
        newTodo.setAttribute('key',count++);
        todos.appendChild(newTodo);
        newTodo.addEventListener('click',function(e){
            console.log('I am Clicked');
            var key=e.target.getAttribute('key');
            console.log("key-",key);
            document.querySelector(`p[key="${key}"]`).remove();
        })
        input.value="";
    }
})

