## Question 1: Explain what event loop means and why it matters for Nodejs
My understanding of event loop is simply running tasks concurrently (running at once) instead of sequentially (one after the other) , like in nodejs, instead of tasks to hang or wait for one to finish rather they are being ran and executed as it comes without delay. This is more like a waiter taking multiple others at the same time which are being processed , instead of waiting for an order to be completed before taking the next one.





## What is the difference between require("./helpers") and require("fs")?
Require itself is to import another module/package. So, the difference between `require("./helpers")` and `require("fs")` is where nodejs should search for the file.

`require("./helpers")`, the `./` is to look in the current directory for a file called helpers. The "." means the file is that same folder as where I am importing the file. like 1 folder 2 files inside; ./helper in file 1 is to import from file 2.

`require("fs")`, the 'fs'  is to look for a built-in module that comes with Node.js itself, or to search in a special folder called node_modules for packages installed.


If I wrote `require("helpers")` instead of `require("./helpers")`, Node.js would look in the node_modules folder for a package called "helpers" rather than looking in my current directory for it and thats because I excluded "./". Since I don't have a package called "helpers" installed, this will display a lint error saying "Cannot find module 'helpers.




## Question 3: Why  A classmate asks: "Why can't the frontend just talk to the database directly? Why do we even need a backend?"
The frontend cannot talk to the database directly because it runs on a browser and anyone can inspect the website code via the console or network tab which can lead to exposing critical details that poses security threats (like modifying files, injecting corrupt data or deleting all data) to both the users and the website.

This leads to me the reason we need the backend. Backend is what secures these data in database and communicates the frontend requests made via api request to the database which is returned back to the frontend. Reason1: The backend ensures the security by simply verifing whos making a request and if there are allowed to make such request before and returns the accurate response based on the certified conditions. Reason2: The backend handles all logics required for the smooth running of a platform.

example: In a restaurant; the chair, table and menu a customer interacts with is the FRONTEND. The waiter that takes the menu request of a customer is the API REQUEST. The chef at the kitchen that receives the menu order (api request) from the waiter is the BACKEND. The ingredients (stored in the fridge or somewhere) used to prepare the menu is DATABASE. Its impossible for the customer to just enter the kitchen to order a menu, as this will be denied by the chefs as order submission is only granted to the waiters; this basically how backend security works - "whos making a request and if they are allowed to make such request."




## Question 4:   What was the hardest part of this assignment for you personally? What did you try? What did not work? How did you eventually solve it?

The hardest part for me was when I wanted to test on postman and I got server error even tho I had started my server using "npm run dev", I was confused as to why that occured but then I figured out my dev script in package.jsonn was pointing to index.js instead of server.js.

I tried all HTTP methods but the post what wasnt covered as the GET method does need a body to return a response and the post requires a body so I looked into my server.js to check the parameters required to make a POST request. I did this and it works as expected.