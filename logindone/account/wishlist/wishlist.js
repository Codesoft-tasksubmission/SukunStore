document.addEventListener("DOMContentLoaded", () => {
    const wishlistItemsContainer = document.getElementById("wishlist-items");
    const emptyMessage = document.getElementById("empty-message");
  
    // Sample Wishlist Items
    const wishlistItems = [
      {
        id: 1,
        name: "OnePlus 12",
        price: "₹59,299",
        image: "https://images-cdn.ubuy.co.in/65a4d1da79c8e03a06140a3c-oneplus-12-24gb-1tb-6-82-amoled.jpg",
      },
      {
        id: 2,
        name: "Apple Macbook Air",
        price: "₹73,990",
        image: "https://shoplet.pl/286301-large_default/apple-macbook-air-m1-133-wqxga-8gb-256gb-mac-os-srebrny.jpg",
      },
    ];
  
    // Render Wishlist Items
    function renderWishlist() {
      wishlistItemsContainer.innerHTML = "";
      if (wishlistItems.length === 0) {
        emptyMessage.style.display = "block";
      } else {
        emptyMessage.style.display = "none";
        wishlistItems.forEach((item) => {
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("wishlist-item");
          itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image" />
            <div class="item-details">
              <h2 class="item-name">${item.name}</h2>
              <p class="item-price">${item.price}</p>
            </div>
            <div class="item-actions">
              <button class="btn btn-primary move-to-cart" data-id="${item.id}">
                <i class="bi bi-cart"></i> Move to Cart
              </button>
              <button class="btn btn-danger remove-item" data-id="${item.id}">
                <i class="bi bi-trash"></i> Remove
              </button>
            </div>
          `;
          wishlistItemsContainer.appendChild(itemDiv);
        });
      }
    }
  
    // Remove Item from Wishlist
    function removeItem(id) {
      const itemIndex = wishlistItems.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        wishlistItems.splice(itemIndex, 1);
        renderWishlist();
      }
    }
  
    // Move Item to Cart (Simulation)
    function moveToCart(id) {
      const itemIndex = wishlistItems.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        const item = wishlistItems[itemIndex];
        alert(`Moved ${item.name} to the cart!`);
        removeItem(id);
      }
    }
  
    // Event Delegation for Buttons
    wishlistItemsContainer.addEventListener("click", (e) => {
      const id = parseInt(e.target.closest("button").dataset.id);
      if (e.target.classList.contains("remove-item")) {
        removeItem(id);
      } else if (e.target.classList.contains("move-to-cart")) {
        moveToCart(id);
      }
    });
  
    // Initial Render
    renderWishlist();
  });
  