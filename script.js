function clr(){
    const display = document.getElementById('result');
    display.value = '';

}
function display(hold){
    const display = document.getElementById('result');
    display.value += hold;

}
function equate(){
    const x = document.getElementById('result');
    const y = eval(x.value);
    x.value = y;
}