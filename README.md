# Github-Issue-Tracker

## 🚀 Live Demo

🔗 [View Live Site](https://github-issue-tracker-ziauldev.netlify.app/)

---
### 1. What is the difference between var, let, and const?
- তিনটিই variable declare করতে ব্যবহার করা হয়। কিন্তু প্রতিটির scope আর behavior আলাদা।
- var — function scoped, hoisting হয়, পুরনো পদ্ধতি। Re-declare করা যায়।
- let — block scoped, value পরে change করা যায়।
- const — block scoped, একবার assign করলে আর change করা যায় না।
.
---
### 2. What is the spread operator (...)?
- Spread operator একটি  array বা object কে আলাদা আলাদা element এ ছড়িয়ে দেয়। মূলত তিনটি কাজে Spread operator ব্যবহার করি। কোনো array কে কপি করা, কোনো array কে মার্জ করা আর function এ argument পাঠাতে।
.
---
### 3. What is the difference between map(), filter(), and forEach()?
-  তিনটাই array এর উপর loop করে, কিন্তু উদ্দেশ্য আলাদা।
- map() — প্রতিটা element transform করে নতুন array return করে।
- filter() — condition-এর ভিত্তিতে নতুন filtered array return করে।
- forEach() — array এর প্রতিটি element কে শুধু loop করে, কিছু return করে না। 
.
---
### 4. What is an arrow function?
- Arrow function হলো function লেখার একটি shorter syntax । তবে শুধূ syntax না, এর সবচেয়ে গুরুত্বপূর্ন বৈশিষ্ট হলো এটার নিজের this নেই। parent scope থেকে this নেয়। এইজন্য callback function এর ক্ষেত্রে Arrow function বেশি ব্যবহার করা হয়।
.
---
### 5. What are template literals?
- Template literal হলো string লেখার modern পদ্ধতি, backtick (``) দিয়ে লেখা হয়। এতে সরাসরি variable বা expression ${} এর ভেতরে বসানো যায়। String concatenation এর ঝামেলা থাকে না, multi line string ও সহজে লেখা যায়।
.
---