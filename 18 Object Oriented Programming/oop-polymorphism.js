// ================
// 🚀 Polymorphism
// ================
// Poly = many, morph = forms, Polymorphism = many forms
// It allows different classes to define methods with the same name but different behavior. (or we can say that has more than one form)

class MediaPlayer {
  play() {
    console.log("play media...");
  }
}

class Music extends MediaPlayer {
  play() {
    console.log("play music...");
  }
}

class Video extends MediaPlayer {
  play() {
    console.log("play video...");
  }
}

let mp1 = new MediaPlayer();
mp1.play();

let m1 = new Music();
m1.play();

let v1 = new Video();
v1.play();