document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            cartItems.push({ name, price });
            updateCart();
        });
    });
    
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    const detailsButton = document.querySelector('.product-details');
    const detailsSection = document.getElementById('details');

        detailsButton.addEventListener('click', () => {
            const isExpanded = detailsButton.getAttribute('aria-expanded') === 'true' || false;
            detailsButton.setAttribute('aria-expanded', !isExpanded);
            detailsSection.hidden = isExpanded;
        });
    
    const detailsButton1 = document.querySelector('.product-details1');
    const detailsSection1 = document.getElementById('details1');

        detailsButton1.addEventListener('click', () => {
            const isExpanded = detailsButton1.getAttribute('aria-expanded') === 'true' || false;
            detailsButton1.setAttribute('aria-expanded', !isExpanded);
            detailsSection1.hidden = isExpanded;
        });
    
    const detailsButton2 = document.querySelector('.product-details2');
    const detailsSection2 = document.getElementById('details2');

        detailsButton2.addEventListener('click', () => {
            const isExpanded = detailsButton2.getAttribute('aria-expanded') === 'true' || false;
            detailsButton2.setAttribute('aria-expanded', !isExpanded);
            detailsSection2.hidden = isExpanded;
        });
    
    const detailsButton3 = document.querySelector('.product-details3');
    const detailsSection3 = document.getElementById('details3');

        detailsButton3.addEventListener('click', () => {
            const isExpanded = detailsButton3.getAttribute('aria-expanded') === 'true' || false;
            detailsButton3.setAttribute('aria-expanded', !isExpanded);
            detailsSection3.hidden = isExpanded;
        });

    const detailsButton4 = document.querySelector('.product-details4');
    const detailsSection4 = document.getElementById('details4');

        detailsButton4.addEventListener('click', () => {
            const isExpanded = detailsButton4.getAttribute('aria-expanded') === 'true' || false;
            detailsButton4.setAttribute('aria-expanded', !isExpanded);
            detailsSection4.hidden = isExpanded;
        });
});

