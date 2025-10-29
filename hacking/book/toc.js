// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="index.html">Introduction</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Cybersecurity</li><li class="chapter-item "><a href="cybersecurity/web-hacking.html"><strong aria-hidden="true">1.</strong> Web Hacking</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="cybersecurity/owasp-top10.html"><strong aria-hidden="true">1.1.</strong> OWASP Top 10</a></li><li class="chapter-item "><a href="cybersecurity/sqli.html"><strong aria-hidden="true">1.2.</strong> SQL Injection</a></li></ol></li><li class="chapter-item "><a href="cybersecurity/network.html"><strong aria-hidden="true">2.</strong> Network Security</a></li><li class="chapter-item "><a href="cybersecurity/ctf.html"><strong aria-hidden="true">3.</strong> CTF Writeups</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="cybersecurity/tryhackme.html"><strong aria-hidden="true">3.1.</strong> TryHackMe</a></li><li class="chapter-item "><a href="cybersecurity/htb.html"><strong aria-hidden="true">3.2.</strong> Hack The Box</a></li></ol></li><li class="chapter-item "><li class="part-title">Programming</li><li class="chapter-item "><a href="programming/python.html"><strong aria-hidden="true">4.</strong> Python1</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/python-basics.html"><strong aria-hidden="true">4.1.</strong> Basics</a></li><li class="chapter-item "><a href="programming/python-scripts.html"><strong aria-hidden="true">4.2.</strong> Scripts</a></li></ol></li><li class="chapter-item "><a href="programming/c.html"><strong aria-hidden="true">5.</strong> C Programming</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/c-pointers.html"><strong aria-hidden="true">5.1.</strong> Pointers</a></li><li class="chapter-item "><a href="programming/c-ds.html"><strong aria-hidden="true">5.2.</strong> Data Structures</a></li></ol></li><li class="chapter-item "><li class="part-title">Guides &amp; Tutorials</li><li class="chapter-item "><a href="guides/linux.html"><strong aria-hidden="true">6.</strong> Linux</a></li><li class="chapter-item "><a href="guides/tools.html"><strong aria-hidden="true">7.</strong> Tools</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
