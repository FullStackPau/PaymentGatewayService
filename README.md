### How to start the project
- Just execute docker compose up --build<br />
It will transpile all the typescript code in to javascript code in the dist directory.
Fixes: I think I solved the problem but just in case: if you run the first time and the node modules is missing, you have to run npm install inside backoffice and paymentgateway
- To access to the endpoints documentation: http://localhost:8000/docs
- The Backbone service is hosted in http://localhost:8000
- The Payment Gateway service is hosted in http://localhost:8200 but you can't access directly (restricted with docker)

### Payment Gateway Services
This project consists of two services: the Backbone Service and the Payment Gateway Service. The Backbone Service acts as an intermediary, redirecting requests to the Payment Gateway Service, which processes them as pay, reimburse, or partial reimburse transactions.


# Introduction
The Payment Gateway Services project is designed to handle payment transactions seamlessly. The Backbone Service, which serves as the entry point, forwards requests to the Payment Gateway Service for further processing. This setup allows for a modular and scalable architecture, making it easy to extend and enhance payment-related functionalities.

# Architecture
# General Architecture Folder:<br />
<strong>Controllers: </strong> Handle HTTP requests and manage business logic.<br />
<strong>Services: </strong>Contain application logic and perform operations.<br />
<strong>Models:</strong>  Represent data structure and define how data is manipulated.<br />
<strong>Middlewares:</strong> Functions executed before or after reaching a controller, used for validation, handling errors...<br />
<strong>Routes:</strong>  Define API routes, specify which controller handles each HTTP request.<br />
<strong>App.js/.ts:</strong> This file handles all the middlewares/functions to run the app.<br />
<strong>Index.js/.ts:</strong> Define a function to start the server.<br />
<strong>paymentproviders.js:</strong> This has all the payment providers and you can activate o deactivate inside the file.

# Backbone Service:

The Backbone Service receives incoming requests.
It redirects these requests to the Payment Gateway Service.
Acts as an intermediary to ensure smooth communication between clients and the Payment Gateway Service.

# Payment Gateway Service:

Processes payment transactions such as pay, reimburse, and partial reimburse.
Implements robust and secure payment processing logic.
Communicates with external payment providers to complete transactions.

# Technologies
- Docker
- expressjs
- typescript
- http-proxy-middleware
- Joi
- Swagger
