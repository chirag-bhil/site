# **Vector Cain Casefile #03: The City That Trusted Input**

**A story about how systems fail—one assumption at a time**

---

## **PROLOGUE — THE CITY**

![Image](https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fe052b103177181.5f473acf4951b.jpg?utm_source=chatgpt.com)

![Image](https://s47295.pcdn.co/wp-content/uploads/2024/01/Control-room-Main-Image-e1706630400398.jpg?utm_source=chatgpt.com)

Neon light poured over **Axiom City**—a place run by code.

Traffic lights. Power grids. Hospitals.  
All connected to a single civic AI called **ORACLE**.

People said it was unhackable.

Vector Cain didn’t believe in that word.

> “Unhackable systems don’t exist,” he muttered.  
> “Only systems that haven’t met the right question.”

---

## **CHAPTER 1 — THE FIRST DOOR (SQL INJECTION)**

![Image](https://cdn.dribbble.com/userupload/45077405/file/c8f830b0f2077ff1256d68127483a4c0.png?crop=907x680-3594x2695&format=webp&resize=400x300&vertical=center&utm_source=chatgpt.com)



![Image](https://pikwizard.com/pw/medium/181170932acefa18ce5af488327b08c0.png?utm_source=chatgpt.com)

Vector stood inside a municipal data hub.  
A junior engineer hovered nearby.

> “This terminal only accepts employee IDs,” the engineer said.  
> “No password bypass. Database-backed.”

Vector smiled.

The login box blinked.

```
EMPLOYEE_ID:
```

Vector typed:

```
admin' --
```

The screen froze.  
Then—**ACCESS GRANTED**.

### What happened in-story

The terminal trusted input and stitched it directly into an SQL query.

### What actually happened

The database query became:

```sql
SELECT * FROM employees WHERE id = 'admin' -- ';
```

The comment (`--`) killed the password check.

The city’s first gate fell—not to force, but **punctuation**.

> “Rule one,” Vector said quietly.  
> “Databases don’t think. They obey.”

---

## **CHAPTER 2 — SEEING WITHOUT TOUCHING (BLIND SQL INJECTION)**

![Image](https://images.pond5.com/green-cyber-data-streams-floating-footage-303672355_iconl.jpeg?utm_source=chatgpt.com)

![Image](https://elements-resized.envatousercontent.com/elements-video-cover-images/1a10bf27-5d82-4428-8a52-3452007dfb91/video_preview/video_preview_0000.jpg?cf_fit=cover&format=auto&q=85&s=b189c2561949929bad9d872c1d41f08ce87c44516bfbf7f6f58024e5dc9947f9&w=500&utm_source=chatgpt.com)

![Image](https://news.mit.edu/sites/default/files/images/202103/MIT-AI-Holography-01-press.jpg?utm_source=chatgpt.com)

ORACLE noticed the access—but revealed nothing.

No errors.  
No data.  
Just silence.

A defensive system.

Vector leaned back.

> “Good,” he said.  
> “Now we talk indirectly.”

He typed:

```
admin' AND 1=1 --
```

System responded normally.

Then:

```
admin' AND 1=2 --
```

The system slowed.

Vector’s eyes sharpened.

> “There you are.”

### What happened in-story

Vector asked the system **yes/no questions** using behavior, not responses.

### What actually happened

This was **Blind SQL Injection**.

The attacker learns data by observing:

- Response time
    
- Page behavior
    
- True vs false conditions
    

Painfully slow.  
Almost invisible.

> “Security that hides errors,” Vector whispered,  
> “doesn’t stop attackers. It just makes them patient.”

---

## **CHAPTER 3 — THE MIRROR ROOM (XSS)**

![Image](https://www.indusface.com/wp-content/uploads/2025/02/Code-Injection-Img-1.png?utm_source=chatgpt.com)

![Image](https://www.cynet.com/wp-content/uploads/2020/07/word-image-19.png?utm_source=chatgpt.com)

![Image](https://www.cloudflare.com/img/learning/security/threats/cross-site-scripting/xss-attack.png?utm_source=chatgpt.com)

Inside ORACLE’s citizen portal, Vector found a feedback form.

```
Leave a message for city support:
```

He typed:

```html
<script>
alert('This city listens too much');
</script>
```

He submitted.

Moments later—alerts popped up on **every admin dashboard**.

Not hacking servers.  
Hacking **browsers**.

### What happened in-story

Admins executed Vector’s code just by viewing a page.

### What actually happened

This was **Stored XSS (Cross-Site Scripting)**.

The site:

- Saved user input
    
- Displayed it without sanitizing
    
- Let browsers execute it as JavaScript
    

> “Servers aren’t always the target,” Vector said.  
> “Sometimes, users are.”

---

## **CHAPTER 4 — TALKING TO THE MACHINE (COMMAND INJECTION)**

![Image](https://i.ytimg.com/vi/VtJuT3AjPuw/maxresdefault.jpg?utm_source=chatgpt.com)

![Image](https://portswigger.net/web-security/images/os-command-injection.svg?utm_source=chatgpt.com)

![Image](https://miro.medium.com/0%2AizicYCaEmWILYRMX?utm_source=chatgpt.com)

ORACLE had a diagnostics panel:

```
Ping IP Address:
```

Vector typed:

```
127.0.0.1; whoami
```

The output returned:

```
oracle-system
```

Vector exhaled slowly.

> “Never give users a mouth,” he said,  
> “if you don’t control what they say.”

### What happened in-story

The system executed extra commands.

### What actually happened

This was **Command Injection**.

The app passed input directly to the OS:

```bash
ping [user_input]
```

No filtering.  
No sandbox.

The machine listened—and obeyed.

---

## **CHAPTER 5 — THE CORE TRUTH**

![Image](https://static.wixstatic.com/media/9b7afd_f2b8f9c7a16d4ad6b387dbf7d21dec24~mv2.png/v1/fill/w_568%2Ch_426%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/9b7afd_f2b8f9c7a16d4ad6b387dbf7d21dec24~mv2.png?utm_source=chatgpt.com)

![Image](https://elements-resized.envatousercontent.com/elements-video-cover-images/files/7ee587e2-fcfe-4337-91fc-3f84dfc3c6a5/inline_image_preview.jpg?cf_fit=cover&format=auto&q=85&s=7875175ca0f28758b778644e008d9e443efefe2939a99c578b1d8686fbf24e76&w=500&utm_source=chatgpt.com)

![Image](https://blenderartists.org/uploads/default/optimized/4X/1/6/f/16fa01aa4ff8e5f8ef5ffac777f65535487bfe59_2_1024x1024.png?utm_source=chatgpt.com)

Vector stood before ORACLE’s core.

Not broken.  
Not corrupted.

Just **too trusting**.

> “You weren’t weak,” Vector said.  
> “You were polite.”

He logged out.

The city lights stayed on.

---

## **FINAL DEBRIEF — WHAT THIS STORY TEACHES**

### 🔴 Attacks Used

1. **SQL Injection** → logic manipulation
    
2. **Blind SQL Injection** → inference through behavior
    
3. **XSS** → executing code in users’ browsers
    
4. **Command Injection** → OS-level execution
    

### 🟢 Core Lesson

Most hacks don’t break systems.  
They **convince systems to break themselves**.

### 🛡 Defense Principles (Story-Proven)

- Parameterized queries
    
- Input validation & output encoding
    
- Least privilege
    
- Never pass raw input to OS or DB
    
- Treat every input as hostile
    

---

## **LAST FRAME**

![Image](https://cdn-l.cdprojektred.com/news/147cc4c5ab4657dbb59b672a0aaef4c148320bbe.gif?utm_source=chatgpt.com)

![Image](https://i.ytimg.com/vi/oNL2oxV36A4/hq720.jpg?rs=AOn4CLCd50c5r8k47treY4XboKYsDMowCw&sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGCogVyhyMA8%3D&utm_source=chatgpt.com)

![Image](https://ih1.redbubble.net/image.5297984564.6735/bg%2Cf8f8f8-flat%2C750x%2C075%2Cf-pad%2C750x1000%2Cf8f8f8.u5.jpg?utm_source=chatgpt.com)

Vector Cain vanished into the neon rain.

The city slept again.

Not because it was secure—  
but because tonight, **it learned**.

---