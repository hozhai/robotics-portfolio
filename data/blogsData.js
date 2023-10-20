const data = [
  {
    id: 1,
    title: "Electricity & Circuits",
    category: [1],
    createdAt: 1694184888000,
    description:
      "A dive into the circuitry world! :zap:\nThis article will cover circuitry, units of measurements and their symbols, electrical schematics, prefixes, resistance, and a lot more.",
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

### How about a parallel one?

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

* DC Motor

  Even though this is not in the image, we'll touch on this a while later.

* RGB LED

  Same as DC Motor.

# Nice! We're done with the basics! What now?

Prefixes! They're really important so we should get them out of the way. If you've paid attention during physics or maths class, you should breeze through this. 

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

### That's so cool! How about potentiometers?

Potentiometers are like resistors but they can be changed or varied, hence the reason some people refer to it as a variable resistor. They have a range, usually from around 0Ω to 10kΩ, even though they can have slight imperfections. Something cool about potentiometers is that they have 3 legs, 1 more than a resistor! This is how you would connect it:

![Illustration of a potentiometer.](https://i.imgur.com/FmcFs8G.png)

The insides are a little bit more complicated, but what you need to know is that you connect either input onto the breadboard and the output will be from the middle pin. The amount of resistance will be regulated by the little circle on top which you can twist to change the resistors. Once you see one you'll know exactly how to use it.

## That's so useful! What could we use this on?

Remember when we talked about DC Motors and RGB LEDs and how we'd on touch them later on? Well right now is later so let's check out what an RGB LED and how potentiometers could be used with them!

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



# How does electricity flow?

If you take a guess, you'll maybe think the electricity flows from positive to negative, and that's partially correct. There's something called the *conventional flow of electricity* which is the standard, and it goes from positive to negative. 

If you're a chemistry nerd, you might've thought that it's from negative to positive, which is correct. The electrons jump from atom to atom, creating current. 

But then, why do we still believe that it goes from positive to negative instead of the other way around? Well, long, long ago, people didn't have sufficient technology to know that the electricity flow was from negative to positive, and just like some of you did, they guessed that it was positive to negative, and all the electricity-related formulas and laws were developed around the fact that the electricity flowed from positive to negative.

And now, that people discovered the truth, since all of the previous formulas and stuff still work, of course, we are all too lazy to redo all of the laws and theorems and all those nerdy stuff to accommodate the actual flow of electricity.

So now we just call the positive to negative flow the *conventional flow of electricity*.

## That's so useful! What could we use this on?

Remember when we talked about DC Motors and RGB LEDs and how we'd on touch them later on? Well right now is later so let's check them out!

* DC Motor

  DC stands for "direct current", which means that the voltage is always constant. And a motor... stands for motor! 🤯. You've probably messed with these before, they are little cubes with a stick sticking out of it which spins if you connect it to electricity.




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
];

export default data;
