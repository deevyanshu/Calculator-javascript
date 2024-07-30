let currentDisplay='';
function display(num)
{
    currentDisplay+=`${num}`;
    document.querySelector('.display').value=currentDisplay;
}

function cleardisplay()
{
    currentDisplay='';
    document.querySelector('.display').value=currentDisplay;
}

function result(){
    let result=eval(currentDisplay);
    currentDisplay=result;
    document.querySelector('.display').value=currentDisplay;
}
