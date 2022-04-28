*** Session management package and validation package ***
**Basics of Session managements**
- how session works in a webserver ?  what is session ?
Session is just like a piece of data that a server keeps track of a user. this keeps tracks what the user has done before/ so far, it creates a memory with an id, session and a whole bunch of data/array. and stores the required data and it sends the id back to the website and the website is going to store the id in someways(cookies/localstorage/sessionstorage). when the user leaves and comes back again the Id is still associated with the browser website. whenever user make some changes the server will look whether the sid/id is stored or not. also we can adjust the expiration date/time so that after sometimes lets say 7days 10 days the session gets expired and user get a new session. It is a way of keeping the state of the users on the server./ all the data is stored in the server.
 In JWT tokens where we can store some of the data and the token itself can decode this and see this. but in this case the website has no idea whats going on all it can see is the sid/id that is meaning less. all the other stuff is stored in the memory. 

- used cases:
1. user is logged in or not ?
2. no one is checking my login and try to hack
3. you can bring up a captcha,some questions etc. for new browser 

- web storage api ? what is localstorage and sessionstorage ?
Web storage api is used by the developers to store some data into the web browser, the data is key value pair of strings.
two mechanisms : 
i. localstorage
ii. sessionstorage

when a user visiting a web app the session gets started and we can store the desired data as soon as he close the browser or tab the session data is lost. this is very usefull than cookies because i. unlike cookies the session storage data is not being sent to the server by making the network reqquest calls and ii. it has larger capacity to hold(in cookies 4k bytes but here atleast 5mb of data)

localstorage is same as sessionstorage but the advantage is it doesnot clear itsef/ it does not come with an expiry even after closing the web browser and user come again later the data will be persisted. highest memory capacity, it depends on browser, it roughly has 5mb even you are using in mobile phone.

many companies used to store the data as it sometimes some data is not useful or relevant to store in the server. it dumps in the browser and sometimes it is useful to store for *a/b testing. getting the data from localstorage is very much faster or if we want to page speed of these websites.

They follow the same origin policy due to security reason.(protocol: http/https + host/domain: flipkart.com/amazon.in + port: 8080/8081), if we set some data for https://subhadeep.in we can not access from https://blog.subhadeep.in here the host changes.

localstorage is stored on the window object(global object) of the browser. window.localstorage
link: check google drive

*a/b testing : A/B testing (also known as split testing or bucket testing) is a method of comparing two versions of a webpage or app against each other to determine which one performs better.
------------------------------------------------------------------------------------------------






