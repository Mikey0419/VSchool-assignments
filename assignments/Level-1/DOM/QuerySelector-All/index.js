var items = document.querySelectorAll("ol#favorite-things > li");

console.log(Array.from(items), "item[3]: ", items[3]);

for (var i = 0; i < items.length; i++) {
    items[i].textContent = "** ▙▜▚▞▘▝▨◧▕▋ **";
}