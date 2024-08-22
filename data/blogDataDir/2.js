const data = {
    id: 2,
    title: "Coding in Arduino",
    category: [2],
    createdAt: 1698167661000,
    description:
        "It's Arduino time! 🤖\nBy the time you're done with this, you will now be the cool hacker friend that everyone admires! (not guaranteed).",
    thumbnail: "https://i.imgur.com/T7M5B8x.jpg",
    content: `
# What the hell is an Arduino?

I know that right after learning about basic circuitry, this might be a bit overwhelming, but trust me, it won't be very soon. An Arduino is a little computer that has little holes that can be input and outputs, referred as pins. You can connect those pins into a breadboard to make a basic circuit. You can also connect the Arduino itself to your computer using a USB 2.0 Type B connector to upload code to it.

## Okay... How?

You can download the [Arduino IDE here](https://www.arduino.cc/en/software), which has all the tools that you need to code an Arduino. It is available for Windows, MacOS & Linux.

If you're built different, you can use the [Arduino extension for VS Code](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino) so that you can enjoy all the features of VS Code but also be able to use it to code an Arduino. I recommend you to do this ONLY if you know what you're doing, since it might not work if you have something not setup correctly.

After you have the IDE of your choice & an Arduino plugged in, select your board type (I'll be using an Arduino Uno) and the port (look for the one that says something about USB, unless you're not using USB). You are able to do so in the Arduino IDE by going on the top left corner and looking for the select menu, and on the status bar in VS Code.

## Now what?

Before you actually do anything with that, let's first dive into a little bit of theory. Arduino files end in a .ino extension, and they're usually called sketch.ino. The language used for coding is a fork (variation) of the popular C++, which means it'll have C++ syntax and functionalities. If you already have experience with coding such as Javascript, Python, any language in the C family (C, C#, C++, *duh*) you'll breeze through this. If you want to get into much more depth,[ here's a good resource](https://www.youtube.com/watch?v=ZzaPdXTrSb8) to get you ahead of pace. Anyway, C++ syntax looks something like this:

~~~cpp showLineNumbers
#include <iostream> // import input-output stream library
#include <string> // import string data type

int main() // main function that returns an integer (number)
{
  string helloWorld = "Hello World!"; // initialize a string variable called helloWorld with a value
  std::cout << helloWorld << std::endl; // output the variable helloWorld and end line.

  return 0; // 0 means succesfully ran the program, -1 means failed to run the program.
}
~~~

However since Arduino doesn't actually use raw C++, we will mostly see something like this:

~~~cpp showLineNumbers
// don't need to import anything

void setup() { // main function that runs ONCE, doesn't return anything
  pinMode(6, OUTPUT); // set the pin #6 mode to output
  pinMode(5, OUTPUT); // same with pin #6
}

void loop() { // function that will loop once the last iteration has finished running
  delay(1000); // stop running code for 1000 milliseconds
  if (digitalRead(6) == HIGH) { // if pin #6 is not actually outputting anything though
    digitalWrite(6, LOW); // turn off pin #6
    digitalWrite(5, HIGH); // make pin #5 actually output something
  } else { // viceversa
    digitalWrite(6, HIGH);
    digitalWrite(5, LOW);
  }
}
~~~

Notice how when there's a "{", there is always a "}" with it, same with "(" and ")", and how after every function we add a semicolon.

If you're wondering what a function is, it's basically a reusable piece of code that has it's own "environment" and can be executed or invoked. Looks something like this:

~~~cpp showLineNumbers
// this is vanilla C++ btw
#include <iostream>
#include <string>

void greetTheUser(string message) {
  std::cout << message << std::endl; // semicolon here as well
}

int main() {
  greetTheUser("Hello, what's up?"); // semicolon here
}

// just put semicolons every time you finish a line unless the line ends in a curly brace "{" or "}".
~~~

# What can I do with this knowledge?

Let's try making our little Arduino play some music. We'll use piezo buzzers which will function like speakers, and obviously an Arduino. Let's check out how a piezo buzzer works before we dive into everything else.

In simple terms, it has 2 layers, one of which is made out of piezoelectric ceramic. When alternating voltage is applied to the ceramic layer, it vibrates rapidly, forming sound waves. The speed at which it vibrates is the frequency.

This is unimportant, but if you want a little bit of a physics lesson, here you go; the sound waves produced is considered a type called a *longitudinal mechanical* wave. *Longitudinal* meaning it sort of pushes particles forward, creating a chain reaction, and *mechanical* meaning it needs some sort of medium to travel through, like air or water. All waves have 3 properties; amplitude (how intense), frequency (how many waves) and distance (how long is the wave). Since we're speaking about sound, these 3 properties can also be called volume, tone, and duration respectively.

In the case of using an Arduino, we can control that frequency/tone along with the duration using code! You can also control the volume using a potentiometer if you want.

To end the explanation off, this is basically how it would sort of look like:

![An oversimplified graphical representation of a piezo buzzer.](https://i.imgur.com/puGkiUk.png)

Try to build a simple circuit which connects a piezo buzzer to the Arduino, and see [what song this code plays](https://create.arduino.cc/editor/zhai_07/896785b2-9782-491c-9706-61cb1f7ea5bc/preview).

# Any way we could make the code looks nicer?

We could use variables! This is an example:

~~~cpp showLineNumbers
int redLedPin = 9;
int yellowLedPin = 10;
int greenLedPin = 11;
int delayMs = 250;

void setup() {
  pinMode(redLedPin, OUTPUT);
  pinMode(yellowLedPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
}

void loop() {
  digitalWrite(redLedPin, HIGH);
  delay(delayMs);
  digitalWrite(yellowLedPin, HIGH);
  delay(delayMs);
  digitalWrite(greenLedPin, HIGH);
  delay(delayMs);
  digitalWrite(redLedPin, LOW);
  digitalWrite(yellowLedPin, LOW);
  digitalWrite(greenLedPin, LOW);
  delay(delayMs);
}
~~~

In this case, we're using the "int" keyword to tell the program that we will save a variable with a name and a value of type integer. There are multiple types; strings, integers, booleans, floats, and all those wacky things. We'll go over some of them, but only the ones that you need to worry about. If you'd like to dive deeper into this, the [C++ 1-hour course](https://www.youtube.com/watch?v=ZzaPdXTrSb8) I linked above earlier by Code With Mosh will really come in handy for you.

Here's a little cheatsheet which also works in C++ for variables!

~~~cpp showLineNumbers
int wholeNumber = 5;

float decimalNumber = 5.5; // for arduino
float decimalNumber = 5.5f; // for c++

double decimalNumber = 124.4961;

const double pi = 3.14; // const makes the variable unchangable

// for c++
#include <string>
string helloWorld = "Hello World!" // make sure it has double quotes

// for arduino
char helloWorld[] = "Hello World!"
~~~

You can also use some shortcuts with math!

~~~cpp showLineNumbers
int num = 1;
num++;
// num++ is simply "num = num + 1", which is 2.
// you can also do
int num2 = 2;
num2--;
// num2-- is just like it's counterpart, but it's something like "num2 = num2 - 1;", which is 1.
~~~

There are a few more such as +=, -=, *= and /= but we won't use them. You can always use Google to give you some help if you're ever extra-curious about something.

[This](https://youtube.com/shorts/ELIE93MrYls) is an example project which makes use of these concepts. Do you think you can try to recreate its code?

# I just finished that. What now?

Let's get started with a new cool project. Get an Arduino, a breadboard (or not, it's up to you), a button, some wires, hook up the 5V pin of the Arduino into the button, and on the other side of the button, connect it to any of the pins.

Maybe you remember this command from before, but maybe not. It's digitalRead()! What it does is to read the value a pin is receiving. It returns either 1 or 0, 1 being HIGH, and 0 being LOW. Basically, either on or off.

We will also use the Serial class! It gives us the ability to use Serial.begin(), Serial.print(), etc., which will be useful to see if certain things are working.

This is how you would use both of those concepts.

~~~cpp showLineNumbers
const int pin = 5;
int isPressed;

void setup() {
  pinMode(pin, INPUT); // this is important
  Serial.begin(9600); // starts communication with the computer at 9.6Mhz
}

void loop() {
  isPressed = digitalRead(pin);
  Serial.println(isPressed);
  if (isPressed) { // you can simply evaluate a number to see whether it's true or false. In C++, 0 will be false, and every other number will be evaluated to true.
    Serial.println("The button is being pressed!")
  } else {
    Serial.println("The button is NOT being pressed!")
  }
  // you can now see the current status of the button in your serial monitor
}
~~~


You can think of Serial.print() as your average console.log() from JavaScript, or your average print() from Python. Serial.println() on the other hand, simply creates a new line right after the message, so you can think of it as a normal print, but it saves you from typing \\n at the end.

You can always check the [Arduino reference](https://www.arduino.cc/reference/en/) like always if you want to see what more you can do.

Anyway, we can make this even more fun by making the button actually do something! Let's try this.

~~~cpp showLineNumbers
const int buttonPin = 5;
const int ledPin = 6;

int isPressed;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  isPressed = digitalRead(ledPin);
  Serial.println(isPressed);
  if (isPressed) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
~~~

Guess what that code will do! Then try it out yourself to see if you were right. That will not only improve your code-reading skills, but also challenge you to try to figure out what components are needed, and how they should be hooked up.

# Can we expand on this?

Yeah we can! There's another thing called analogRead, and based on that you can *maybe* guess what it does. If you don't, it's no big deal. We first have to understand the difference between "analog" and "digital" though. Digital signals can either be "on" or "off", no in between, while analog signals have values that are between "on" or "off".

In Arduino, what we can do is read an analog value going from 0 to 1023, which is the 10-bit integer limit, and we can do cool things with that. However, only pins starting with the letter "A" can do so.

And of course, with each reader, there's a writer, and that also applies here. analogWrite can output an analog value that goes from 0 to 255.

There is however a catch. Only certain pins are capable of outputting analog signals (they can also output digital signals) using PWM, or pulse width modulation. Those pins are the ones which have a tilde (~) in front of the number.

There is, another catch. If you want to take an analog input and want to output an analog signal which depends on the input, we have to use map(), which is very handy. It takes the maximum and minimum value of the before and after, and then scales it to fit with some percentage magic.

Here's the syntax of every one of those functions.

~~~cpp showLineNumbers
// analogRead()
const int analogPin = A1;
int potentiometerValue = analogRead(analogPin);

// map()
const int fromMin = 0;
const int fromMax = 1023;
const int toMin = 0;
const int toMax = 255;

int transformedValue = map(potentiometerValue, fromMin, fromMax, toMin, toMax);

// analogWrite()
const int outputPin = 6;
pinMode(outputPin, OUTPUT);
analogWrite(outputPin, transformedValue);
~~~

(FYI; that code won't run if you copy-paste it. It's just there you help you understand how it'd look if you were to actually use it.)

And just like in the previous blog (Currents & Circuits), we're gonna have a final project!

[Here's a video](https://youtube.com/shorts/deGKOR_pwKk) of it (it turned into a goddamn short again. damn you youtube).

Let's divide it into steps again! Since now not only do we have to deal with the way of how the circuitry itself is built, we also have to worry about how the code is built.

  * Step #1

  Plan out how the circuit will be. You can also code first however what I recommend to do is to worry about the circuit, then code, since code is easier to make changes to than the circuit. You can make a sketch of how the circuit will look. It doesn't have to be exact, nor does the final product need to look exactly like it.

  Some this like this will do (this is what my teammate did):

  ![A rough sketch of how the final thing will look.](https://i.imgur.com/pN8sCIc.png)

  * Step #2

  Let's get a bit more detailed now. We're going to make an electrical schematic from the sketch that you drew. You can use [this very useful site](https://www.circuit-diagram.org/) which I've recommended in the previous blog post to make your schematics. With the schematic, you now have to make the components and wiring more precise, as it will be exactly how the final project will look. You can maybe change the pins from this one to the other, but other I advise against making changes bigger than those.

  This is how my schematic ended up looking like:

  ![The schematic version of the rough sketch.](https://i.imgur.com/WiJsA0P.png)

  * Step #3

  We've done enough for the circuit. It's code time! But before the actual thing, we can write sort of a pseudocode which describes what will happen, how it will, and where it will. After me and my team finished this step, [this](https://docs.google.com/document/d/1W15y71vhtHeL0S175_yH2bTDtMs2l3FlmsTChEU4w38/edit?usp=sharing) is how it looked.

Not only will we be building the circuit and coding the program, we will also make a little box for it to sit inside!

But first, here are some progress pictures!

![Me helping make the diagram.](https://i.imgur.com/wmD66eo.png)

![Teammate helping make the code.](https://i.imgur.com/6uGwXza.png)

![The circuit](https://i.imgur.com/mdlUWGJ.png)

And this ended up being the final code!

~~~cpp showLineNumbers
// declare variables
int val;
int pot;
int seconds;

const int green = 13;
const int yellow = 12;
const int red = 11;

void setup() {
  Serial.begin(9600);
  for (int i = 11; i < 14; i++) {
    // set all the LED pins to output
    pinMode(i, OUTPUT);
  }
}

void loop() {
  val = analogRead(A5);
  pot = map(val, 0, 1023, 300, 2000);
  seconds = 0.166 * pot;

  // turns our green on for a certain time depending on the potentiometer
  digitalWrite(green,HIGH);
  delay(pot);
  digitalWrite(green, LOW);

  // this covers the turning on and off of the yellow
  digitalWrite(yellow,HIGH);
  delay(seconds);

  digitalWrite(yellow,LOW);
  delay(seconds);

  digitalWrite(yellow,HIGH);
  delay(seconds);

  digitalWrite(yellow,LOW);
  delay(seconds);

  digitalWrite(yellow,HIGH);
  delay(seconds);

  digitalWrite(yellow,LOW);

  // red is same as for green
  digitalWrite(red, HIGH);
  delay(pot);
  digitalWrite(red, LOW);
}
~~~

It can definitely be optimized using a clever way however this is probably the best readable version.

I ended up making a soldered version of the circuit for it to fit in the box, so there's that.

Anyway, [this is the final product](https://youtube.com/shorts/8XtqkuO6OUs) me and my bro ended up with!

This was a pretty fun project that also challenged me in pretty much every way when it comes to this. It was a really nice opportunity to improve my coding, writing (this blog), soldering and circuit building skills, and I've learned many things, most of them related to the Arduino. I have never even seen an Arduino in my life before this unit and now here I am.

This will most likely be the last post on this website for a very long time unless something happens and I need this again. The source code of this website is on [my Github](https://github.com/Zhai90/robotics-portfolio), so you can always see how I got here.

Thank you for reading through all this!
`,
}

export { data as data_two };
