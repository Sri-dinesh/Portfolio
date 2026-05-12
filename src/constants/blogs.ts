export interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  mediumLink: string;
  content: string;
  imageUrl?: string;
}

export const blogs: Blog[] = [
  {
    slug: "under-the-hood-of-localhost",
    title: "UNDER THE HOOD OF “LOCALHOST”",
    description:
      "Whether you’re a front-end developer spinning up a React app or a backend engineer building and testing APIs, localhost is where it all begins. But what's actually happening?",
    date: "Mar 29, 2025",
    mediumLink:
      "https://medium.com/@sridineshS/under-the-hood-of-localhost-33c290bd2029",
    content: `
Whether you’re a front-end developer spinning up a React app or a backend engineer building and testing APIs, localhost is where it all begins. You hit that \`npm run dev\`, and boom - your browser pops open with \`http://localhost:3000\`. But have you ever stopped to wonder what’s actually happening under the hood?

### SO, WHAT IS LOCALHOST & WHY DOES IT MATTER?

Localhost isn’t just some random word programmers made up - it’s a reserved domain name that always points back to your own machine. Think of it as your computer’s “home address.” No matter where you are in the world, when you type localhost, you’re talking to your own device.

Every machine has its own localhost. Ex: If John on his laptop and Jane on her desktop both type localhost, they’re each accessing their own devices without interfering with each other.

To truly understand localhost, let’s step back and see how a website typically loads:

1.  You type \`google.com\` into your browser.
2.  Your system checks the DNS (Domain Name System) to translate \`google.com\` into an IP address.
3.  That IP address leads you to Google’s server, where your request is processed.

But when you type localhost, your computer skips all that. It doesn’t query an external DNS server - it already knows that localhost means “right here.” It directly routes the request to itself.

### LOCALHOST = 127.0.0.1

Localhost is simply a fancy name for the IP address 127.0.0.1. When you type localhost, your computer looks at its hosts file:

*   **On Linux and macOS:** \`/etc/hosts\`
*   **On Windows:** \`C:\\Windows\\System32\\drivers\\etc\\hosts\`

In this file, there’s an entry like this:
\`127.0.0.1 localhost\`

This means localhost is mapped to 127.0.0.1 by the operating system itself. And because 127.0.0.1 is a predefined loopback IP, no lookup is required - it just works.

### THE LOOPBACK INTERFACE & 127.0.0.1

The loopback interface is a virtual network interface that sends data right back to the same device. It’s like throwing a tennis ball against a wall - it bounces right back to you.

The entire 127.x.x.x range is reserved for loopback. This means:
*   127.0.0.1
*   127.0.0.2
*   Even 127.255.255.255

All of these point to your machine. However, in practice, 127.0.0.1 is the standard.

### WHY DOES THIS MATTER?

When you type localhost, your system resolves it to 127.0.0.1 and uses the loopback interface. This ensures that requests never leave your machine, making it ideal for local development, debugging, and testing sensitive applications.

### ALTERNATIVES TO LOCALHOST

You can modify your hosts file to map custom names to 127.0.0.1. For example:
\`127.0.0.1 myapp.local\`
\`127.0.0.1 api.local\`

Now, typing \`myapp.local\` or \`api.local\` in your browser will behave just like localhost. One fun hack: You can map multiple names to 127.0.0.1, allowing you to simulate different domains locally.

### WHY LOCALHOST MATTERS FOR DEVELOPERS

#### 1. TESTING APPLICATIONS
Localhost lets you test applications before deploying them live. You can:
*   Run a local web server.
*   Test APIs.
*   Debug without needing an internet connection.

#### 2. SECURITY
Requests to localhost never leave your machine, making it safe for testing sensitive applications.

#### 3. NETWORKING EFFICIENCY
The loopback interface processes requests super fast because there’s no external routing.

Example in Python:
\`\`\`python
import socket
print(socket.gethostbyname('localhost')) # Outputs: 127.0.0.1
\`\`\`

### LOCALHOST VS. PRIVATE & PUBLIC IPS

#### PUBLIC IPS
Public IPs are globally unique and assigned by ISPs to allow communication over the internet. Examples:
*   8.8.8.8 (Google’s public DNS)
*   192.0.2.1 (Example public IP)

When you visit \`google.com\`, your browser connects to Google’s public IP through the internet.

#### PRIVATE IPS
Private IPs are used only within local networks (e.g., your home Wi-Fi). Examples:
*   192.168.1.1 (Router)
*   192.168.1.100 (Your laptop)

Private IPs are not accessible from the internet directly.

#### LOCALHOST
Localhost is neither a private nor a public IP - it’s a loopback address. Unlike private IPs, localhost never leaves your machine. Unlike public IPs, it’s not assigned by an ISP. It belongs to the special 127.x.x.x range, which is reserved for loopback testing.

### IPV4 VS. IPV6

#### IPV4
IPv4 addresses are 32-bit numbers (e.g., 127.0.0.1). They support about 4.3 billion unique addresses, which was sufficient in the 1980s but is now insufficient due to the explosion of connected devices.

#### IPV6
IPv6 addresses are 128-bit numbers (e.g., \`::1\` for localhost). They provide 340 undecillion addresses, ensuring every device can have its own unique IP without NAT (Network Address Translation).

On some systems (e.g., newer macOS versions), localhost resolves to \`::1\` (IPv6) instead of 127.0.0.1 (IPv4). You can check this using:
\`ping localhost\`

If you see responses from \`::1\`, your system is using IPv6. If you see 127.0.0.1, it’s using IPv4.

### COMMON NETWORKING PITFALLS

#### 1. PORT CONFLICTS
If two services try to use the same port (e.g., both running on 3000), you’ll encounter errors. To resolve:
*   Check which service is using the port:
    *   macOS/Linux: \`lsof -i :<port>\`
    *   Windows: \`netstat -ano\`
*   Change the port configuration in your application.

#### 2. FIREWALL BLOCKING
Firewalls sometimes block access to localhost. Ensure your firewall rules allow traffic on the required ports.

#### 3. MISCONFIGURED HOSTS FILE
If someone edits the \`/etc/hosts\` file incorrectly, localhost may fail to resolve properly. Verify that the entry \`127.0.0.1 localhost\` exists.

#### 4. MIXING PRIVATE AND PUBLIC IPS
Developers sometimes mistakenly use private IPs (e.g., 192.168.x.x) instead of localhost during local development. Always prefer localhost unless explicitly working with remote machines.

### CONCLUSION!

Localhost is more than just a convenience - it’s a fundamental tool for every developer. Whether you’re testing an app, analysing network traffic, or just curious about how the internet works, localhost is always there, looping your requests right back to you.
`,
  },
];
