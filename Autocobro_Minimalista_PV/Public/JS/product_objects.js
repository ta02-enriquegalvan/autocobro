function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomProduct() {
    const products = [
        "Leche (1 litro)", "Leche (2 litros)", "Pan (Blanco)", "Pan (Integral)", "Arroz (1 kg)",
        "Huevos (12 unidades)", "Huevos (24 unidades)", "Aceite (1 litro)", "Azúcar (1 kg)",
        "Café (250g)", "Sopa (Lata)", "Pasta (500g)", "Carne (Res)", "Carne (Cerdo)", "Pollo (Entero)",
        "Pescado (Filete)", "Verduras (Mix)", "Frutas (Variadas)", "Galletas (Chocolate)", "Yogur (Natural)",
        "Yogur (Frutas)", "Queso (Cheddar)", "Refresco (Cola)", "Cerveza (6 pack)", "Vino (Tinto)"
    ];
    

    let randomProduct = products[Math.floor(Math.random() * products.length)];
    let randomPrice = getRandomNumber(1, 10).toFixed(2);
    let randomDiscount = getRandomNumber(0, 50).toFixed(2);
    let randomQuantity = Math.floor(getRandomNumber(1, 20));

    return {
        Nombre: randomProduct,
        Precio: randomPrice,
        Descuento: randomDiscount,
        Cantidad: randomQuantity
    };
}
