let users = [];
let i = 0;
function saveToLocalStorage(event){
    event.preventDefault();
    const ExpAmt = event.target.expAmt.value;
    const Desc = event.target.desc.value;
    const Cat = event.target.cat.value;

    const obj = {
        ExpAmt,
        Desc,
        Cat
    }
    users.push(obj)
    localStorage.setItem(obj.Desc,JSON.stringify(users[i]));
    i++;
    event.target.expAmt.value = '';
    event.target.desc.value = '';
    event.target.cat.value = '';
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const ul = document.getElementById('listitem');
    const li = document.createElement('li');
    li.textContent = obj.ExpAmt + '-'+ obj.Desc + '-'+ obj.Cat;
    const Delete = document.createElement('input');
    Delete.type = 'button';
    Delete.value = 'Delete Expense';
    Delete.className = 'btn btn-outline-light btn-secondary  btn-sm ';
    Delete.onclick = () => {
        localStorage.removeItem(obj.Desc);
        ul.removeChild(li);
    }
    const Edit  = document.createElement('input');
    Edit.type = 'button';
    Edit.value = 'Edit Expense';
    Edit.className = 'btn btn-outline-light btn-secondary  btn-sm ';
    Edit.onclick = () => {
        
        document.getElementById('expAmtInputTag').value = obj.ExpAmt;
        document.getElementById('descInputTag').value = obj.Desc;
        document.getElementById('catInputTag').value = obj.Cat;
        localStorage.removeItem(obj.Desc);
        ul.removeChild(li);
    }

    li.appendChild(Delete);
    li.appendChild(Edit);
    ul.appendChild(li);
}