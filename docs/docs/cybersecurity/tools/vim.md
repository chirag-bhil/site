

# 🌀 Vim

If you’ve ever worked on a Linux system or dabbled in programming, you’ve probably heard of **Vim** — the text editor that terrifies newcomers and inspires devotion among experts.

This guide will help you **understand Vim from scratch**, learn how to **actually use it efficiently**, and even explore **advanced tricks** to make it your best friend in coding or editing configuration files.

---

## 🧠 What is Vim?

Vim stands for **Vi IMproved**, an enhanced version of the classic UNIX text editor **Vi**.  
It’s:

- **Lightweight** (runs in terminal, no GUI needed)
    
- **Blazingly fast** once mastered
    
- **Everywhere** — it’s installed by default on most UNIX/Linux systems
    

You don’t “type” in Vim like in Notepad or VS Code — instead, you **command** it.  
And that’s what makes it so powerful.

---

## ⚙️ Installation

Vim is usually pre-installed, but here’s how to install it manually:

### 🐧 Linux

```bash
sudo apt install vim          # Debian/Ubuntu
sudo dnf install vim          # Fedora
sudo pacman -S vim            # Arch
```

### 🍎 macOS

```bash
brew install vim
```

### 🪟 Windows

Download from [https://www.vim.org/download.php](https://www.vim.org/download.php)

---

## 🚀 Getting Started — The Vim Basics

Let’s open a file:

```bash
vim myfile.txt
```

You’ll see the file contents — but wait, **you can’t type yet!**

That’s because Vim operates in **modes**.

---

## 🎮 Vim Modes Explained

Vim has **three main modes**:

|Mode|Description|Switch To|Shortcut|
|---|---|---|---|
|**Normal Mode**|For navigating and editing|Press `Esc`|(default mode)|
|**Insert Mode**|For typing text|Press `i`|(`i` for insert)|
|**Visual Mode**|For selecting text|Press `v`|(`v` for visual)|

👉 You start in **Normal Mode** by default.

---

## ✍️ Basic Editing Workflow

1. **Enter insert mode**:  
    Press `i`  
    → Now type freely (like normal editors)
    
2. **Go back to normal mode**:  
    Press `Esc`
    
3. **Save and exit**:
    
    - `:w` → Save
        
    - `:q` → Quit
        
    - `:wq` → Save and quit
        
    - `:q!` → Quit without saving
        

💡 Example:

```
:wq
```

(Press `:` to enter command mode, type `wq`, and press `Enter`)

---

## 🧭 Moving Around (Navigation)

In Normal Mode, you don’t use arrow keys — you use **H, J, K, L**:

|Key|Action|
|---|---|
|`h`|Move left|
|`j`|Move down|
|`k`|Move up|
|`l`|Move right|

### Faster Movement

|Command|Action|
|---|---|
|`0`|Go to beginning of line|
|`$`|Go to end of line|
|`w`|Jump to next word|
|`b`|Jump back a word|
|`G`|Go to end of file|
|`gg`|Go to start of file|

---

## ✂️ Copy, Paste, Delete

Vim uses **yank**, **delete**, and **put** instead of copy, cut, paste.

|Command|Action|
|---|---|
|`yy`|Copy current line|
|`dd`|Delete current line|
|`p`|Paste after cursor|
|`P`|Paste before cursor|
|`x`|Delete character under cursor|
|`u`|Undo last change|
|`Ctrl + r`|Redo|

---

## 🔍 Searching and Replacing

### Search

```vim
/keyword
```

- Press `n` for next match
    
- Press `N` for previous match
    

### Replace

```vim
:%s/old/new/g
```

- `%` → entire file
    
- `g` → global (replace all)
    

💡 Example:

```
:%s/foo/bar/g
```

Replaces all “foo” with “bar”.

---

## ⚡ Useful Tricks

### Indentation

- `>>` → indent line
    
- `<<` → unindent line
    

### Line Numbers

```vim
:set number
```

### Syntax Highlighting

```vim
:syntax on
```

### Auto Indentation

```vim
:set autoindent
:set smartindent
```

---

## 🧩 Advanced Movements

|Command|Meaning|
|---|---|
|`Ctrl + d`|Move half page down|
|`Ctrl + u`|Move half page up|
|`:10`|Jump to line 10|
|`}`|Jump to next paragraph|
|`{`|Jump to previous paragraph|

---

## 🛠️ Editing Multiple Files

### Open multiple files:

```bash
vim file1 file2
```

Switch between them:

- `:n` → next file
    
- `:prev` → previous file
    

Or open new one inside Vim:

```vim
:e newfile.txt
```

---

## 🪄 Vim Configuration (Your `.vimrc`)

Create or edit:

```bash
vim ~/.vimrc
```

Add your favorite settings:

```vim
set number
syntax on
set tabstop=4
set shiftwidth=4
set expandtab
set autoindent
set hlsearch
set incsearch
```

Now Vim will behave consistently every time you open it.

---

## 🔌 Plugins — Supercharge Vim!

You can add plugins using managers like **vim-plug**.

### Install vim-plug

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
     https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

### Add Plugins in `.vimrc`

```vim
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'         " File explorer
Plug 'junegunn/fzf.vim'           " Fuzzy finder
Plug 'tpope/vim-commentary'       " Easy commenting
call plug#end()
```

Then run inside Vim:

```
:PlugInstall
```

---

## 💡 Productivity Tips

- Use `.` (dot) to **repeat last command**
    
- Use `:split` or `:vsplit` to open **multiple files in panes**
    
- Use macros to **automate repetitive edits**
    
- Learn motion commands like `daw` (delete a word) or `ci"` (change inside quotes)
    

---

## 🔥 Vim Cheat Sheet (Quick Reference)

|Action|Command|
|---|---|
|Insert text|`i`|
|Save & quit|`:wq`|
|Quit without saving|`:q!`|
|Copy line|`yy`|
|Paste|`p`|
|Undo|`u`|
|Redo|`Ctrl + r`|
|Search|`/text`|
|Replace|`:%s/old/new/g`|
|Jump to line|`:n`|
|Show line numbers|`:set number`|

---

## 🧭 Final Thoughts

Vim can seem intimidating at first, but once you “get it,” it’s **one of the most efficient tools ever made**.  
You’ll move faster, edit smarter, and feel like a hacker out of _The Matrix_.

The key is **practice** — don’t just read this. Try editing your next `.conf` or `.py` file with Vim.

---

