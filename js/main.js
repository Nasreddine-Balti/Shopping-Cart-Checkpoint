var like1 = document.querySelector('#itemlike1');
var like2 = document.querySelector('#itemlike2');
var like3 = document.querySelector('#itemlike3');

like1.addEventListener('click', () => like1.style.backgroundColor = "#ff0000")
like2.addEventListener('click', () => like2.style.backgroundColor = "#ff0000")
like3.addEventListener('click', () => like3.style.backgroundColor = "#ff0000")



var quantityInputs = document.getElementsByClassName('itemqt')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', function(event){
            var inputs = event.target
    if (isNaN(inputs.value) || inputs.value <= 0) {
        inputs.value = 1
    }
    updateTotal()
        })
    }


var removeitem = document.getElementsByClassName('deletebutton')
    for (var i=0; i < removeitem.length; i++){
        var button = removeitem[i]
        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        updateTotal()
     })
}



function updateTotal(){
    var ItemContainer = document.getElementsByClassName('items')[0]
    var Rows = document.getElementsByClassName('item')
    var total = 0
    for (var i=0; i < removeitem.length; i++){
        var Row = Rows[i]
        var priceElement = Row.getElementsByClassName('itemprice')[0]
        var quantityElement = Row.getElementsByClassName('itemqt')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 1000) / 1000
    document.getElementsByClassName('totalprice')[0].innerText = '$' + total
}
