![](../../../assets/images/Pasted%20image%2020251031112046.png)

---
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
there is one login page on port `50000`
![](../../../assets/images/Pasted%20image%2020251101164357.png)
