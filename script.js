const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const rediscoveryOrder = [
  'Horus',
  'Leman Russ',
  'Ferrus Manus',
  'Fulgrim',
  'Vulkan',
  'Rogal Dorn',
  'Roboute Guilliman',
  'Magnus the Red',
  'Sanguinius',
  "Lion El'Jonson",
  'Perturabo',
  'Mortarion',
  'Lorgar',
  'Jaghatai Khan',
  'Konrad Curze',
  'Angron',
  'Corvus Corax',
  'Alpharius Omegon',
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...rediscoveryOrder]
    .map((a) => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
