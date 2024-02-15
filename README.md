<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Интернет-магазин комплектующих</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1em;
            text-align: center;
        }
        section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 1em;
        }
        .product {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 1em;
            padding: 1em;
            text-align: center;
            background-color: #fff;
            width: 200px;
        }
        button {
            background-color: #4caf50;
            color: #fff;
            padding: 0.5em 1em;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        .cart {
            margin-top: 1em;
            text-align: center;
        }
    </style>
</head>
<body>

<header>
    <h1>Интернет-магазин комплектующих</h1>
</header>

<section id="products">
    <div class="product">
        <h2>Процессор</h2>
        <p>Мощный процессор для вашего компьютера.</p>
        <p>Цена: $200</p>
        <button onclick="addToCart('Процессор', 200)">Добавить в корзину</button>
    </div>

    <div class="product">
        <h2>Видеокарта</h2>
        <p>Высокопроизводительная видеокарта для игр и графических задач.</p>
        <p>Цена: $300</p>
        <button onclick="addToCart('Видеокарта', 300)">Добавить в корзину</button>
    </div>

    <!-- Добавьте другие товары по аналогии -->

</section>

<div class="cart">
    <h2>Корзина</h2>
    <ul id="cart-items"></ul>
    <p>Total: $<span id="cart-total">0</span></p>
</div>

<script>
    let cartItems = [];
    let cartTotal = 0;

    function addToCart(product, price) {
        cartItems.push({ product, price });
        cartTotal += price;

        updateCartUI();
    }

    function updateCartUI() {
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');

        // Очищаем корзину перед обновлением
        cartItemsElement.innerHTML = '';

        // Обновляем отображение корзины
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price}`;
            cartItemsElement.appendChild(li);
        });

        // Обновляем общую стоимость
        cartTotalElement.textContent = cartTotal;
    }
</script>

</body>
</html>
