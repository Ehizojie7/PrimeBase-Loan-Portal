

- [gcmfb-cib](#gcmfb-cib)
  - [Technology Used](#technology-used)
  - [Directory structure](#directory-structure)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)






## Technology Used

- [React.js](https://reactjs.org/)
- [Npm](https://www.npmjs.com/)
- [TailwindCss](https://tailwindcss.com/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)

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
