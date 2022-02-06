import { itemCollection } from './dataSet.js'

document.addEventListener('DOMContentLoaded', () => {

//SHOPPING CART FUNCTIONALITY

    let myCart = [];
    let index;

    function appendNode(parent, element) {
      parent.appendChild(element);
    };

    function getDiv(container) {
      return document.getElementById(container);
    };

    function createNode(node) {
      let element = document.createElement(node);
      return element;
    };

    function displayItems(items, container) {
      let items_container = getDiv(container);
      items_container.innerHTML = '';

      for (let i = 0; i < items.length; i++) {
        let item = items[i];

        //Create the shopping cart product grid
        let cartGrid = createNode("div");
        cartGrid.classList.add("shopping-cart-item-grid");
        cartGrid.classList.add("border-bottom");
        appendNode(items_container, cartGrid);

        //Create cart product image
        let cartImage = createNode("img");
        cartImage.src = items[i].image;

        //Create div holding all the product information in cart
        let divWrapper = createNode("div");
        divWrapper.classList.add("flex-v");
        appendNode(cartGrid, cartImage);
        appendNode(cartGrid, divWrapper);

        //Create first row of product information in cart
        let divWrapper2 = createNode("div");
        divWrapper2.classList.add("flex-h");
        divWrapper2.classList.add("space-between");
        divWrapper2.classList.add("border-bottom");
        divWrapper2.classList.add("margin-bottom");
        divWrapper2.classList.add("padding-bottom");
        appendNode(divWrapper, divWrapper2)
        
        //Create product name
        let cartPrName = createNode("h2");
        cartPrName.innerHTML = items[i].name;
        appendNode(divWrapper2, cartPrName);

        //Create product price
        let cartPrPrice = createNode("p");
        cartPrPrice.innerHTML = items[i].price + " SEK/st";
        appendNode(divWrapper2, cartPrPrice);

        //Create product description
        let cartPrDescription = createNode("p");
        cartPrDescription.innerHTML = items[i].description;
        appendNode(divWrapper, cartPrDescription);

        //Create div for last row of product information grid
        let divWrapper3 = createNode("div");
        divWrapper3.classList.add("flex-h");
        divWrapper3.classList.add("space-between");
        divWrapper3.classList.add("margin-top");
        appendNode(divWrapper, divWrapper3)

        //Create div holding quantity functionality
        let div1 = document.createElement("div");
        div1.classList.add("quantity-wrapper");
        div1.classList.add("flex-h");
        div1.classList.add("center");

        //Create change quantity p
        let changeQuantity = createNode("p");
        changeQuantity.innerHTML = "Change quantity";

        //Create minus button
        let cartMinusBtn = createNode("button");
        cartMinusBtn.setAttribute("cartId", items[i].id);
        cartMinusBtn.classList.add("quantity-button");
        cartMinusBtn.innerHTML = "-";

        //Create quantity value
        let cartQuantity = createNode("p");
        cartQuantity.innerHTML = items[i].quantity;
        cartQuantity.setAttribute("cartId", items[i].id);

        //Create plus button
        let cartPlusBtn = createNode("button");
        cartPlusBtn.setAttribute("cartId", items[i].id);
        cartPlusBtn.classList.add("quantity-button");
        cartPlusBtn.innerHTML = "+";

        appendNode(divWrapper3, div1);
        appendNode(div1, changeQuantity);
        appendNode(div1, cartMinusBtn);
        appendNode(div1, cartQuantity);
        appendNode(div1, cartPlusBtn);

        //Create remove button
        let removeBtn = createNode("button");
        removeBtn.innerHTML = "Remove from cart";
        removeBtn.classList.add("border-button");
        appendNode(divWrapper3, removeBtn);

        //SHOPPING CART PRODUCT FUNCTIONALITY

        //Quantity minus button
        cartMinusBtn.addEventListener("click", function (event) {

          let cartItemIndex = cartMinusBtn.getAttribute('cartId');

          if (itemCollection[cartItemIndex].quantity == 1) {
            myCart.splice(i, 1);
            itemCollection[cartItemIndex].quantity = 0;
            displayItems(myCart, "items");
          }

          itemCollection[cartItemIndex].quantity += -1;
          displayItems(myCart, "items");

        });

        //Quantity plus button
        cartPlusBtn.addEventListener("click", function (event) {
          let cartItemIndex = cartPlusBtn.getAttribute('cartId');

          itemCollection[cartItemIndex].quantity += 1;
          displayItems(myCart, "items");
        });

        //remove button
        removeBtn.addEventListener("click", function (event) {

          myCart.splice(i, 1);
          itemCollection[i].quantity = 0;
          displayItems(myCart, "items");

        });
          
      }
    }









    //INDIVIDUAL ITEM PAGE

    //Create elements
    let thumbnail1 = document.getElementById("thumbnail-1");
    let thumbnail2 = document.getElementById("thumbnail-2");
    let thumbnail3 = document.getElementById("thumbnail-3");
    let thumbnail4 = document.getElementById("thumbnail-4");
    let thumbnail5 = document.getElementById("thumbnail-5");

    let mainImage = document.getElementById("mainItem");
    let mainImage1 = document.getElementById("mainItem1");
    let mainImage2 = document.getElementById("mainItem2");
    let mainImage3 = document.getElementById("mainItem3");
    let mainImage4 = document.getElementById("mainItem4");

    let quantity = 1;

    let name = document.getElementById("itemName");

    let price = document.getElementById("itemPrice");

    let description = document.getElementById("itemDescription");

    let addBtn = document.getElementById("add");

    let lower = document.getElementById("minus");

    let higher = document.getElementById("plus");

    let currentQuantity = document.getElementById("quantity-value");


    //Connection correct item to the individual products page
    function showItem(currentItem) {

    thumbnail1.src =(itemCollection[currentItem].image);
    thumbnail2.src =(itemCollection[currentItem].image1);
    thumbnail3.src =(itemCollection[currentItem].image2);
    thumbnail4.src =(itemCollection[currentItem].image3);
    thumbnail5.src =(itemCollection[currentItem].image4);

    mainImage.src =(itemCollection[currentItem].image);
    mainImage1.src =(itemCollection[currentItem].image1);
    mainImage2.src =(itemCollection[currentItem].image2);
    mainImage3.src =(itemCollection[currentItem].image3);
    mainImage4.src =(itemCollection[currentItem].image4);

    name.innerHTML =(itemCollection[currentItem].name);

    price.innerHTML =(itemCollection[currentItem].price) + " SEK";

    description.innerHTML =(itemCollection[currentItem].description);

    index = currentItem;

    }

    //Quantity button functionality
    lower.addEventListener("click", function (event) {     
    if (quantity > 1 ) {
    quantity--;
    currentQuantity.innerHTML = quantity;
    }
        
    });

    higher.addEventListener("click", function (event) {
      quantity++;
      currentQuantity.innerHTML = quantity;
        
    });

    //Add to cart button functionality
    addBtn.addEventListener("click", function (event) {

      if (itemCollection[index].quantity == 0) {
        myCart.push(itemCollection[index]);
        itemCollection[index].quantity += quantity;

      } else {
        itemCollection[index].quantity += quantity;
      }
      
    }); 









    //NAVIGATION OF THE WEBSITE

    let startPage = document.getElementById("start-page");
    let currentPage = startPage;

    let shopPage = document.getElementById("shop-page");
    shopPage.style.display = "none";

    let itemPage = document.getElementById("item-page");
    itemPage.style.display = "none";

    let cartPage = document.getElementById("cart-page");
    cartPage.style.display = "none";

    let start = document.getElementById("start");
    let shop = document.getElementById("shop");
    let cart = document.getElementById("cart");

    let h1 = document.getElementById("h1");

    start.addEventListener("click", (event) => {
        currentPage.style.display = "none";
        currentPage = startPage;
        currentPage.style.display = "flex";
        h1.innerHTML = "Start";
    });

    shop.addEventListener("click", (event) => {
        currentPage.style.display = "none";
        currentPage = shopPage;
        currentPage.style.display = "block";
        h1.innerHTML = "Browse all products";
    });

    cart.addEventListener("click", (event) => {
        currentPage.style.display = "none";
        currentPage = cartPage;
        currentPage.style.display = "block";
        displayItems(myCart, "items");
        h1.innerHTML = "Shopping cart";
    });









    //MAKE BROWSE PRODUCTS COLLECTION

    // Establish the array which acts as a data source for the list

    let collectionElements = []

    function makeList() {

      for (var key in itemCollection) {

        // Make a container element for the list
        let listContainer = document.createElement('div');

        // Make the list
        let listElement = document.createElement('div');
        
        // Add it to the page
        document.getElementById("grid1").appendChild(listContainer);

        // create an item for each one
        // let flexV = docuemnt.createElement("div");
        let  div = document.createElement('div');
        div.classList.add("flex-h");
        div.classList.add("space-between");

        //Create product information
        let  prName = document.createElement('p');
        prName.classList.add("small");
        let  prPrice = document.createElement('p');
        let  prImage = document.createElement('img');
        prImage.classList.add("margin-top");

        // Add the item text
        prName.innerHTML = (itemCollection[key].name);
        prPrice.innerHTML =(itemCollection[key].price) + " SEK";
        prImage.src =(itemCollection[key].image);
      
        let currentIndex = itemCollection[key].id;

        //Button for each product functinoality
        let button = document.createElement("button");
        button.innerHTML = "Läs mer";
        button.setAttribute("id", "item-button", "currentIndex");
        button.classList.add("border-button");

        button.onclick = function() {
          
          quantity = 1;
          currentQuantity.innerHTML = quantity;

          showItem(currentIndex);
          
          currentPage.style.display = "none";
          currentPage = itemPage;
          currentPage.style.display = "block";

          h1.innerHTML = "Product details";
        }
          
        // Add product information to the listElement
        div.appendChild(prName);
        div.appendChild(prPrice);
        listElement.appendChild(div);
        listElement.appendChild(prImage);
        listElement.appendChild(button);
        
        listContainer.appendChild(listElement);
        collectionElements.push(listElement);
      }

    }

    makeList();

});