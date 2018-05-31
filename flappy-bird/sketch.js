var bird;
var pipes = [];
var score;
var highscore = 0;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  score = new Score();
}

function draw() {
  background(173,216,230);


  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      window.alert("GAME OVER");
      end();
    }

    if (pipes[i].offscreen()) {
      score.currentScore += 1;
      pipes.splice(i, 1);
    }

  }

  bird.update();
  bird.show();

  fill(255,0,0);
  stroke(255,0,0);
  textSize(64);
  text(score.currentScore, 200, 200);

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
