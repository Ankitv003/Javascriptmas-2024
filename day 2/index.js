const calendarContainer = document.getElementById('calendar');
const emojiSurprise=["🔥","🚀","🎉","💪","👀","😍","✈","🙏","⚡","🤑","🌞","❤","😎","🎈","🎨","🧧","🎃","👓","🥐","🍜","🎄","🎅","🎇","🎉"]

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
    box.addEventListener('click', () => {
    box.innerHTML = `<p>Day ${i}</p><p>${emojiSurprise[i - 1]}</p>`;
    box.style.backgroundColor = "#F0A500";
    box.style.cursor = "default";
    box.style.pointerEvents = "none";
  });
}
