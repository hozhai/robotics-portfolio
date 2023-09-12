const data = [
  {
    id: 1,
    title: "Circuits & Currents",
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

![A simple electrical circuit represented by a schematic.](https://i.imgur.com/mkb3mn1.png)

Of course, usually it won't be green, I just made it green for good contrast which allows you to actually see it.

Anyway, this schematic shows you a 9V in-series circuit (we'll learn what that means soon) with it's positive side connected to the longer leg of a green LED (light-emitting diode), and it's negative side connected to a 220Ω resistor (so that our LED doesn't overload and burn) which then passes through a momentary switch (a button, if you will) which finally gets attached to the other leg of the LED (if your LED doesn't turn on when pushing the button, try switching the order of the legs).

## Alright then, what's a "in series" circuit?
    `,
  },
];

export default data;
