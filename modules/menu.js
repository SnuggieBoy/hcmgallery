export const hideMenu = () => {
  const menu = document.getElementById('menu');
  menu.style.display = 'none'; // Hide the menu
};

export const showMenu = () => {
  const menu = document.getElementById('menu');
  menu.style.display = 'block'; // Show the menu
};

import { startAudio } from './audioGuide.js';

// Lock the pointer (controls are activated) and hide the menu when the experience starts
export const startExperience = (controls) => {
  controls.lock(); // Lock the pointer (controls are activated)
  hideMenu();
  startAudio(); // Auto-start ambient track!
};

export const setupPlayButton = (controls) => {
  const playButton = document.getElementById('play_button'); // Get the reference
  playButton.addEventListener('click', () => startExperience(controls)); // Add the click event listener to the play button to start the experience
};

export const setupAboutButton = () => {
  const aboutButton = document.getElementById('about_button');
  const aboutOverlay = document.getElementById('about-overlay');
  const closeAbout = document.getElementById('close-about');

  aboutButton.addEventListener('click', () => {
    aboutOverlay.classList.add('show');
  });

  closeAbout.addEventListener('click', () => {
    aboutOverlay.classList.remove('show');
  });
};
