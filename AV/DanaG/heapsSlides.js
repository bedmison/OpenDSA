$(document).ready(function() {
  "use strict";
  var av_name = "heapSlides";
  var config = ODSA.UTILS.loadConfig({av_name: av_name}),
      interpret = config.interpreter;   
  var av = new JSAV(av_name);
  var bt1Top = 10;
  var bt1Left = 50;
  var bt2Left = 250;

  //Slide 1
  av.umsg(interpret("This is the first text."));
  av.displayInit();

  //Slide 2
  av.umsg(interpret("Now the first two trees should hopefully appear.");
  var bt1 = av.ds.binarytree({nodegap: 15, left: bt1Left, top: bt1Top});
  bt1.root("1");
  var rt1 = bt1.root();
  rt1.left("2");
  rt1.left.left("4");
  rt1.left.right("5");
  rt1.right("3");
  rt1.right.left("6");
  rt1.right.left("7");
  var bt2 = av.ds.binarytree({nodegap: 15, left: bt2Left, top: bt1Top});
  bt2.root("1");
  var rt2 = bt2.root();
  rt2.left("2");
  rt2.left.left("4");
  rt2.left.right("5");
  rt2.right("3");
  rt2.right.left("6");
  rt2.right.left("7");
  av.step();