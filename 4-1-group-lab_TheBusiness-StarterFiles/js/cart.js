if (document.ReadyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn_danger')

    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateCartSubTotal()
            updateCartTotal()
        })
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function quantityChanged(event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartSubTotal()
}

function updateCartSubTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('subtotal')[0].innerText = '$' + total
}

