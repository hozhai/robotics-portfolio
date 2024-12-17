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

# Day 5?? I think??

*more like month 2*

Hey! It's been a while. It's dieciocho break at the time of me writing this, Thursday in fact, and I've just spent 5 days doing absolutely nothing but going out with my family and messing around with my computer.

For some context, I've been messing around with this new fancy toy of mine called [NixOS](https://en.wikipedia.org/wiki/NixOS) and it's awesome! In summary, it's a Linux distribution based on the Nix package manager, which basically allows your entire system to be defined in a single configuration text file, and it's really awesome, even though it is absolutely painful to learn, and the documentation is just not there.

Here's how my setup looks like so far:

![A screenshot with Neovim open in front of the browser](https://i.imgur.com/3tBW1h9.png)

I don't think you'll be interested in the nitty gritty of things, let alone fine details of this, so I won't go into it - but if you are, feel free to ask me!

Other than messing with my computer and bricking it every minute, I've also been working on the robotics event website for the event, which from now on, I'll refer to as the *robotics* website. I'll also refer to the website you're currently on reading this as the *blogs* website.

I sort of skipped over a ton of details on the last update about it, the one that showed how to website became how it is (or how it was at that point), so I'll go a bit more in depth now.

When I how the website improved, it sort of looked like as if the whole thing took 5 minutes and I never struggled at all, when that's not the case.

Firstly, to even get the progress screenshots, I had to go back to older versions of the "release" of the website in order to actually take the screenshots, as I had been so focused on getting the website done that I never really bothered doing the screenshots in place. I've in fact still not learned my lesson, but hopefully from now on I'll remember to go around taking screenshots during development.

Luckily for me, getting those screenshots was pretty intuitive. Here's how it looks like:

![Vercel's deployment tab in a project](https://i.imgur.com/bBB8eWg.png)

I just click on one of those "updates" and it'll give me a link showing how the website looked at that point. The website is named [Vercel](https://vercel.com/) and it's a platform that allows you to host your website in a "serverless" way, which in simple terms means you don't really have to pay for it (oversimplification warning). It's also the company behind [NextJS](https://nextjs.org), which is the framework, or library I build my websites with nowadays. You can imagine NextJS as something like p5, but instead of just giving you commands to draw things, it provides a special type of file with a different syntax you get to write your code with.

Anyway, back on the topic, I was talking about how the process of building the robotics website looked effortless and quick, when it wasn't. For example, if you go up and look at the avatar icon here

![Iteration number 4](https://i.imgur.com/rV5SLRD.png)

that took me a long time to get right, because when you click it, a dropdown menu actually pops down, and when you hover over it, a little tooltip appears. It looked something like this:

![Avatar with the effects](https://i.imgur.com/3AkBpnh.gif)

And even though that looks dead simple to make, it wasn't. I was going left and right trying to make it work, because since I was using pre-made components to achieve this, I had to find a way to make them work when they weren't exactly made to work together. That alone took me half an hour to do.

The cool looking background with the lights also took me a long time. If I had to guess, I probably spent at least around 2 hours just trying to make it look good, trying out different combinations of that with other things, like just one beam of light, or maybe making the background change color a little bit, etc.

From these experiences you can probably now see that things take time and mistakes to make stuff look good. Lots of time. And even more mistakes. And even more of both to not only make stuff look good, but also to be functional.

Jumping over to present time, the biggest update to the robotics website is that now you can actually log in with your Google and Github accounts. Here, take a look:

{@embed:https://www.youtube.com/watch?v=KxdkMQMGqeE}

*I know the video quality is horrible.*

You can see the accounts system in place for the website. You're supposed to be able to sign up/sign in, create your team, and be on your way to participate in the event!

Very cool and fancy page transition animation aside, you can probably guess that a lot of things in the background are happening for this to work correctly, and you would be right!

This took me, *counts fingers*, at least 3 seconds minimum to make, and a lot of ChatGPT and Gemini was involved - not because I couldn't code or anything - but because I kept getting this one error that had absolutely no information online on how I would go around fixing it. I ended up making it go away, so there's nothing to worry about until the unit tests come.

This is made using [AuthJS](https://authjs.dev/), which does all the dirty work for me and gives me abstractions (building blocks) to manufacture my own authentication (login) system! It's awesome, and it's really fun to set up.

On the way to achieving what you saw in the video, there were a crap ton of things I had to go through. Firstly, the navigation bar now looks different. It actually looks really fun now, watch:

![Navigation bar, heavily modified from Aceternity's navigation menu](https://i.imgur.com/HfBJNJi.gif)

You have no idea how annoying it was to get the thing to look like this. At first, the dropdown menus were unaligned, which started to bother me, a *LOT*, so it was back and forth hitting my head against my monitor trying to find out why in the world it wasn't aligning when I was already doing everything I could to fix it. At the end, I ended up going with a very "hacky" approach, which was to just set the maximum distance from the navbar to a fixed value, which may not seem like a bad solution, but something tells me that that implementation is definitely going to break something in the future.

Making the sign out functionality was also something out of the scope of what I knew how to do. I ended up asking ChatGPT, who told me to create an API route that when access made a POST request to sign out. In simpler terms, when you click the button, it sends you to a part of the website which detects that you're there, signs you out, and then redirects you to the home page.

There was also a lot of trying to figure out edge cases where the user for example logged in but didn't get redirected, or when the user gets stuck at the signing out page, etc.

Wow, lots of backs and forths everywhere.

From here on I'll take a break from working on the robotics website and focus more on both CS50 and the AP Compsci exam.

I forgot to mention that, I've been interested in taking the AP Exam for computer science, and it's really convenient since it's all about topics I've already known about for, *counts fingers*, the past few years, so I just need to improve my Java skills - which is what the AP Compsci exam is going to be in - so yeah. It shouldn't even be that bad since I've worked with Java quite a bit before when making Minecraft server plugins, so yeah!

I think I'll cut it off here. Thank you for reading, and I'll see you next time! Cheers!

# Day 6

I won't make the joke again.

Anyway, it's been exactly 1 week since the last update here. I'll be honest, I've not gotten much done. I've been stressing about other things in life such as school, and also my birthday is coming up on the 29th of September, which sounds fun and all but it sort of scares me that I will be having less and less time to work on what I want to work on.

I'll be turning 16, and this website will be turning one. Actually, this website already turned one a bit ago now. The website's official birthday is the 10th of August, 2023. At least that's the date of the earliest commit I made to the Github repository of this website, so I guess it would be accurate to say that it's its birthday too.

I've been working on the filter problem set of week 4 of CS50, and I've finally completed it after putting off again and again because of the edge detection function. The answer is really straightforward. You can pretty much copy the algorithm you used for the blur and do the rest. Brian Yu explains it really well in the walkthrough, so if you don't understand what the page means by "kernels" or "gx and gy", you should watch the walkthrough, and you shouldn't feel guilty about it either.

Now that I'm done with that, I can move onto the recover problem set, which I feel like is way easier (as long as you understand how to deal with the bytes you read from a file, that is), and also more fun, that could be just me though.

# ~~Day~~ Update 7

It's been 3 months since I've last written here. I've been occupied with another things in life, and haven't really remembered to update my progress here.

Here's a quick rundown of the things I've done:
  - I've decided to pretty much scrap the robotics website due to the lack of maintenance making the code harder to improve upon and extend. I'll attach a video later on.
  - I've finished week 5 of CS50, and I'm halfway through the Speller problemset.
  - Lastly, I've been messing around with Go and C++, alongside WebAssembly and Rust.

Firstly, the decision to recode the robotics website was purely because I noticed that I was too excited to make the website look cool that it wasn't really functional. It only worked on certain screen dimensions, and it had absolutely 0 mobile support, meaning that it looked horrible. Imagine the website, and putting it between two horizontal hydraulic presses.

I decided to stop working on that one and have instead made a new website applying new design choices now that I feel much more skilled in terms of web development. Here's a rough look:

{@embed:https://youtu.be/pmJ6BIVdeQA}

It really isn't a lot, and if you think that I'm making the same mistake of focusing too much on looks and too little on functionality, don't worry, I only spent 2 hours on that and the rest is just adding content and implementing some other functionality that won't take too long, such as the login system (which I already have the code for) and internalization (i18n) which basically means adding multiple language support.

As for CS50, I haven't had a lot of time nor motivation to watch the lectures, I have however been working on and off on the pending problemsets. After I've finished these, I'll then work on week 6, which is Python. For the first problem, "inheritance", it's not complicated, so if you're working on that one and cand't figure out what's going wrong, start over and don't overthink it.

In regards to Go, I wanted to learn it because it's fast, sort of like the "C of the 21st century", and pretty easy to learn. I ended up making an HTTP API server with Go following a tutorial and it was pretty fun, however, the structuring of Go projects is really confusing for me so that's the only project I ended up making with Go.

After Go, I tried C++. It's similar to C (I wonder why), it's as fast as C, it's modern, has OOP, and is widely used. I did some LeetCode with C++, and it was in general really fun. I even did the Two Sum exercise making a solution that was actually O(n) by using hashmaps!

LeetCode aside, I then messed around with WebAssembly to make a truly multi-purpose website with NextJS and C++ for the backend for fast calculations for certain tools. The documentation in regards to C++ in WebAssembly is a little bit confusing; using gcc or clang for WASM is weird, and so you have to use a third-party compiler called Emscripten, which doesn't have a lot of documentation online.

I ended up getting it to work, having exported a WASM project that had the .wasm binary, and the Javascript wrapper files that interacted with the binary. However, the issue that made me switch over to using Rust was that the automatically generated Javascript code from emcc (Emscripten's C compiler) kept throwing an error that had little to no appearance online.

As C++ and Emscripten were giving me issues, I then tried using Rust with wasm-bindgen and wasm-pack, which do seem to work but I still need to stitch it together to work with NextJS.

It may seem like I've not done a lot these 3 months, and you might be right. I went to Brazil for an international STEM competition which my team ended up winning, and then participated in other national events. Other than that, I've not done a lot :)

Next update I'll report back on how the WebAssembly implementation with NextJS is working, and I'll also make a guide on it so that others can finally not have to deal with StackOverflow threads from 2014 and no positively upvoted answers.

Peace!

# Update 8

Good news: I actually got it working. Not with C++ though; with Rust. I just couldn't get Emscripten to work, at all, so I resorted to using Rust. It's really simple to set up, and even Vercel has support for it (a tool you can use to get your website on the internet), so if you want to make a page with the sole purpose of giving you data back (called an API endpoint), you can do it with barely any configuration.

I've also been learning Svelte, but you'll get shown that later.

To get started with Rust and WebAssembly, let's create a new project. Any and all frameworks should work with no problem, unless it fundamentally changes importing files. If you are using Vite, make sure it's in a servable path. In SvelteKit, that's the $lib folder.

For this example let's use React, the most widespread and popular framework (even though they keep insisting it's a *library*). Let's get started with Vite:

~~~sh
# npm, yes you do need the extra -- for npm 8+
npm create vite@latest wasm-app -- --template react-ts

# pnpm
pnpm create vite wasm-app --template react-ts

# yarn
yarn create vite wasm-app --template react-ts

# bun, if you're fancy and like everything to be bleeding-edge
bun create vite wasm-app --template react-ts
~~~

I'll be using bun, but regardless you should be getting the same files generated.

![A photo of the terminal running the command with bun](https://i.imgur.com/AqUwbaz.png)

Ah, here it is!

![A photo of Yazi showing the files generated](https://i.imgur.com/72yFwgN.png)


Let's create a Cargo.toml file in the root with the following content. Don't worry, it's not as different as if you were to do

~~~sh
cargo init
~~~

in the same directory. Anyway:

~~~toml
[package]
name = "wasm-backend"
authors = ["Your Name Here <yournamehere@example.org>"]
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib", "rlib"]
path = "wasm/lib.rs"

[dependencies]
wasm-bindgen = "0.2.97"
console_error_panic_hook = { version = "0.1.7", optional = true }

[features]
default = ["console_error_panic_hook"]
~~~

And if you didn't know, Cargo to Rust is like NPM to Javascript, but instead of having NPM, PNPM, Yarn, Bun, and a bunch of things coded by the weird Javascript tribe people, Rust just has Cargo, and it does everything.

I bet you've noticed by now that Cargo.toml seems to serve the same purpose as package.json in an NPM project, and you'd be right.

Specifying the crate-type allows us to prepare to compile the Rust code into not an .exe, or a .out or anything like that, but a .wasm, which yeah, is a WebAssembly executable file.

The path is to specify where our Rust file will live in. In this case, it will be in wasm/, called lib.rs. If you're already familiar with Rust and are wondering why I didn't just put the Cargo.toml file inside wasm/, it's simply for rust-analyzer to know that we want Rust intellisense in this whole project, not just when our workspace is wasm/ so that we don't have to switch workspaces just for editing Rust files.

The wasm-bindgen dependency is to allow us to access the Javascript Web API directly from Rust, such as calling functions like alert(), etc. basically allowing you to use WASM as better Javascript.

console_error_panic_hook allows us to get better panic messages with WASM. "panics" in Rust just refers to runtime exceptions. It's like when you get a SyntaxError in Javascript.

Anyway, let's create the files! Here's how things should end up:

![Your directory should look something like this](https://i.imgur.com/oSv55sr.png)

And yeah, there's an extra utils.rs file that I didn't mention! That's just for console_error_panic_hook. Wow that's a mouthful.

Here's how everything in wasm/ should look:

~~~rust
// lib.rs

mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, world!");
}
~~~

~~~rust
// utils.rs

pub fn set_panic_hook() {
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
~~~

You might or might not see red errors pop up about wasm_bindgen not being defined or something along those lines; we'll worry about those later. First, let's install wasm-pack, our Rust WASM compiler wrapper. It's a wrapper, just like Cargo, meaning that it's not compiling anything, but just getting things ready for rustc (Rust compiler) to do its job. wasm-pack sets the binary target, and sets a bunch of cryptic settings to make things work flawlessly.

Here's how you might install it

~~~sh
# auto-install for *nix systems, a.k.a. Linux & MacOS
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# homebrew for MacOS (and Linux, but who uses brew for Linux anyway)
brew install wasm-pack

# through Cargo
cargo install wasm-pack

# through npm/yarn
npm install -g wasm-pack

# through pacman/yay/paru for arch linux
yay -S wasm-pack
~~~

[Here's their official website](https://rustwasm.github.io/wasm-pack/installer/) anyway if these end up outdated somehow.

And if my link ends up outdated somehow as well, [here's their GitHub repository](https://github.com/rustwasm/wasm-pack).

And if GitHub doesn't exist anymore, then I don't know what to do with ya, you probably have AI ruling over the world so just ask them. We probably don't even need WASM anymore, or websites, we just have our Neuralink chips that allows us to absorb information away.

Oh, you can install Rust and Cargo through [rustup](https://rustup.rs/) by the way. I forgot to mention that. Oops :)

Just run the following commands to get access to Cargo and Rust

~~~sh
rustup install nightly # this might take a while
rustup default nightly # if this takes a while, you should get your computer checked out
~~~

Congrats!

Anyway, back on topic. Run this in your wasm-app folder:

~~~sh
wasm-pack build --target web --release
~~~

And it should go like this:

![Terminal running wasm-pack](https://i.imgur.com/LPHilnx.png)

Congrats! You now have a .wasm binary which calls the alert() function from the Web API through Rust when it's executed!

![Yazi, again.](https://i.imgur.com/1SNjbzr.png)

As you can see, it comes with some Javascript files which have a lot of cryptic and smart code that runs the .wasm in the browser. There's also a package.json file, which means we can import this as a node module in our package.json in the root directory, however I find that it clutters package.json a lot and I just import it straight into my code.

Let's go to our src/App.tsx file, and change it to this:

~~~tsx
import { useState, useEffect } from 'react'
import init, { type InitOutput } from "../pkg/wasm_backend"

export default function App() {
  const [greetWasm, setGreetWasm] = useState<InitOutput | null>()

  useEffect(() => {
    // since init() is a promise, you can also use async/await notation
    init().then(module => {
      setGreetWasm(module)
    })
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <button onClick={() => wasm?.greet()}>Click me!</button>
    </div>
  )
}
~~~

Now go ahead, run the website!

~~~sh
# npm
npm run dev

# pnpm, yarn, bun (just skip the 'run' part)
bun dev
~~~

Click on the button, you'll see that it's now running the code! If you right click and click on Inspect, then to the Network tab and refresh the page, at some you'll see the .wasm file being downloaded! How cool is that? If you think it's still Javascript under the hood, check the pkg/ folder, there is no Javascript code that does alert() there.

You might be thinking: *If Javascript code is so slow that we have to use WebAssembly, why do we still need so much Javascript to get WASM working? Wouldn't it be faster to just run alert() in Javascript?*

And to that I say, yes, it would be faster to run alert() in Javascript, but that's not what you use WebAssembly for. You use it for machine learning, for heavy calculations, for 3D rendering, for videogames on the web, for other things that Javascript isn't that good at.

WebAssembly can be up to [**11.71~ times faster** than Javascript in certain conditions](https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193), and that matters a ton when it comes to doing a lot of complex calculations as fast as possible.

You wanna know some things made in WebAssembly?

  - [CapCut Web Editor](https://madewithwebassembly.com/showcase/capcut/)
  - [Figma](https://madewithwebassembly.com/showcase/figma/)
  - [Google Earth](https://madewithwebassembly.com/showcase/google-earth/)
  - [Lichess' Analysis Engine](https://madewithwebassembly.com/showcase/lichess/)
  - [ONNX](https://madewithwebassembly.com/showcase/onnx/)
  - [uBlock Origin (yes, the adblocker)](https://madewithwebassembly.com/showcase/ublock-origin/)

And the [list goes on](https://madewithwebassembly.com/).

## The war of the Web Frameworks
It's not quite obvious, but in a year I've gone through React to Next.js to trying out Remix.js to Solid.js to Qwik and now settling with Svelte.

A website is usually just a .html file, a skeleton with a list of elements that the browser will show to the viewer. Sometimes that website also gives you a .css file, which instead of making the skeletons go one on top of the order, makes them take shape, position, color, etc. As time went on, after the creation of HTML in the 93 by Berners-Lee, Brendan Eich got told to make a programming language for the new "internet", and to make it look like Java (bad start already).

Eich was given a few weeks to finish his job, and we ended with the amalgamation of a language we have today, with its undefined vs not defined, [] + [], [1, 2, 3] + [4, 5, 6] giving [1, 2, 34, 5, 6]. *Sigh* Javascript was not made for the server.

Anyway, they brought it to the server. We started having HTML go inside Javascript, like jQuery, and having HTML go inside other languages, like Ruby on Rails.

Then, people really started to like the idea, hence the creation of a bunch of other things.

![Timeline of web frameworks by mraible on GitHub](https://github.com/mraible/history-of-web-frameworks-timeline/blob/master/history-of-web-frameworks-timeline.png?raw=true)

Credits: mraible on GitHub

This timeline only goes up to 2019, but then people started fighting over React vs Angular, Vue vs Svelte, and with people coming up with new things such as Solid.js and Qwik, and then having meta-frameworks which are frameworks for frameworks, like Next.js and React, SvelteKit and Svelte, SolidStart and Solid, Nuxt and Vue, and so on.

And yeah, I went through that. Sort of.

I switched from React to Next.js because I was offered to work on a project that used Next.js, which turned out to not use Next.js at all but something called React Native, a tool that allows you to create mobile apps with React. I ended up folding on that because of peer pressure, so I decided to actually get into Next.js.

It was actually pretty nice, you didn't have to mess around with React Router anymore (which this blog site is built with), and you have a cool filesystem routing mechanism!

![VSCode file explorer on a Next.js project called junta-robotica on my GitHub](https://i.imgur.com/1pkcDM8.png)

I messed around with it until it just didn't feel that good to develop websites, which is the same time I heard that OpenAI's ChatGPT page was rewritten from Next.js to Remix.js, which is the first time I had heard of Remix. I tried it out, did not understand a thing, and moved back to Next.js.

I used Next.js while I looked for an alternative that was not only fun to work with but also really fast. I found Solid.js, which has a very similar syntax to React's JSX, but it's ecosystem felt too new, and a gut feeling told me it wasn't yet ready for production. For example, its most popular meta-framework, SolidStart, wasn't even in a release stage yet at that point. Now it is, but I feel like it's just not mature enough. I will, however, keep an eye on it to see how it gets better and better.

After Solid came Qwik, a framework that is really fast but in a different way. It splits its Javascript in smaller files that only gets downloaded when they're needed, so it loads blazingly fast. The problem though, is that the runtime performance is absolute crap. It's among the slowest frameworks in terms of runtime performance. I tried it out, saw it had way too many dollar sign symbols, and left.

~~~jsx
// https://qwik.dev/docs/components/events/
import { component$, useSignal } from '@builder.io/qwik';
 
export default component$(() => {
  const count = useSignal(0);
 
  return (
    <button onClick$={() => count.value++}>
      Increment {count.value}
    </button>
  );
});
~~~

That's not the actual reason though, it's mostly because it's also really new and while I like new shiny things, I want new shiny *stable* things.

Like Svelte.

Checkout Tooloxide, a collection of lightning speed fast tools written with Svelte using SvelteKit and back with the power of Rust with WebAssembly. It's still in extremely early stages of development, meaning it's practically unusable at the moment, but make sure to check it out and give it a star (maybe)!

Thank you, and peace.
    `
};
export { data as data_three };
