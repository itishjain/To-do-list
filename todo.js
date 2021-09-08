document.getElementById('addbtn').onclick= function (){
    if(document.querySelector("#newtask input").value.length==0)
    {
        alert("Add a task first");          //Alert if user enters NULL string or no task and click on add button.
    }
    else{
        document.querySelector("#tasks").innerHTML+=`
        <div class ="task">
            <span id ='taskname'>
            ${document.getElementById('input').value}
            ->
            ${document.getElementById('priority').value} :                        
            ${document.querySelector('#newtask input').value}  
            </span>
            <button class="delbtn">
                <i class="fas fa-trash fa-lg"></i>
                </button>
        </div>
        `;
        document.querySelector("#newtask input").value = "";    //For resetting the value of input.
        document.querySelector("#input").value = "";
        document.querySelector("#priority").value = "";
    }
    let del_item = document.getElementsByClassName("delbtn");   //For deleting the items.
    for(let i=0;i<del_item.length;i++){
        del_item[i].onclick=function(){
            let del=this.parentElement;
            del.style.display="none";
        }
    }
    let checked = document.getElementsByClassName("task");  //For checking or marking the tasks which are done.
    for(let i=0; i<checked.length; i++){
        checked[i].onclick=function(){
            this.classList.toggle('done');
        }
    }

}