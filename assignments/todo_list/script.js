let inputtext=document.getElementsByTagName("input")[0];
let submitbutton=document.getElementsByTagName("button")[0];
let todo=document.getElementsByClassName("todos")[0];
let count=0;
submittbutton.onclick=function(){
    if(inputtext.value==""||inputtext.value==0){
        alert("Please Enter Value")
    }
    else{
        let paragraph=document.createElement('p');
        let key=document.createAttribute('key');
        key.value=count;
        paragraph.setAttributeNode(key);
        paragraph.innerHTML=inputtext.value;
        todo.appendChild(paragraph);
        inputtext.value="";
        paragraph.onclick=function(){
            todo.removeChild(paragraph);
        }
        count+=1;
    }
}
