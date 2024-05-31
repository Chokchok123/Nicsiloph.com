function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId + '-products');
    if (category.style.display === 'none' || !category.style.display) {
        category.style.display = 'grid';
    } else {
        category.style.display = 'none';
    }
}

function searchProducts() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const brand = item.getAttribute('data-brand').toLowerCase();
        const model = item.getAttribute('data-model').toLowerCase();
        if (brand.includes(filter) || model.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function buyProduct(productName) {
    // Redirect to Facebook messaging link
    window.location.href = 'https://www.facebook.com/profile.php?id=100064245035412&mibextid=ZbWKwL';
}

