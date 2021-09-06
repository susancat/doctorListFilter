# BowtieGo

## Choice of Package

### axios
Compare to "fetch", it can automatically tranform data into JSON when sending requests.
The assumption is the React app need to do some data transportation with backend server.

### http-proxy-middleware
It helps to quickly build a http proxy between backend and frontend. So the requests can be sent to the particular backend routes.
Sometimes it failed to create a proxy under windows env, but works well under Mac env. I didn't find better alternatives.

### semantic-ui-react
It has a powerful pre-built dropdown menu component. So the multiple-level dropdown menu required in BowtieGo can be implemented faster. Its flaw is it doesn't have styling features. When I try to make Bootstrap 4 work together with semantic for styling and responsive design, there are some conflicts.

### mongoose
A node version package for MongoDB. Making MongoDB more compatiable to be used in Node app. I choose MongoDB for three reasons: 
1. it's my most familiar database. 
2. NoSQL database is suitable for BowtieGo case because the doctors' data existing in the format of key-value, there is no complex relations among data.
3. MongoDB compass can import .csv file very quickly. 

## Potential Improvement:
1. more decent UI: some appearances details like font, color, margin, nested dropdown menus and cards; and CSS style can be improved such as use a single css file rather than inline styling.
2. responsive web page: due to conflicts between normal css/bootstrap4 with semantic UI react, filters row isn't responsive.
3. efficiency: for example in "Filters.js" file, bind "this" within "handleChange" function rather than buttons.

## Production consideration
The "client/build" file should be resolved by 'path', otherwise the deployed app would only be directed to backend server's home page.
Any production environment variables should be saved seperatedly from the app file (for example, saved in the config setting in Heroku). 

## Any assumptions you have made when you designed the data model and API schema?
### where to save the data from doctor.csv file? 
I was considering about if I should make backend server and use database to store the doctor data, or I should only use React and save data in a file and fetch data from frontend side. 
Finally I chose to build a server and use database for the following reasons:
1. the data size is not small;
2. MongoDB compass can import csv file very quickly, the time for cleaning data can be saved. 
3. for scalable possibility. It's convinient if we need any further data manipulation on the data.

### where to do the data filter/query?
There are two solutions:
1. fetch all doctors' data, filter them from the client-side;
2. send query in requests from frontend, for example send conditions for Chinese Location to backend and fetch all qualified data back.
Finally I chose the first method cause it only send one request to the backend so the data traffic would be reduce to minimum. But it asks for high performance from frontend if data size is bigger.

### which kinds of data manipulation we need to do on these data and how about data type/structure?
1. we only need to GET the data, so only one route/API is enough;
2. "price" could be "Number", but I didn't enalbe price filter so just import the whole file directly. All of the others can be "String". 