function searchItems() {
    // پیدا کردن input موجود (Home یا Course)
    const input =
        document.getElementById("searchHome") ||
        document.getElementById("searchCourse");

    if (!input) return;

    const value = input.value.toLowerCase();
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
