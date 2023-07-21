Q1. What is Emmet?
Ans: Emmet, formerly known as Zen Coding, is a popular and powerful plugin or toolkit used by web developers and designers to increase their productivity when writing HTML and CSS code. It enables users to write faster and more efficient code by using simple abbreviations and expressions that expand into full HTML or CSS code snippets.
Emmet is supported in a wide range of code editors and integrated development environments (IDEs), including Visual Studio Code, Sublime Text, Atom, and others. 

Q2. Difference between a library and framework?
ANS: Library is a collection of functions or modules that can be used to perform specific tasks, whereas a framework is a more comprehensive set of tools and guidelines that dictate the overall structure and flow of an application. Libraries provide more flexibility, while frameworks offer a higher level of abstraction and pre-defined conventions for developers to follow.

Q3. What is CDN? Whyd do we use it?
Ans: A Content Delivery Network (CDN) is a distributed network of servers located in multiple geographic locations around the world. Its primary purpose is to deliver content, such as web pages, images, videos, scripts, and other assets, to users more efficiently and with improved performance.

When you visit a website that uses a CDN, the content of that website is not served directly from the web server where the website is hosted. Instead, the content is cached and stored on the CDN's servers, which are spread across various regions. When a user requests content from the website, the CDN serves the content from the server that is geographically closest to the user. This reduces the physical distance between the user and the server, resulting in faster load times and improved overall performance.

The key reasons for using a CDN include:

Faster Load Times: CDNs can significantly improve the loading speed of a website by serving content from servers that are physically closer to the user. This reduces latency and minimizes the time it takes to retrieve the content, resulting in a faster and more responsive user experience.

Enhanced User Experience: Faster load times lead to a better user experience, as visitors to the website can access content more quickly and efficiently. Users are more likely to stay engaged and satisfied when they experience a smooth and fast-loading website.

Improved Scalability: CDNs are designed to handle high traffic volumes and distribute the load across multiple servers. This helps to improve the scalability of a website, making it capable of handling sudden spikes in traffic without overloading the origin server.

Global Reach: CDNs have servers in various locations worldwide, which means content can be delivered to users across the globe with minimal delays. This is especially beneficial for international websites with a global audience.

Reduced Server Load: By offloading the delivery of static content to the CDN, the load on the origin server is reduced. This allows the origin server to focus on processing dynamic requests, optimizing the overall server performance.

DDoS Protection: Many CDNs offer built-in protection against Distributed Denial of Service (DDoS) attacks. The distributed nature of CDNs can absorb and mitigate DDoS attacks more effectively than a single web server.

Overall, using a CDN is a smart strategy for website owners and developers who want to enhance the performance and reliability of their websites, improve user experience, and ensure their content is delivered quickly and efficiently to users worldwide.

Q4. Why is React known as React?
Ans: The name "React" comes from the way it operates, specifically its focus on "reacting" to changes in data and efficiently updating the user interface accordingly.

Q5. What is cross-origin in script tag?
Ans: CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).

Q6. What is the difference between React and ReactDOM?
Ans: React is the core library for building user interfaces, while ReactDOM is the specific package that enables React to interact with and manipulate the DOM in a web browser environment. When you develop web applications with React, you'll typically use both React and ReactDOM together to create and manage the UI components and render them into the browser's DOM.

Q7. What is difference between react.development.js react.production.js files via CDN?
ANS: 
1. react.development.js:
This version of the React library is intended for development and debugging purposes.
It includes additional error checking, warning messages, and helpful development tools that aid developers in identifying and fixing issues during development.
The file size is generally larger compared to the production version due to the inclusion of development-related features and additional code.
It is not optimized for performance, as the primary focus is on providing a better development experience and helpful debugging information.
When using react.development.js, developers can see more descriptive error messages and warnings in the browser's console, which facilitates the debugging process.

2. react.production.js:
This version of the React library is meant for production deployment, where the application is served to end-users.
It omits the development-specific features, error checking, and warning messages present in the development version.
The file size is typically smaller compared to the development version, as it excludes the additional code needed for development purposes.
The production version is optimized for performance and may include various performance enhancements like minification and dead code elimination, resulting in faster loading times and a smaller application bundle size.
Using react.production.js in a production environment helps reduce unnecessary overhead and improve the overall performance of the application.

Q8. What are async and defer?
Ans: async and defer are attributes that can be used with the <script> tag in HTML to control the loading and execution of external JavaScript files.

ASYNC
When you include a script with the async attribute, the browser will begin downloading the script file immediately, but it will not block the parsing and rendering of the HTML document.
Once the script is downloaded, it will be executed asynchronously as soon as it is available, even if the HTML parsing is not yet complete.
It is important to note that the execution order of multiple async scripts is not guaranteed. Whichever script finishes downloading first will be executed first. This means that if one script depends on another, you may encounter issues if they are both marked as async.
Use async when the script is not dependent on other scripts or the page's content and can be executed independently.

DEFER
When you include a script with the defer attribute, the browser will also begin downloading the script file immediately, but unlike async, it will defer the script execution until after the HTML parsing is complete.
The defer attribute ensures that the scripts are executed in the order they appear in the HTML document, maintaining the dependency hierarchy. This means that the scripts will be executed in the order they are encountered in the HTML, regardless of their download completion order.
Use defer when the script relies on other scripts or the page's content and needs to be executed in a specific order.