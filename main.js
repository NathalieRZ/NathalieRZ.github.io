let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #00edff;'>|</span>",
});

typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #00269d; font-family: Inconsolata, monospace; ">Full Stack Developer en Java y Programadora en Python.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
