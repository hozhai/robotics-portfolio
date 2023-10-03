const data = [
  {
    id: 1,
    title: "Electricity & Circuits",
    category: [1],
    createdAt: 1694184888000,
    description:
      "A dive into the circuitry world! :zap:\nThis article will cover circuitry, units of measurements and their symbols, electrical schematics, prefixes, resistance, and a lot more.",
    thumbnail: "../assets/blogs/thumbnails/1.jpg",
    content: `
# Firstly, what is a circuit?
A circuit is a *complete* and *closed* loop that allows the current (electricity) to pass through. It is **always** composed of components (such as batteries, LEDs, resistors, etc.) and conductive lines (such as breadboards, alligator clip wires, jumper wires, etc.) Also, yes, this is what they ask you at school. If you're researching as a student, this definition **will** work for you, as anything else here.

## So... how do we represent them?
Via :sparkles: *electrical schematics* :sparkles: (or circuit diagram, or wiring diagram, etc.) It usually looks something like this:

![A simple electrical circuit represented by a schematic.](https://i.imgur.com/DqihydP.png)

Of course, usually it won't be green, I just made it green for good contrast which allows you to actually see it.

Anyway, this schematic shows you a 9V in-series circuit (we'll learn what that means soon) with it's positive side connected to the longer leg of a green LED (light-emitting diode), and it's negative side connected to a 220Ω resistor (so that our LED doesn't overload and burn) which then passes through a button (a momentary switch, if you will) which finally gets attached to the other leg of the LED (if your LED doesn't turn on when pushing the button, try switching the order of the legs).

## Alright then, what's a "in series" circuit?

It is a circuit where the same electricity flows through all the components, basically a circle. Basically the schematic shown above.

### How about a parallel one?

The components are placed in different wires than the one connected to the battery, making the current split between all of the extra wires, like this:

![A parallel circuit.](https://i.imgur.com/KTc7ePc.png)

## Good to know. Also what are those weird wiggly things?

They are resistors! I know what you're thinking, *"I know what those look like and they don't wiggle like that!" (or maybe you don't know what those look like, anyway)*, but what if I told you that is indeed a resistor? Those are called schematic symbols, and are graphical representations of components. Just like how an electrical schematic is a graphical representation of a whole circuit, a schematic symbol is a graphical representation of a single component.

![Basic circuit components with their schematic symbols.](https://i.imgur.com/BH6M2Q6.png) 

*(Bear in mind that there are different variantions of a schematic symbol to represent a single component.)*

Some of those components are pretty self-explanatory. You got the wire, who does what a wire does, a battery does what a battery does, however I'll explain what the rest of those do.

* Resistor

  Adds electrical resistance to the circuit which reduces the outputting Ampere. We'll go into more detail about this later on.

* Potentiometer

  It's like a resistor, but cooler because you can spin it which changes the resistance. You can make cool things with this. We'll touch this much further detail later on along with the resistor.

* LED

  It stands for light-emitting Diode, and it does what it says (it emits light 🤯). The longer leg is where the positive charge should be attached to, and the shorter one where the negative charge should be attached to.

* Switch

  I left this for last because this is the most "complicated" out of these 6 and there are a lot of misconceptions about it. There are a lot of types of switches, but for now we'll focus on the pushbutton (momentary switch) which is probably the ones you would use when messing with circuits or in your robotics class. This is how it looks inside:

  ![The illustration of the inside of a pushbutton.](https://i.imgur.com/rjqysKF.png)

  When not pressed down, the current passes straight through to the same leg on the other side. However, when it is pressed down, there will be a "bridge" which allows the current to also pass down to the second leg.

# Nice! We're done with the basics! What now?

Prefixes! They're really important so we should get them out of the way. If you've paid attention during physics or maths class, you should breeze through this. 

## So, what are those?

You know the units of measurements? Like meters, decibels, watts, amperes, volts, etc.? They have a letter before them that means how much the value should be multiplied or divided by. Some prefixes are mili, centi, deci, kilo, mega, giga, tera, etc.. For example, a kilometer (Km) is 1000 times a meter, and a meter would be $\\frac 1 {1000}$ of a meter.


    `,
    /* 
      NOTES
      ---
     Bear in mind that there are different variantions of a schematic symbol to represent a single component. 

      1 amp is 6.24 * 10^18 electrons flowing through a certain point per second
      so 2 amps = 1.248 * 10^19
      1 amp = 1 coulomb

      voltage is a difference in electrical potential energy, per unit of change, between two points.
      1 volt = 1 joule per coulomb
      voltage is always relative
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
