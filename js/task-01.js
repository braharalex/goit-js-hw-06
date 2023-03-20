const listEl = document.querySelector("#categories");
const categoriesEl = listEl.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
