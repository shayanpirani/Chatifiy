# **WebSocket Chat App**

## **📌 About**

This is a simple real-time chat application built using **Node.js** and **WebSockets**. It allows multiple users to communicate instantly.

## **🚀 Quick Start**

### **1️⃣ Pull the Docker Image**

```sh
docker pull shayanhassan2912/chatify
```

### **2️⃣ Run the Container**

```sh
docker run -d -p 3000:3000 shayanhassan2912/chatify
```

### **3️⃣ Connect to WebSocket**

```js
const socket = new WebSocket("ws://localhost:3000");
```

Replace `localhost` with your **host's IP** for external connections.

