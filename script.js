const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const scene3 = document.getElementById('scene3');

// Scene 1 and 2
// Zoom IN: screen 1 grows past the viewer, screen 2 grows from small to full size
document.getElementById('toScene2').addEventListener('click', () => {
  scene1.classList.remove('active');
  scene1.classList.add('past');
  scene2.classList.add('active');
});

// Zoom OUT: the exact reverse
document.getElementById('toScene1').addEventListener('click', () => {
  scene2.classList.remove('active');   // shrinks back to small
  scene1.classList.remove('past');
  scene1.classList.add('active');      // shrinks from big back to normal
});

// Scene 2 and 3
document.getElementById('toScene3').addEventListener('click', () => {
  scene2.classList.remove('active');
  scene2.classList.add('past');
  scene3.classList.add('active');
});

// Zoom OUT: the exact reverse
document.getElementById('toScene1').addEventListener('click', () => {
  scene3.classList.remove('active');   // shrinks back to small
  scene2.classList.remove('past');
  scene2.classList.add('active');      // shrinks from big back to normal
});