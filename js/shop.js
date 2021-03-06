// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

var $itemsList = document.getElementById('itemsList');
var $cartMessage = document.getElementById('cartMessage');
var $cartTotal = document.getElementById('cartTotal');
var $cartTotalDiscount = document.getElementById('cartTotalDiscount');
var $valueSaved = document.getElementById('valueSaved');

var cartMessage  = '';
var numItemsCard = '';

// Exercise 1 // refactored in addToCart(id);
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    addToCart(id);
    /*
    let addedItem = products[id - 1]
    //console.log(addedItem);
    cartList.push(addedItem);

    calculateSubtotals();

    calculateTotal();

    generateCart()

    applyPromotionsCart();

    printCart()
    //console.log(cartList);
    console.log('????????? finished calculations ?????????');

*/
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    console.log('????????? calculating ?????????');

    $cartMessage.innerHTML = '';
    $itemsList.innerHTML = '';

    addedItem = products[id - 1]
    //cartList.push(addedItem);
    console.log("Last added Item: "+ addedItem.name);
    //cart = [];

    /*
    cart.forEach(cartListItem => {
        let cartItem;
        let currName ='';
        currName = addedItem.name;
        console.log(currName);
*/
var cartItem;
var currName = addedItem.name;
        //check if product is already in cart
    if ( cart.some( obj => obj.name == currName )) {
         cartItem = cart.find(element => element.name == currName);
         //console.log(currName);
        //console.log("Product exist! add obj.name.quantity ++ "+currName);
        cartItem.quantity ++ ;
        cartItem.subtotal = cartItem.quantity * cartItem.price;
        cartItem.subtotalWithDiscount = cartItem.quantity * cartItem.priceWithDiscount;
        console.log("it exist already");
    }else {
        cart.push({
            id: addedItem.id,
            name: addedItem.name,
            type: addedItem.type,

            price: addedItem.price,
            subtotal: addedItem.price,

            priceWithDiscount: addedItem.price,
            subtotalWithDiscount: addedItem.price,

            quantity: 1
            });

        }
    // });

    // console.log(cart);


    applyPromotionsCart();
    calculateSubtotals();
    calculateTotal();
    printCart();


    console.log('????????? end calculations ?????????');

}

// Exercise 2
function cleanCart() {
    $cartMessage.innerHTML = cartMessage;
    $itemsList.innerHTML = '';
    cart = [];
    //cartList = [];
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    subtotal.grocery.discount = 0;
    subtotal.beauty.discount = 0;
    subtotal.clothes.discount = 0;
    total = 0;
    $cartTotal.innerHTML = '';
    $cartTotalDiscount.innerHTML = '';
    cartMessage = "Cart is empty"
    console.log("Cart cleared!");
    console.log(cart);

}
function myCart() {
    applyPromotionsCart();
    calculateSubtotals();
    calculateTotal();
    printCart();
}
// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array
    //refactored =>Now loop on cart "array"
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    subtotal.grocery.discount = 0;
    subtotal.beauty.discount = 0;
    subtotal.clothes.discount = 0;

    valueQuantity = 0;
    valueQuantityWithDiscount = 0;
    discounted = 0;

    for (i = 0; i < cart.length; ++i) {

        switch (cart[i].type) {
            case 'grocery':
                valueQuantity = cart[i].subtotal;
                subtotal.grocery.value += valueQuantity;

                valueQuantityWithDiscount = cart[i].subtotalWithDiscount;
                discounted = valueQuantity - valueQuantityWithDiscount;
                subtotal.grocery.discount += discounted;
                break;
            case 'beauty':
                valueQuantity= cart[i].subtotal;
                subtotal.beauty.value += valueQuantity;

                valueQuantityWithDiscount = cart[i].subtotalWithDiscount;
                discounted = valueQuantity - valueQuantityWithDiscount;
                subtotal.beauty.discount += discounted;
                break;
            case 'clothes':
                valueQuantity= cart[i].subtotal;
                subtotal.clothes.value += valueQuantity;

                valueQuantityWithDiscount = cart[i].subtotalWithDiscount;
                discounted = valueQuantity - valueQuantityWithDiscount;
                subtotal.clothes.discount += discounted;

                break;
        }
    }
    subtotal.grocery.value = roundPrice(subtotal.grocery.value);
    subtotal.beauty.value = roundPrice(subtotal.beauty.value);
    subtotal.clothes.value = roundPrice(subtotal.clothes.value);

    subtotal.grocery.discount = roundPrice(subtotal.grocery.discount);
    subtotal.beauty.discount = roundPrice(subtotal.beauty.discount);
    subtotal.clothes.discount = roundPrice(subtotal.clothes.discount);

    /*
    console.log("grocery subTotal= " + subtotal.grocery.value);
    console.log("grocery discount= " + subtotal.grocery.discount);

    console.log("beauty subTotal= " + subtotal.beauty.value);
    console.log("beauty discount= " + subtotal.beauty.discount);

    console.log("clothes subTotal= " + subtotal.clothes.value);
    console.log("clothes discount= " + subtotal.clothes.discount);

    console.log(subtotal);
    console.log("Subtotals Calculated");
    */
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    totalAfterDiscount = 0;
    totalDiscount = 0;

    for (var x in subtotal) {
        if (subtotal.hasOwnProperty(x)) {
            total += subtotal[x].value;
            totalDiscount += subtotal[x].discount;
        }
    }

    totalRounded = roundPrice(total);
    total = totalRounded;
    totalAfterDiscount = roundPrice(total - totalDiscount);
    valueSaved = roundPrice(total - totalAfterDiscount) ;
    /*
    console.log("Total before discound = " + total);
    console.log("Total discound = " + totalDiscount);
    console.log("Total after discound = " + totalAfterDiscount);
    console.log("Value Saved = " + valueSaved);
    console.log("Total calculated");
    */
    console.log("Value Saved = " + valueSaved);
}

// Exercise 5 // refactored in addToCart(id);
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    /*
    cart= [];
    cartList.forEach(cartListItem => {
        let cartItem;
        let currName ='';
        currName = cartListItem.name;
        //console.log(currName);
    if ( cart.some( obj => obj.name == currName )) {
         cartItem = cart.find(element => element.name == currName);
         //console.log(currName);
        //console.log("Product exist! add obj.name.quantity ++ "+currName);
        cartItem.quantity ++ ;
        cartItem.subtotal = cartItem.quantity * cartItem.price;
        //console.log(cart)
    }else {
            cart.push({
                name: cartListItem.name,
                price: cartListItem.price,
                type: cartListItem.type,
                quantity: 1,
                subtotal: cartListItem.price

                  });
        }
    });
*/

}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //subtotalWithDiscount
    let cartItemPromo;
    let newPromoPrice;

    if ( cart.some( obj => obj.name == "cooking oil" )) {
        cartItemPromo = cart.find(element => element.name == "cooking oil");
        //console.log(cartItem);
        if (cartItemPromo.quantity >= 3) {
            console.log("cartItem >= 3 cooking oil ");
            newPromoPrice = 10;
            cartItemPromo.priceWithDiscount = roundPrice(newPromoPrice);
            cartItemPromo.subtotalWithDiscount = cartItemPromo.quantity * cartItemPromo.priceWithDiscount;
            console.log("Promotions applied to: "+ cartItemPromo.name);

        }else {
            cartItemPromo.priceWithDiscount = cartItemPromo.price;
            cartItemPromo.subtotalWithDiscount = cartItemPromo.subtotal;
        }

    }
    if ( cart.some( obj => obj.name == "Instant cupcake mixture" )) {
        cartItemPromo = cart.find(element => element.name == "Instant cupcake mixture");
        //console.log(cartItem);
        if (cartItemPromo.quantity >= 10) {
            console.log("cartItem >= 10 Instant cupcake mixture ");
            newPromoPrice = (cartItemPromo.price*2)/3;
            cartItemPromo.priceWithDiscount = roundPrice(newPromoPrice);
            cartItemPromo.subtotalWithDiscount = roundPrice(cartItemPromo.quantity * cartItemPromo.priceWithDiscount);

            console.log("Promotions applied to: "+ cartItemPromo.name);
        }else {

            cartItemPromo.priceWithDiscount = cartItemPromo.price;
            cartItemPromo.subtotalWithDiscount = cartItemPromo.subtotal;

        }
    } else if (cart.length>1) {

        cartItemPromo.priceWithDiscount = cartItemPromo.price;
        cartItemPromo.subtotalWithDiscount = cartItemPromo.subtotal;

    }

}
    //console.log(cart);


// Exercise 9
function removeFromCart(id) {
    cartItemToRemove = '';
    cartItemToRemove = cart.find(element => element.id == id);
    //console.log(cartItemToRemove);
    if (cartItemToRemove.quantity > 1){
        cartItemToRemove.quantity -- ;
        applyPromotionsCart();
        cartItemToRemove.subtotal = cartItemToRemove.quantity * cartItemToRemove.price;
        cartItemToRemove.subtotalWithDiscount = cartItemToRemove.quantity * cartItemToRemove.priceWithDiscount;

    }else {
        cart.splice(cart.indexOf(cartItemToRemove), 1);
        applyPromotionsCart()
    }
    //console.log(cartItemToRemove.name+ " removed, "+ cartItemToRemove.quantity+" items remaining");
    //console.log(cart);

    calculateSubtotals();
    calculateTotal();
    printCart();
}


// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //console.log(cart);

    $cartMessage.innerHTML = '';
    $itemsList.innerHTML = '';
    numItemsCard = cart.length;
    //console.log("items in card: "+numItemsCard);

    if (numItemsCard <= 0 ) {
        cartMessage = "Cart is empty! <br> Select Something";
        cleanCart();
    }else{
        cartMessage = "Added " + numItemsCard + " ??tems";
        $cartMessage.innerHTML = cartMessage;
        $cartTotal.innerHTML = "TOTAL before discount = "+ total + "$";
        $cartTotalDiscount.innerHTML = "TOTAL after discount = "+ totalAfterDiscount + "$";
        $valueSaved.innerHTML =  "Value Saved = "+ valueSaved + "$";
    }
    // console.log(cartMessage);


    for (i = 0; i < cart.length; ++i) {
        // create list item and quantity item for each one
        listItem = document.createElement('li');
        // Add the item text
        listItem.innerHTML = cart[i].name;
        listItem.innerHTML +=
            ' - <span class="item-type">' + cart[i].type + '</span><br>';

        listItem.innerHTML +=
            '<span class="item-price">Price/u: ' + cart[i].price + '$</span>';
        listItem.innerHTML +=
            ' - <span class="item-subtotal">Subtotal: ' + cart[i].subtotal + '$</span><br>';

            listItem.innerHTML +=
            '<span class="item-pricediscount">Price/u after discount: ' + cart[i].priceWithDiscount + '$</span>';
        listItem.innerHTML +=
            ' - <span class="item-subtotaldiscount">Subtotal after discount: ' + cart[i].subtotalWithDiscount + '$</span><br>';

            listItem.innerHTML +=
            '<span class="item-quantity">Quantity: ' + cart[i].quantity + '</span>';
        listItem.innerHTML +=
            '  <button type="button" onclick="removeFromCart('+cart[i].id+')" class="btn btn-primary"> - </button>';
        listItem.innerHTML +=
            '  <button type="button" onclick="addToCart('+cart[i].id+')" class="btn btn-primary"> + </button>';
            // Add listItem to the listElement
        $itemsList.appendChild(listItem);
    }


    console.log(cart);

    console.log("Cart printed");
}


function roundPrice(pricetoRound){
    return  Number(Number(pricetoRound).toFixed(2));
}
