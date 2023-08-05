

- Introduction
  - [Technology Used](#technology-used)
  - [Directory structure](#directory-structure)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)


 PrimeBase Micro Finance Loan Lending Company

 
This project aims to create a simple and classic webpage using ReactJS that interacts with the PrimeBase micro finance loan lending company API. The API documentation is accessible through the provided Postman link.



API Documentation



You can access the API documentation on Postman by clicking here. The base URL for the API is https://okigwecreations.online/api/.

Functionality




The backend engineer has provided the following functions in the API:



Request for a loan (request_for_loan): Allows users to request a loan from the micro finance company.




Get the list of all loan requests (get_all_loan_request): Retrieves the list of all loan requests made to the company.



Fetch the repayment breakdown for each loan request (get_repayment_schedule): Provides the repayment schedule for each loan request.



How to Use
Follow the steps below to utilize the web application:




Step 1: API Documentation



Please refer to the API documentation provided in the Postman link mentioned above. Familiarize yourself with the request and response formats for each function.




Step 2: Accessing the Web App
Clone the repository from GitHub: 

Install dependencies:
npm install
npm install --legacy-peer-deps  (only if neccessary)



Run the application:


npm start



Access the web app in your browser at http://localhost:3000.



Step 3: Interacting with the API



Once the web app is running, you will find a simple and intuitive interface that allows you to perform the following actions:




Request a loan: Fill in the necessary information and submit the loan request to the PrimeBase micro finance company.



View all loan requests: See a list of all loan requests made to the company.



Fetch repayment breakdown: For each loan request, you can view the repayment schedule to understand the installment amounts and due dates.



Please ensure that the backend engineer's provided API is up and running before interacting with the web app.


Contributors


Matthias Ehizojie


Feel free to contribute to this project by raising issues or submitting pull requests. Your contributions are greatly appreciated!



## Technology Used

- [React.js](https://reactjs.org/)
- [Npm](https://www.npmjs.com/)
- [TailwindCss](https://tailwindcss.com/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- Fetch Api: To handle API requests and responses.


## Directory structure

```
/
|-- src/
|   |-- hooks                                        # Custom hooks
|   |-- pages                                        # Routes rendered to the user
|   |-- plugins                                      # Plugin config used by the app
|   |-- services                                     # Api endpoint register
|   |-- utils                                        # Utility functions used by the app
|   |
|   |-- app/
|   |   |-- Controllers/                             # Flow logic
|   |   |-- HelperFunctions/                         # Re-usable Functions
|   |   |-- Listeners/                               # Listeners to emitted events
|   |   |-- Middleware/                              # Middleware triggered on specific request context
|   |   |-- Models/                                  # Database models
|   |   |-- Validations/                             # Form validators
|
|-- .github                                          # GitHub Actions

```

## Prerequisites

Below are the pre-requisites needed to run the project:

- **NodeJS (v18)**
  <br> This is the JavaScript Runtime Environment for running JavaScript on the server, you can download NodeJS when you visit the url, https://www.nodejs.org/

  You can follow the instructions for installation outlined on the website.

- **ReactJS**
  <br> This is the javascript frontend framework utilized in building the Frontend application. There is no need to install ReactJS independently on your system because it is a project dependency which will be installed once you install the Portal project packages.

## Getting started

1. Install packages

   - `npm install`

2. Update .env

   - `create .env in the root directory and copy the content of .env.example` or use the command <br />

```
  cp .env.example .env
```

1. Run app in development mode

   - `npm run start`
