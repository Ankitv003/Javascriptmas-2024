import { addresses } from './addresses.js'
/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/

const labelsContainer = document.querySelector('.labels-container');

// Assuming you have an array of icon filenames
const iconImages = ['bauble.png', 'bow.png', 'candy-cane.png', 'deer.png','gifts.png','gingerbread-man.png','santa-hat.png','santa.png','snowflake.png','snowglobe.png','snowman.png','star-bauble.png','star.png','stocking.png','tree.png','trees.png','wreath.png']; 

addresses.forEach((address) => {
    if (address.isOnChristmasList) {

        const randomIconOne = iconImages[Math.floor(Math.random() * iconImages.length)];
        const randomIconTwo = iconImages[Math.floor(Math.random() * iconImages.length)];
        
        labelsContainer.innerHTML += `
           <div class="label"> 
            <img class="img-one" src="icons/${randomIconOne}">
            <h1>${address.name}</h1>
            <h2>${address.address_line_one}</h2>
            <h2>${address.town}</h2>
            <h2>${address.state}</h2>
            <h2>${address.country}</h2>
            <img class="img-two" src="icons/${randomIconTwo}">
           </div> 
        `;
    }
});