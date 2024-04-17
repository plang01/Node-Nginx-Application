	Ngnix is known as a web server, the proper technical term would be “reverse proxy”. It serves as a middleman between the browser and the web servers that process requests and responses. In circumstances where multiple servers exist to handle bottlenecks, Nginx functions as load balancer and redirects traffic to the server with least active connections. 

	Node.js is a run-time environment used to create node-based web applications in javascript, but it prones to slow performance with high traffic across multiple servers and difficulty serving static contents from javascript. This is why Nginx is a great tool accompanying Node.js  

Setting up Nginx
- Access the nginx directory and modify nginx.conf file 
- To apply new configuration, use command nginx -s reload
- To start, simply type nginx

Hosting static web page with Nodejs & Expressjs
- Create a public folder that stored my code which will build my portfolio site I did from the previous summer.
- Create an app.js file to get the application running on a specified port.
- Download express module using npm install express. It will serve static files from the public folder.
- To execute, use command node app.js

If everything sets up correctly, the domain localhost will direct to my portfolio site on two different ports 3000 and 400. While the subdomain localhost/news forwards the request to CNN news site. 
