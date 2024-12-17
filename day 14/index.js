/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/

import { feedData } from './data.js'

const feedAvatars = document.getElementsByClassName('feed-avatars')[0];
const uxLoading = document.getElementsByClassName('ux-loading')[0];
const feedImages = document.getElementsByClassName('feed-images')[0];

let currentPerson = '';

const renderAvatars = () => {
    feedData.forEach(person => {
        const avatar = document.createElement('img');
        avatar.src = `images/${person.avatarUrl}`;
        avatar.id = person.handle;
        avatar.classList.add('avatar');
        feedAvatars.append(avatar);
    })
}

const displayImg = (url) => {
    return new Promise((resolve) => {
        feedImages.innerHTML = '';

        const image = document.createElement('img');
        image.src = `images/${url}`;
        image.classList.add('feature-image');
        feedImages.append(image);

        setTimeout(() => {
            
            resolve();
        }, 1500);
    });
}

const renderAvatarHighlight = async () => {
    uxLoading.style.visibility = "hidden";
    
    for (let person of feedData) {
        const personAvatar = document.getElementById(person.handle);
        personAvatar.classList.add('highlight');

        for (let img of person.features) {
            await displayImg(img.imageUrl);
        }

        personAvatar.classList.remove('highlight');
    }
    
    feedImages.innerHTML = ''; 
    const messageScreen = document.createElement('p');
    messageScreen.classList.add('ux-message');
    messageScreen.textContent = 'Refresh to load latest images';
    feedImages.appendChild(messageScreen);
}

document.addEventListener('DOMContentLoaded', () => {
    renderAvatars(); 
    renderAvatarHighlight();
});