import * as THREE from "three";

let sound;
let bufferLoaded = false; // flag to track if audio buffer is loaded
let shouldPlay = false; // flag for when the user starts the experience before the audio load completes

// setup audio for the scene
export const setupAudio = (camera) => {
  // create an audio listener and add it to the camera
  const listener = new THREE.AudioListener();
  camera.add(listener);

  sound = new THREE.Audio(listener); // creating the audio source

  const audioLoader = new THREE.AudioLoader(); // create an audio loader
  audioLoader.load("sounds/tiersen.mp3", function (buffer) {
    // load the audio file
    sound.setBuffer(buffer); // set the audio source buffer
    sound.setLoop(true); // set the audio source to loop
    sound.setVolume(0.4); // soothing volume
    bufferLoaded = true; // flag ready
    if (shouldPlay) {
      sound.play(); // Auto-start if user already clicked Start
    }
  });
};

// play audio
export const startAudio = () => {
  shouldPlay = true;
  if (sound && bufferLoaded) {
    // check if the buffer is loaded before playing
    sound.play();
  }
};

// pause audio
export const stopAudio = () => {
  shouldPlay = false;
  if (sound && sound.isPlaying) {
    sound.pause();
  }
};
