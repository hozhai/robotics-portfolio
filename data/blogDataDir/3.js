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
    `
};
export { data as data_three };
