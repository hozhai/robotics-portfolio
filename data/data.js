export const data = [
  {
    id: 1,
    title: "Current & Circuits",
    category: [1],
    createdAt: 1694184888000,
    description: "A dive into the circuitry world! :zap:\nThis article will cover circuitry, units of measurements and their symbols, electrical schematics, prefixes, resistance, and a lot more.",
    thumbnail: "https://i.imgur.com/rKr81sz.jpeg",
    content: `
# Firstly, what is a circuit?
A circuit is a *complete* and *closed* loop that allows the current (electricity) to pass through. It is **always** composed of components (such as batteries, LEDs, resistors, etc.) and conductive lines (such as breadboards, alligator clip wires, jumper wires, etc.) Also, yes, this is what they ask you at school. If you're researching as a student, this definition **will** work for you, as anything else here.

## So... how do we represent them?
Via :sparkles: *electrical schematics* :sparkles: (or circuit diagram, or wiring diagram, etc.) It usually looks something like this:

![A simple electrical circuit represented by a schematic.](https://i.imgur.com/DqihydP.png)

Of course, usually it won't be green, I just made it green for good contrast which allows you to see it better.

Anyway, this schematic shows you a 9V in-series circuit (we'll learn what that means soon) with its positive side connected to the longer leg of a green LED (light-emitting diode), and its negative side connected to a 220Ω resistor (so that our LED doesn't overload and burn) which then passes through a button (a momentary switch, if you will) which finally gets attached to the other leg of the LED (if your LED doesn't turn on when pushing the button, try switching the order of the legs).

## Alright then, what's an "in-series" circuit?

It is a circuit where the same electricity flows through all the components, basically a circle. Similar to the schematic shown above.

## How about a parallel one?

The components are placed in different wires than the one connected to the battery, making the current split between all of the extra wires, like this:

![A parallel circuit.](https://i.imgur.com/KTc7ePc.png)

## Good to know. Also, what are those weird wiggly things?

They are resistors! I know what you're thinking, *"I know what those look like and they don't wiggle like that!" (or maybe you don't know what those look like, anyway)*, but what if I told you that is indeed a resistor? Those are called schematic symbols and are graphical representations of components. Just like how an electrical schematic is a graphical representation of a whole circuit, a schematic symbol is a graphical representation of a single component.

![Basic circuit components with their schematic symbols.](https://i.imgur.com/BH6M2Q6.png) 

*(Bear in mind that there are different variantions of a schematic symbol to represent a single component.)*

Some of those components are pretty self-explanatory. You got the wire, who does what a wire does, a battery does what a battery does, however, I'll explain what the rest of those do.

* Resistor

  Adds electrical resistance to the circuit which reduces the outputting Ampere. We'll go into more detail about this later on.

* Potentiometer

  It's like a resistor, but cooler because you can spin it which changes the resistance. You can make cool things with this. We'll touch on this in much further detail later on along with the resistor.

* LED

  It stands for light-emitting Diode, and it does what it says (it emits light 🤯). The longer leg is where the positive charge should be attached to, and the shorter one is where the negative charge should be attached to.

* Switch

  I left this for last because this is the most "complicated" out of these 6 and there are a lot of misconceptions about it. There are a lot of types of switches, but for now, we'll focus on the pushbutton (momentary switch) which is probably the one you would use when messing with circuits or in your robotics class. This is how it looks inside:

  ![The illustration of the inside of a pushbutton.](https://i.imgur.com/rjqysKF.png)

  When not pressed down, the current passes straight through to the same leg on the other side. However, when it is pressed down, there will be a "bridge" that allows the current to also pass down to the second leg.

* DC motor

  Even though this is not in the image, we'll touch on this a while later.

* RGB LED

  Same as DC motor.

# Nice! We're done with the basics! What now?

Prefixes! They're really important so we should get them out of the way. If you've paid attention during physics or chemistry class, you should breeze through this. 

## So, what are those?

Do you know the units of measurement? Like meters, decibels, watts, amperes, volts, etc.? They have a letter before them that means how much the value should be multiplied or divided by. Some prefixes are mili, centi, deci, kilo, mega, giga, tera, etc.. For example, a kilometer (km) is 1000 times a meter, and a meter would be $\\frac 1 {1000}$ of a kilometer. 

Here is a handy cheatsheet (check out what scientific notation means if you have no idea what the weird 10 with exponents means.): 

| Prefix    | 1 Base Unit equals: |
|:---------:|:-------------------:|
| Tera (T)  |      $10^{-12}$     |
| Giga (G)  |      $10^{-9}$      |
| Mega (M)  |      $10^{-6}$      |
| Kilo (k)  |      $10^{-3}$      |
| Base Unit |         $1$         |
| Mili (m)  |       $10^{3}$      |
| Micro (µ) |       $10^{6}$      |
| Nano (n)  |       $10^{7}$      |
| Pico (p)  |      $10^{11}$      |

Of course, there are more than the ones listed here but you'll rarely see any value that would be so extreme that the prefixes aren't listed here.

# Okay... what's next?

Resistors! They look like a bean that has been impaled by a wire right through the middle, from one end to the other. On the "bean", there are 4 or 5 stripes of colors. As you have probably inferred by now, resistors produce electrical resistance in a circuit, and the amount of resistance that a resistor resists (what a mouthful) is determined by the color stripes that I mentioned earlier. Each color represents a number, and the product of that number signifies its resistance and accuracy. Let's go deeper.

Take the following image for example:

![An illustration of a resistor with a "red, red, brown, red, gold" pattern.](https://i.imgur.com/RN9LXrm.png)

Do you know what resistance that resistor has? Well, here's another handy cheatsheet but for calculating resistance instead. Small heads up, some resistors have 4 stripes and others 5. In the one with 4 stripes, the 3rd is the multiplier while the one with 5 stripes has the 4th as the multiplier.

|  Color | 1st | 2nd | 3rd (Optional) | Multiplier |
|:------:|:---:|:---:|:--------------:|:----------:|
|  Black |  0  |  0  |        0       |   $10^0$   |
|  Brown |  1  |  1  |        1       |   $10^1$   |
|   Red  |  2  |  2  |        2       |   $10^2$   |
| Orange |  3  |  3  |        3       |   $10^3$   |
| Yellow |  4  |  4  |        4       |   $10^4$   |
|  Green |  5  |  5  |        5       |   $10^5$   |
|  Blue  |  6  |  6  |        6       |   $10^6$   |
| Purple |  7  |  7  |        7       |     N/A    |
|  Gray  |  8  |  8  |        8       |     N/A    |
| White  |  9  |  9  |        9       |     N/A    |

Here's another one for the tolerance/accuracy (the last stripe)

|  Color | Tolerance |
|:------:|:---------:|
|  Brown |  $\\pm 1\\%$ |
|   Red  |  $\\pm 2\\%$ |
|  Gold  |  $\\pm 5\\%$ |
| Silver | $\\pm 10\\%$ |

Now let's take a look at the image again: 

![An illustration of a resistor with a "red, red, brown, red, gold" pattern.](https://i.imgur.com/RN9LXrm.png)

We can see that this is a 5-striped line, which means the first 3 stripes will consist of the number, the 4th will be the exponent that will be multiplied by our number, and the 5th will be the tolerance.

The colors go in the following order: *Red Red Brown Red Gold*

Try to see if you can calculate the resistance yourself. If you can't, here's how we do it:

Red Red Brown = 2 2 1 = 221

Red = $10^2$

Gold = $\\pm5\\%$

So to calculate the resistance we would have to:

$221 \\bullet 10^2 \\pm5\\%$

Which is 22100Ω Ohms of resistance. We can also apply our knowledge with prefixes to make this number prettier. Do you remember how? If not, here's the answer: 22.1kΩ (22.1 *kilo/thousand* Ohms).

## But how do resistors impact the current?

Amperes, or the electrical current is *inversely proportional* to the resistance, which means that the higher the resistance, the lower the amount of energy that will pass through. Here is a nice visual representation of how that'd look.

![A visual representation on how resistance affects the current.](https://i.imgur.com/jwAbkVB.png)

The bottom one receives the least resistance, which means that the LED gets the most amount of electrical current out of the rest. The top one receives the most resistance, which means that the LED gets the least amount of electrical current. More resistance = less current.

## That's so cool! How about potentiometers?

Potentiometers are like resistors but they can be changed or varied, hence the reason some people refer to it as a variable resistor. They have a range, usually from around 0Ω to 10kΩ, even though they can have slight imperfections. Something cool about potentiometers is that they have 3 legs, 1 more than a resistor! This is how you would connect it:

![Illustration of a potentiometer.](https://i.imgur.com/FmcFs8G.png)

The insides are a little bit more complicated, but what you need to know is that you connect either input onto the breadboard and the output will be from the middle pin. The amount of resistance will be regulated by the little circle on top which you can twist to change the resistors. Once you see one you'll know exactly how to use it.

## That's so useful! What could we use this on?

Remember when we talked about DC motors and RGB LEDs and how we'd on touch them later on? Well right now is later so let's check out what an RGB LED and how potentiometers could be used with them!

RGB LED stands for *red green blue light-emitting diode*. Yeah I know, what a mouthful. If you've ever had or seen a gaming PC, you might already have a good idea on what the RGB part of the LED means. It means that it is capable of producing exactly 16,777,216 colors! 

But how? You might be asking. Well, it has 4 legs, 3 of them that control the color and the last one that receives either positive or negative current, depending on whether you have a common *cathode* or common *anode* RGB LED. Overall, it looks something like this:

![Illustration of an RGB LED.](https://i.imgur.com/UdYYZrW.png)

The ⚡ will accept either positive or negative charge, while the rest of the legs receive the opposite than that one. If you have negative on the longest leg, and positive on the rest and it doesn't work, try inverting all of them, so positive on the longest leg, and negative on the rest.

But why does this happen? Well, we'll learn that later. This is also the reason why the regular LED only accepts positive charge on its longer leg.

Anyway, we went a little bit off-track. What could we use a potentiometer on? With all the knowledge you have about both potentiometers and RGB LED, could you think of a cool project to build?

If not, it's fine, because I do and I did! Look at the following schematic:

![An electrical schematic.](https://i.imgur.com/rb66uHr.png)

Can you guess what it does?

It's an electrical schematic showing a common anode RGB LED with each color connected to a potentiometer. This lets you control each color (red, green, blue) to finally produce a color of your own choice. This is a really good opportunity to test your circuitry skills so if you have the materials, try to use the schematic and make it a reality!

If you don't have the materials, or if you can't get it to work, here's a video of me showcasing how I did it along with a friend:

{@embed:https://youtu.be/QCWAgekj71g}

# How does electricity flow?

If you take a guess, you'll maybe think the electricity flows from positive to negative, and that's partially correct. There's something called the *conventional flow of electricity* which is the standard, and it goes from positive to negative. 

If you're a chemistry nerd, you might've thought that it's from negative to positive, which is correct. The electrons jump from atom to atom, creating current. 

But then, why do we still believe that it goes from positive to negative instead of the other way around? Well, long, long ago, people didn't have sufficient technology to know that the electricity flow was from negative to positive, and just like some of you did, they guessed that it was positive to negative, and all the electricity-related formulas and laws were developed around the fact that the electricity flowed from positive to negative.

And now, that people discovered the truth, since all of the previous formulas and stuff still work, of course, we are all too lazy to redo all of the laws and theorems and all those nerdy stuff to accommodate the actual flow of electricity.

So now we just call the positive to negative flow the *conventional flow of electricity*.

## Okay... That is interesting.

Yep! And do you remember how some components like the LED and the RGB LED require you to have a specific charge on a specific leg? Well, some components are *polarized* and some aren't. 

What does polarized mean? It basically means that something has *poles*, in this case there are 2 poles, which are positive and negative, so some components have to only have a specific charge as an input. But some components can also be polarized but still have the order of the charges switched. You will soon see what that means.

Oh, and side note. Some components are polarized, which means that there are others that aren't polarized, like resistors and pushbuttons.

Oh, and some examples of *polarized* components are batteries, LEDs, and DC motors. 

### *Speaking of which...*

Remember when we talked about DC motors and how we'd on touch them later on? Well right now is later so let's check it out!

DC stands for "direct current", which means that the voltage is always constant. And a motor... stands for motor! 🤯. You've probably messed with these before, they are little cubes with a stick sticking out of it which spins if you connect it to electricity. 

Oh yeah, and this is how it looks like in schematics:

![An electrical schematic where a DC motor is used.](https://i.imgur.com/YAcNxbA.png)

When you have the first input as positive and the second as negative, the shaft (stick) will spin clockwise. And when you have it the other way around (first as negative, second as postive) it'll spin counter-clockwise. But why?

Well, in order to understand that, we have to look into the insides of a DC motor. It is rather complicated so I recommend you to watch [this really good video](https://www.youtube.com/watch?v=GQatiB-JHdI) and [this other really good video](https://www.youtube.com/watch?v=LAtPHANEfQo).

In short, there are a bunch of copper wires inside that switch charge every time they change charges (hence why swapping the order of the inputs also change the direction it spins) causing them to be attracted to a lot of different things in a short period of time causing them to spin a lot.

# Alright. What's next?

Let's revise something we've talked about for a little bit. There are 3 properties of electricity, which are current (or intensity), voltage, and resistance. You probably have a general idea on what the 3 all mean, but let's make sure we turn that general idea into an in-depth idea.

## Let's start with current.

The most common unit of measurement for current is Ampere, shortened "amps" or simply a capital "A", named after the French physicist *André-Marie Ampère*. 

By definition, it is the amount of electrons flowing at a given point, which in general terms means the amount of electricity that is flowing at a certain part in the circuit. Think of this as the amount of water flowing in a pipe.

To put it into perspective, your average 9V battery has a capacity of around 500mAh (milliamps per hour) which basically means it will output 500 milliamps for one hour before running out. Rewinding to when we talked about prefixes, can you turn 500 milliamps into a number? (it's 0.5).

FOr those who want to know, 1A is $6.24 \\bullet 10^{18}$ electrons flowing through a certain point per second, which is equivalent to 1 Coulomb, an unit of measurement for electrical charge. Therefore, 1A == 1C.

## How about voltage?

The only unit of measurement for voltage you'll need is called volts, or simply a capital "V", named after another physicist but from Italy called *Alessandro Volta*.

It is the difference in electrical potential energy, per unit of change, between 2 points. It is pretty complicated, so [this video](https://www.youtube.com/watch?v=TBt-kxYfync) might be useful for you if you're more of a visual learner.

But if not, simply imagine voltage as the amount of force that is pushing the electrons through a wire, or the amount of water pressure in a pipe. The higher the voltage, also the higher the current, which means they're directly proportional. Voltage is always relative.

Also for those who want to know, 1V is 1 Joule (unit of measurement for energy) per Coulomb.

## Resistance?

This one is probably the one you know most about. In case you haven't figured it out yet, the unit of measurement for it is Ohm (or Ω), and, *you guessed it*, also named after another physicist who this time is from Germany and is called *Georg Simon Ohm*.

Resistance is the amount of electrical opposition to current flow in a circuit. It basically means that it reduces the amount of current the higher the resistance, or how much the pipe gets smaller. This is called the *Ohm's Law*.

If you were to have a big pipe with water flowing through, then suddenly introduced a part where the pipe is of a way smaller diamateter, that would be a resistor. 

## And... what *exactly* is the Ohm's Law?

It is a formula used to calculate the relation between all the 3 properties we've just talked about; current, voltage, and resistance.

![The Ohm's law's formula.](https://i.imgur.com/pynvOjM.png)

Now, there's something very fun we can do with this. Let's have this hypothetical scenario.

![A schematic where the resistance from the resistor is missing.](https://i.imgur.com/t1vxrVx.png)

With the Ohm's Law's formula in mind, can you think of a way to calculate the missing resistance from the circuit? Here's a table that will help you with it.

|  **Color**  | **Voltage Drop** |
|:-----------:|:----------------:|
|    White    |       3-5V       |
| Ultraviolet |     3.1-4.4V     |
|    Violet   |     2.8-4.0V     |
|     Blue    |     2.5-3.7V     |
|    Green    |     1.9-4.0V     |
|    Yellow   |     2.1-2.2V     |
|    Orange   |     2.0-2.1V     |
|     Red     |     1.6-2.0V     |
|   Infrared  |      < 1.9V      |

If you're still confused, that's good because I'm supposed to explain before you understand it.

Anyway, in the circuit, we have 2 green LEDs and a blue LED. Looking at the table, we take the lowest value for the corresponding color. So for green, it'd be 1.9V, and 2.5V for blue. We then take those numbers and add them together. 

Since we have 2 greens and 1 blue, the equation would be 1.9 + 1.9 + 2.5, which gives us a total of 6.3V. That means that we have occupied 6.3V out of the 9V we have. LEDs aren't the only components that use up voltage, any component that makes any type of sound, heat, light, etc. will have a voltage drop.

Now, we then substract total - used, which would be 9V - 6.3V, which equals 2.7V. We know have the voltage! So far, we have 1/3 of the Ohm's Law's formula. 

![The Ohm's law's formula.](https://i.imgur.com/vbB4sf9.png)

Since we're solving for the resistance, let's make this equation fit our objective better.

![An equation solving for R.](https://i.imgur.com/C0hbYFx.png)

We're almost there, we're just missing the current (intensity). Now, how do we get that?

### TBD

## I got it! Also, what is that weird switch symbol?

If you mean this:

![A slideswitch represented in a schematic.](https://i.imgur.com/s6GzoWX.png)

That is a slide switch! There's a little button which you slide from left to right. Just like the potentiometer, it has 3 legs where the middle one is required for it to work. 

When you slide it to the left, the first leg will output the charge from the middle leg, and same when you slide it to the right except that it's the third leg that has the output now, and it looks exactly like the switch that toys have to turn on.

# Cooooool... now what?

Soldering! You get some wires, solders, a soldering station, and do cool things! Here is a little funny video I put up together of me finding a cool schematic to build, actually building it, and then making it into the soldered version!

(Make sure to turn on volume if you want to understand the comedy) (I am so bad at making jokes)

{@embed:https://youtu.be/J0XeoG621JE}

If you actually want to learn how to solder instead of watching a goofy guy online, [here](https://www.youtube.com/watch?v=Qps9woUGkvI) and [here](https://www.youtube.com/watch?v=ZwU9SqO0udU) are videos that might actually help.

And now onto our big project! This is a project I also did and what it does is combine all of our knowledge into one big thing.

Firstly, see if you can make a schematic of [this](https://drive.google.com/file/d/1y_8tcj6D8rY385ERvEEO97JFpH5u_Zgv/view) (I couldn't turn this into a YouTube video because it kept turning it into a Short format which doesn't work in my website).

Next, after drawing the schematic using an [editor](https://www.circuit-diagram.org/), calculate the resistor values needed for the LEDs to not burn but also not starve from electricity.

After that, turn it into a real deal by getting any glove (you don't even need one if you don't have one) and using copper tape along with a breadboard with the circuit.

Try to even add extra functionalities to it! Maybe you can add functionality with another finger, maybe it makes a noise if you do something, etc...

If you want to see how I did it, here are the steps.

  * Step #1.

  Draw the schematic. Here's the result (I planned ahead for the extra functionality so I incluided it in the schematic as well):

  ![An electrical schematic.](https://i.imgur.com/RcXjCyC.png)

  * Step #2 (which I already did).

  Figure out the values needed for the resistors. Since the there were 3 LEDs of each type, and we used green, yellow, and red, 

    `,
    /*
      NOTES
      ---
      Bear in mind that there are different variants of a schematic symbol to represent a single component.
 
      1 amp is 6.24 * 10^18 electrons flowing through a certain point per second
      so 2 amps = 1.248 * 10^19
      1 amp = 1 coulomb
 
      voltage is a difference in electrical potential energy, per unit of change, between two points.
      1 volt = 1 joule per coulomb
      voltage is always relative
    */
    /*
      FINAL REFLECTION FOR GLOVE PRACTICAL
      ---
      1. I didn't really know how wires worked. I knew that atoms had positive and negative charge but I didn't know how that charge could be transferred since those were electrons. Now I know that the copper atoms can have their electrons jump between each of them.
      2. I have been able to use my understanding of electronics in the glove practical project and all the projects prior to that one.
      3. I am still curious about how more complicated components like transistors and piezo buzzers work.
    */
    /*
      SOURCES
      ---
      https://www.youtube.com/watch?v=8gvJzrjwjds&list=PLzqS33DOPhJkRn6e9_OTdQwRojO8qlusI&ab_channel=Afrotechmods
      https://www.youtube.com/watch?v=TBt-kxYfync&list=PLzqS33DOPhJkRn6e9_OTdQwRojO8qlusI&index=3
    */
  },
  {
    id: 2,
    title: "Coding in Arduino",
    category: [2],
    createdAt: 1698167661000,
    description: "It's Arduino time! 🤖",
    thumbnail: "https://i.imgur.com/T7M5B8x.jpg",
    content: `
# What the hell is an Arduino?

I know that right after learning about basic circuitry, this might be a bit overwhelming, but trust me, it won't be very soon. An Arduino is a little computer that has little holes that can be input and outputs, referred as pins. You can connect those pins into a breadboard to make a basic circuit. You can also connect the Arduino itself to your computer using a USB 2.0 Type B connector to upload code to it.

## Okay... How?

You can download the [Arduino IDE here](https://www.arduino.cc/en/software), which has all the tools that you need to code an Arduino. It is available for Windows, MacOS & Linux. 

If you're built different, you can use the [Arduino extension for VS Code](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino) so that you can enjoy all the features of VS Code but also be able to use it to code an Arduino. I recommend you to do this ONLY if you know what you're doing, since it might not work if you have something not setup correctly.

After you have the IDE of your choice & an Arduino plugged in, select your board type (I'll be using an Arduino Uno) and the port (look for the one that says something about USB, unless you're not using USB). You are able to do so in the Arduino IDE by going on the top left corner and looking for the select menu, and on the status bar in VS Code.

## Now what?

Before you actually do anything with that, let's first dive into a little bit of theory. Arduino files end in a .ino extension, and they're usually called sketch.ino. The language used for coding is a fork (variation) of the popular C++, which means it'll have C++ syntax and functionalities. If you already have experience with coding such as Javascript, Python, any language in the C family (C, C#, C++, *duh*) you'll breeze through this. C++ syntax looks something like this:

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
`,
  },
];
