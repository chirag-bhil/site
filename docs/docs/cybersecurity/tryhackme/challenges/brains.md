![](../../../assets/images/Pasted%20image%2020251031112046.png)

---
```bash
sudo nmap -A 10.200.109.33 -vv

Discovered open port 22/tcp on 10.200.109.33
Discovered open port 80/tcp on 10.200.109.33
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE REASON         VERSION
22/tcp open  ssh     syn-ack ttl 63 OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 2a:02:83:63:65:ce:07:13:06:2d:0f:57:fa:02:20:cd (RSA)
| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDShnVJbjXbE6R+DZKDbZOM7IvzmgdXfIWG0Kv3YXncdDr4gLA9h+zhly4+qWh4MJdaXOdK64PRO+NztYeav9/RDhVIH2zmdBGWbnh3w9lurb+EJUtHevVKTx/jA6ZnbOT3AVmOyoZROt2vtfixucCOzU4d6Y2HFMY7gE9lGIUevx1LSuIkThHPYSxkFz1NPlpL9HZDZu41gGzu1lLwVqCVF2ZTMcKRoMgjcnFsnrYrSCP0aofZQe2AvLub+JDt1BBWF3vTBFzsdl1+BxZWUctAyHsaaPIjX77KAE9hNo50k7FlPJSQT6EMSYNhFSON676eihNhUyxtHJuutvsEREyKllJTIi3NVcz274nDDiA++V8bUiE4B3ef3t5guyXxGkfAPfSrS1cvvEEpvDTeImqMKwe+ndJgDv/jH/VoP066J6PKn5q+Cnr+DGYyOnjsmeGUb3XrbqwvsoPZ6FJa400JMdpJLdUCZxH122QORI30ZgooCBD9b2peCo+ht7Uk6fM=
|   256 78:fd:b1:89:65:6a:10:6b:b9:62:99:47:d5:bb:3a:d9 (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBCbo0ORNEHq5GhtCnEDtZJYhzR+1laYYH/QSd6ceUtT84o/9Pn1dEu8BwlxUUOxoW/HXL1fWGS4gfhdyV+VBm50=
|   256 2c:67:84:ea:5d:8a:90:fc:92:a6:7e:e3:ce:b1:90:e7 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIARMGLc8KWXjT2XloVRDEfiByIqysZUedBFo1i/e9SVO
80/tcp open  http    syn-ack ttl 62 Apache httpd 2.4.29 ((Ubuntu))
| http-robots.txt: 21 disallowed entries 
| /var/www/wordpress/index.php 
| /var/www/wordpress/readme.html /var/www/wordpress/wp-activate.php 
| /var/www/wordpress/wp-blog-header.php /var/www/wordpress/wp-config.php 
| /var/www/wordpress/wp-content /var/www/wordpress/wp-includes 
| /var/www/wordpress/wp-load.php /var/www/wordpress/wp-mail.php 
| /var/www/wordpress/wp-signup.php /var/www/wordpress/xmlrpc.php 
| /var/www/wordpress/license.txt /var/www/wordpress/upgrade 
| /var/www/wordpress/wp-admin /var/www/wordpress/wp-comments-post.php 
| /var/www/wordpress/wp-config-sample.php /var/www/wordpress/wp-cron.php 
| /var/www/wordpress/wp-links-opml.php /var/www/wordpress/wp-login.php 
|_/var/www/wordpress/wp-settings.php /var/www/wordpress/wp-trackback.php
|_http-title: holo.live
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.29 (Ubuntu)
|_http-generator: WordPress 5.5.3
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.94SVN%E=4%D=10/20%OT=22%CT=1%CU=32848%PV=Y%DS=2%DC=T%G=Y%TM=68F
OS:65DC8%P=x86_64-pc-linux-gnu)SEQ(SP=102%GCD=1%ISR=10D%TI=Z%CI=Z%II=I%TS=A
OS:)SEQ(SP=103%GCD=1%ISR=10E%TI=Z%CI=Z%II=I%TS=A)OPS(O1=M509ST11NW7%O2=M509
OS:ST11NW7%O3=M509NNT11NW7%O4=M509ST11NW7%O5=M509ST11NW7%O6=M509ST11)WIN(W1
OS:=F4B3%W2=F4B3%W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN(R=Y%DF=Y%T=40%W=F507%O
OS:=M509NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N
OS:)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=
OS:S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF
OS:=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=
OS:G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)

Uptime guess: 41.979 days (since Mon Sep  8 16:35:19 2025)
Network Distance: 2 hops
TCP Sequence Prediction: Difficulty=258 (Good luck!)
IP ID Sequence Generation: All zeros
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 53/tcp)
HOP RTT       ADDRESS
1   257.76 ms 10.50.105.1
2   257.85 ms 10.200.109.33

NSE: Script Post-scanning.
NSE: Starting runlevel 1 (of 3) scan.
Initiating NSE at 16:05
Completed NSE at 16:05, 0.00s elapsed
NSE: Starting runlevel 2 (of 3) scan.
Initiating NSE at 16:05
Completed NSE at 16:05, 0.00s elapsed
NSE: Starting runlevel 3 (of 3) scan.
Initiating NSE at 16:05
Completed NSE at 16:05, 0.00s elapsed
Read data files from: /usr/bin/../share/nmap
OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 49.66 seconds
           Raw packets sent: 1376 (64.618KB) | Rcvd: 1218 (75.221KB)
```
