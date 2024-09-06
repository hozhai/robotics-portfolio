const data = {
    id: 3,
    title: 'The Future',
    category: [2],
    createdAt: 1723168959000,
    description:
        "What's waiting in the future? ⏳ Let's find out (not really). I will be documenting my journey over time to (hopefully) success in this post!",
    thumbnail: 'https://i.imgur.com/CY2dtxr.png',
    content: `
# Small Update

{@embed:https://youtu.be/R_6jeSqG4ao}

Oh, and here's the solution for Resolve not launching correctly I mentioned about sharing in the video:

~~~sh showLineNumbers
# in your .zshrc or .bashrc
# remember, this was tested on Arch Linux, so it might not work on macos or other distros
export LD_PRELOAD=/usr/lib64/libglib-2.0.so:/usr/lib64/libgdk_pixbuf-2.0.so.0:/usr/lib64/libgio-2.0.so:/usr/lib64/libgmodule-2.0.so
~~~

then open Davinci Resolve with
~~~sh
$ /opt/resolve/bin/resolve
~~~

you can also just alias it to something that's less of a mouthful:

~~~sh
# .zshrc/.bashrc
alias resolve="/opt/resolve/bin/resolve"
~~~

there's also the two-in-one combo if you want to save lines in your file:

~~~sh
# .zshrc/.bashrc
alias resolve="LD_PRELOAD=/usr/lib64/libglib-2.0.so:/usr/lib64/libgdk_pixbuf-2.0.so.0:/usr/lib64/libgio-2.0.so:/usr/lib64/libgmodule-2.0.so /opt/resolve/bin/resolve"
~~~

# Shenanigans aside, hi!

Hey, it's been a while (practically 8 months now), and a bunch of things have changed. First things first, the site has been updated with new information, which is cool!

Second things second, I've sort of started taking coding to a more serious level, with my end goal to participate in the IOI (International Olympiad of Informatics) through either USACO (USA Computing Olympiads) or OCI (Olimpiada Chilena de Informatica).

To achieve this goal, I've decided to start utilizing the time during the coding class at my school to instead study more advanced topics. Thanks Mr. Scott for helping me achieve my dream!

My first step towards this plan is to complete the CS50x course from Harvard to fill in on any concepts that I might've overlooked when self-teaching myself coding.

So far, I've gone through Week 0 and Week 1's lectures, sections, shorts, and problem sets. Here are the scores I've gotten on my submissions!

![Scores I've gotten with check50 which make sures the code passes the tests and style50, making sure it follows style conventions](https://i.imgur.com/g6O0uU4.png)

check50 makes sure your code passes the predetermined test cases your code is designed to go through, and style50 makes sure your code follows the style conventions. So far, I've studied from Scratch, a visual programming language, to C, one of the first languages to ever language, ever.

Scratch looks nice and colorful, like this:

![Scratch code](https://i.imgur.com/xN6f4P4.png)

[Here's the game](https://scratch.mit.edu/projects/1054360272/) that the code above belongs to, but be warned; it's not that good.

C looks more cryptic, yet familiar (but that's if you've read my [Coding In Arduino blog post](https://zhai-r.netlify.app/blogs/2)), like this:

~~~c showLineNumbers
#include <stdio.h>

int main(int argc, char **argv) {
    printf("hello, world!");
}
~~~

I will keep documenting my journey!

# Day 2

Actually, it's more like, uhhh, day 7, but it's the 2nd day I'm writing here. In the near future, I might write a blog about either Neovim or Linux ([GNU/Linux](https://www.lignux.org)), as it's been about half a year since I've been using Linux, and for Neovim I started using it a couple months before actually diving into Linux.

This is how my Arch Linux w/ KDE Plasma on Wayland looks like:

![A screenshot of my desktop environment.](https://i.imgur.com/ioCIO4e.png)

Quick ad, [here's](https://github.com/Zhai90/zvim) my Neovim configuration if you're interested.

Anyway, back on topic, I've actually been working a lot on CS50 and also a bunch of other side projects I'll mention later.

I'm now on Week 4: Memory, and it's been really cool listening to David Malan teach this course.

I'm also working with a friend at teaching people at my school's coding club, which is always nice!

Back to CS50, everything went perfectly, until I stumbled upon the Tideman problem from Week 3, which bugged me for 3 days straight.

I can't post the answer as it'd be a violation of academic integrity set by the CS50 course staff, but I can give you some hints!

Firstly, don't worry about the things you learned in that week, you'll only apply 2 of all the concepts you've learned, and 1 of those concepts is even optional, as it can be replaced by a for loop, *wink wink*.

Focus on one thing at a time, and don't feel pressured to do it all by yourself. Ask a friend for hints (NOT the answer) or the DDB, CS50's duck debugger at [CS50's own AI!](https://cs50.ai), which can be really helpful, and yes, it is allowed.

I've also been working on another project which is Explora, a chilean program, and the first robotics festival here @ Chile, specifically Lo Barnechea in Santiago, so stay tuned for updates on that. It won't be in much detail, but I'll show progress as things advance.

# Day 3

*More like day 13.*

I've worked a little bit on the website for the robotics festival. [Here's the repo](https://github.com/Zhai90/festival-robotica) on Github with the current work in progress website.

Time has been lacking lately and so I haven't worked that much on the CS50 things, but I have completed the first and almost the second problem sets of week 4; volume, and the harder version of filter. So far in filter, I'm only missing the edge detection function, so hopefully I'll get that done soon.

I've also been trying to add a copy code button to the code snippets present throughout the Coding with Arduino blog and this one, but the way the blogs system was implemented here didn't allow for changes like that as I'm relying on an external library/plugin to allow Markdown to recognize "patterns" that aren't supported in normal Markdown. 

And that got me thinking...

I coded this website over a year ago, before I knew how to use Typescript (this website is fully written in Javascript), before I knew about NextJS, and before I knew how to write *good* code. You could argue that I still don't know how to write good code, but I guarantee you that it's much better than this mess of a codebase, just look at the [source code](https://github.com/Zhai90/robotics-portfolio) of this website.

Let's take a look...:

* Horrible commit messages:

![oh my god](https://i.imgur.com/1wH2s8s.png)

* Horrible implementations:

  *this is the code for the searching algorithm, it's not bad but does that mean it's good?*
![oh my god x2](https://i.imgur.com/pxSpO8G.png)

  And if you don't know why that's bad, it's searching the entirety of the data of every blog, which makes it inaccurate. If I now say soldering, that's going to make this blog appear when you search soldering in the search bar even though this blog has nothing to do with it. 

  And it's completely re-creating the array of blogs data

  And also it's slow.

  Speaking of which, I shouldn't have even used arrays; the current implementation makes it so that all blog data is downloaded the first time you enter this website, even if you haven't even gone to any of the blogs yet.

* Horrible comments (or the lack thereof at all):

  *I can't be bothered to take another screenshot and upload it into Imgur*
  ~~~jsx {3} showLineNumbers
    // ...

    // what in tghe heck is this 
    function updateFilter(event) {
        setFilter((prevFilter) => ({
            ...prevFilter,
            [event.target.name]: event.target.value
        }));
    // ...
    }
  ~~~

But then again, it was a learning process so maybe it was necessary after all.

Going back to Markdown stuff, I was thinking of trying out using MDX for Markdown, but that would require a complete rewrite of how Markdown is rendered in the website and how YouTube videos and images and lists and all that are displayed, which would take longer than I can stand.

So it's going to stay like this :)

# Day 4

*it's been a week and a half since day 3...*

I've sort of stopped worrying about this website and have been more focused on the website for the robotics event, which is now a "junta" (get-together) instead of a festival. 

I've also put the CS50 course on pause as school is starting to demand more and more attention and time from me so I'll have to push it back to when I have a lot of free time.

Here are some progress screenshots of the robotics website!:

Here's the first iteration:


![boring ahh website](https://i.imgur.com/OJlZula.png)

Actually, that's a lie, the first iteration looks more like this

![nextjs boilerplate template](https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1aHobcZ8H6WY48u5CMXlOe%2F560e6e93ced2d1af6d65cc6e7fbc914d%2FCleanShot_2024-01-12_at_09.png&w=3840&q=75&dpl=dpl_D4zFxLzzEyG4uVAuhYJLb6dbLjK6)

But that's the template you automatically get when you set up a NextJS app, so it doesn't really count.

As you can see, the first iteration that I consider is pretty barebones, it has a title, which is now outdated, has a messy one-tenth-done navigation menu, and it just looks like a 4 year old made it. Not saying that 4 year olds can't code, but even if they were able, I think that is how it would look like.

In the future, once I have time and am done with other projects, I'll make an actual real production-ready blog website also functioning as a portfolio for my projects, I may make a guide on how to get started on creating applications like these!

Anyway, that version is just the planning phase - I still didn't know what to actually put on the website, nor how it would look like, that's also why there's a blue box around the text - it's for seeing the boundaries/border of the text.

After that, this was the website

![still boring ahh website](https://i.imgur.com/Q6KKJ56.png)

The blue box is gone, and now the navigation menu is a little bit better, nothing much to see here.

The next one is a big upgrade from the previous iterations.

![not so boring ahh website](https://i.imgur.com/rV5SLRD.png)

I started using an UI library called [Aceternity](https://ui.aceternity.com/), which is where the lights and grid background come from. The avatar icon in the navigation bar comes from another UI library called [shadcn/ui](https://ui.shadcn.com/). Both are really helpful and I would 100% recommend them if you have a tight deadline but still want to create a stunning website.

After this iteration, I started experimenting with different types of background that would maybe be more eye-catching. Take a look:

![took me so long to make this gif](https://i.imgur.com/XcLHhDd.gif)

The background now looks way cooler, however I found out that when on the website, the CPU usage on my Macbook M1 Pro would rocket up to 40%, which is absolutely nuts for a website effect, so I decided to remove it. Which was a good decision, because my battery went from 80% to 20% in an hour while I was experimenting with that background effect.

It's also from Aceternity, and it works by drawing lines on the screen, and making little gradients follow the same path as the lines. I don't know why that would kill your battery, but oh well.

Oh, and at this point I've also started using [framer-motion](https://www.framer.com/motion/), an animation library that makes animating times easier.

Yeah, and so I removed that background, and experimented with some other stuff:

![updated version](https://i.imgur.com/VIeWdwp.gif)

It's back to being that grid, but it has a cool effect when you over your mouse over it. You probably can't see it very well because of the crappy gif quality, but if you really focus on it, you can see it!

And that leads to this design, which is the current one:

![last design](https://i.imgur.com/IIeBgyh.gif)

And that's all! I'll be adding more progress as time goes on.

See you next time!
    `
};
export { data as data_three };
