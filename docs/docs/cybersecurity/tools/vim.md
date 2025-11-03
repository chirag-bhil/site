# Vim
## Installation

To check whether Vim is installed:  

    - Launch a Terminal Window

    - Type "vim"

If you're looking at the Vim splash page
![](../../assets/images/Pasted%20image%2020251103150010.png)
Then you're in luck!   

Otherwise type:

**Debian-Based Distributions:**

sudo apt install vim

**Arch-Based Distributions:**

sudo pacman -S vim

**Fedora-Based Distributions:**

sudo dnf install vim-enhanced

**Windows:**

Go to: [https://www.vim.org/download.php#pc](https://www.vim.org/download.php#pc)[](https://www.vim.org/download.php#pc)

Download and install the "self-installing-executable"

---
Lets get used to using Vim for basic text editing...

## Modes

There are three basic modes in Vim:

- Command mode is where you can run commands. This is the default mode in which Vim starts up
- Insert mode is where you insert i.e. write the text  
- Visual mode is where you visually select a bunch of text so that you can run a command/operation only on that part of the text.

These form the pillars of navigating and using Vim. Try and answer the questions and work out how to begin creating a basic text document in Vim.

**Navigation**  

Now that you know how to start creating a text document, you're going to need to know how to navigate it.

- left
- right
- up
- down
- jump to the start of a word
- jump to the end of a word

Hint, focus on key clusters, not combinations of keys for this.

**Inserting Text**

Now you're comfortable in basic typing and navigating the document, lets get into using vim in a more powerful way!

The shortcuts for appending and inserting are crucial, I suggest trying to implement them into your typing routine so that they really stick.

FOR HELP WITH THE QUESTIONS

The easiest way to ask for help is to start with executing :help during a Vim session. This will drop us into the main help file which has an overview of the basics.

To get help with a specific command, we can provide that command as an argument to the :help command. By invoking :help gg, we learn more details about gg including that <C-home> does the same thing and that by providing a [count], we can use gg to jump anywhere in a file.