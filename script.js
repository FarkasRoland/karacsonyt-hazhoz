document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az oldal újratöltését

    const treeType = document.getElementById('tree-type').value;
    const size = document.getElementById('size').value;

    // Üzenet a rendelés leadásáról
    alert(`Rendelés leadva: ${treeType}, Méret: ${size} cm`);
});
