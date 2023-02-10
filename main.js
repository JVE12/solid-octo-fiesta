let img;
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event)
{

    console.log(event);

    var content =  event.results[0][0].transcript;
  console.log(content);
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content =="circle")
    {
        x - Math.floor(Math.random() * 900);
        y - Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content =="rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    if(content =="1.")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 1";
        draw_apple = "set";
    }
    if(content =="2.")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        x2 = Math.floor(Math.random() * 900);
        y2 = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 2";
        draw_apple = "set2";
    }
    if(content =="3.")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        x2 = Math.floor(Math.random() * 900);
        y2 = Math.floor(Math.random() * 600);
        x3 = Math.floor(Math.random() * 900);
        y3 = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing three";
        draw_apple = "set3";
    }
    if(content =="4.")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        x2 = Math.floor(Math.random() * 900);
        y2 = Math.floor(Math.random() * 600);
        x3 = Math.floor(Math.random() * 900);
        y3 = Math.floor(Math.random() * 600);
        x4 = Math.floor(Math.random() * 900);
        y4 = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing four";
        draw_apple = "set4";
    }
    if(content =="5.")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        x2 = Math.floor(Math.random() * 900);
        y2 = Math.floor(Math.random() * 600);
        x3 = Math.floor(Math.random() * 900);
        y3 = Math.floor(Math.random() * 600);
        x4 = Math.floor(Math.random() * 900);
        y4 = Math.floor(Math.random() * 600);
        x5 = Math.floor(Math.random() * 900);
        y5 = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing five";
        draw_apple = "set5";
    }
}

function setup()
{
  img = loadImage('https://i.postimg.cc/1RB3SPrZ/th.jpg');
    canvas = createCanvas(1000, 900);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        draw_circle = "";
    }
    if(draw_rect == "set")
    {
        rect(x,y,70,50);;
        draw_rect = "";
    }
    if(draw_apple == "set")
    {
      console.log("APPPPPLE")
      image(img, x, y)
        draw_apple = "";
    }
    if(draw_apple == "set2")
    {
      console.log("APPPPPLE")
      image(img, x, y)
      image(img, x2, y2)
        draw_apple = "";
    }
    if(draw_apple == "set3")
    {
      console.log("APPPPPLE")
      image(img, x, y)
      image(img, x2, y2)
      image(img, x3, y3)

        draw_apple = "";
    }
    if(draw_apple == "set4")
    {
      console.log("APPPPPLE")
      image(img, x, y)
      image(img, x2, y2)
      image(img, x3, y3)
      image(img, x4, y4)

        draw_apple = "";
    }
    if(draw_apple == "set5")
    {
      console.log("APPPPPLE")
      image(img, x, y)
      image(img, x2, y2)
      image(img, x3, y3)
      image(img, x4, y4)
      image(img, x5, y5)
        draw_apple = "";
    }
}