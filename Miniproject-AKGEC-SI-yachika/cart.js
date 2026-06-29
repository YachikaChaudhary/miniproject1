let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

function displayCart(){

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach((item,index)=>{

        total += Math.ceil(item.price * 95);

        let card = document.createElement("div");
        card.classList.add("outerDiv");

        card.innerHTML = `
            <img src="${item.thumbnail}">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <h3>₹ ${Math.ceil(item.price * 95)}</h3>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.append(card);

    });

    document.getElementById("items").innerText =
    `Total Items : ${cart.length}`;

    document.getElementById("total").innerText =
    `Total Price : ₹ ${total}`;

}

displayCart();

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}