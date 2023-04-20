let cartIcon = document.querySelector("#cart__icon");
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close__cart');
// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}
// Close cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}



if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready()
}

function ready() {
    // Remove items.
    var removeCartItemButtons = document.getElementsByClassName('btn__dng')
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // quantity changes
    var quantityInputs = document.getElementsByClassName('cart__quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // add to cart
    var addToCartButtons = document.getElementsByClassName('add__cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    // Buy button work
    document.getElementsByClassName('btn__buy')[0].addEventListener('click', buyButtonClicked)
}

// Buy button
function buyButtonClicked(){
    alert( possibleQuotes[Math.floor(Math.random() * 10)])
    var cartContent = document.getElementsByClassName('cart__content')[0]
    while(cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    var title = shopItem.getElementsByClassName('product__title')[0].innerText;
    
    var price = shopItem.getElementsByClassName('price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('product__img')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart__box')
    var cartItems = document.getElementsByClassName('cart__content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart__product__title')
    for ( var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("You have already added this item!")
        return;
        }
    }   
    var cartBoxContent = `
        <img src="${imageSrc}" alt="" class="cart__img">
        <div class="detail__box">
            <div class="cart__product__title">${title}</div>
            <div class="cart__price">${price}</div>
            <input type="number" value="1" class="cart__quantity">
        </div>    
        <!-- remove cart-->
        <button class="trash btn__dng"><img src="../images/trash.png" alt="Remove"></button>`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('btn__dng')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart__quantity')[0].addEventListener('change', quantityChanged)
    updateCartTotal()
}



function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart__content')[0]
    var cartBoxs = cartItemContainer.getElementsByClassName('cart__box')
    var total = 0
    var amount = 0
    for (var i = 0; i < cartBoxs.length; i++) {
        var cartBox = cartBoxs[i]
        var priceElement = cartBox.getElementsByClassName('cart__price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart__quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity =quantityElement.value
        total = total + (price * quantity)
        amount += +quantity
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total__price')[0].innerText = '$' + total
    document.getElementsByClassName('item_amount')[0].innerText = "Item count: " + amount;
    document.getElementsByClassName('cart-items')[0].innerText = amount
    
}

// An array holding all of the possible header quotes.
var possibleQuotes = [
    "Totally ONIX-pected! Thank you!",
    "SEAKING great Pokemon products? Thank you for choosing us.",
    "There's no SHAYMIN in loving Pokemon!",
    "DITTO on the great taste!",
    "HO-OH! Thank you for your purchase!"
];

