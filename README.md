#  Rose's Gourmet Pizza - Pizza Ordering Project

## Description of the Project

This project is an attempt to implement fundamental React concepts learnt during my current phase of learning (February 2023) like components, props and state management. Other concepts like utilizing API data in React and client-side routing are also implemented within this project.

The React app is a pizza restaurant website that allows a user to browse through the home, about us, and contact us pages to learn more about the restaurant. The website also offers a menu page where users can view a variety of delicious pizzas. Once the user has viewed the menu, they are able to make an order in preparation for a hypothetical delivery.

## Deployed Site and Technology Stack

The deployed site can be found [here](https://rosesgourmetpizza.netlify.app/).

The React app also makes network requests from an external server hosted using Heroku. The backend JSON server repository can be found [here](https://github.com/benard-dev/pizza-ordering-project-backend-json-server) and the deployed database can be found [here](https://pizza-ordering-project-backend.herokuapp.com).

The wireframes (low-fidelity) used to protoype and design this project can be found [here](https://www.figma.com/file/0f2SgNnRvx6wSCsC6zU12D/Pizza-Ordering-Project---Rose's-Gourmet-Pizza?node-id=0%3A1&t=ZJSXt8510jgp48oG-1) and the wireframe prototype can be found [here](https://www.figma.com/proto/0f2SgNnRvx6wSCsC6zU12D/Pizza-Ordering-Project---Rose's-Gourmet-Pizza?page-id=0%3A1&node-id=1%3A2&viewport=988%2C426%2C0.44&scaling=min-zoom&starting-point-node-id=1%3A2).

The technology stack used for this project is as follows:
- [React](https://reactjs.org/) for the frontend development
- [React Router](https://reactrouter.com/en/main) for the client side routing
- [JSON Server](https://www.npmjs.com/package/json-server) for the dummy REST API backend 
- [React Bootsrap](https://react-bootstrap.github.io/) for styling the React components
- [Figma](https://www.figma.com/) for the mockups and designs
- [Formik](https://formik.org/) for handling form validation within React

All this is done within a single page application!

## Component Hierarchy 
```txt
└── App
    ├── NavigationBar
    ├── Home
    ├── About
    ├── Contact
    |    └── ContactSuccess
    ├── Menu
    │    └── MenuItems
    │         └── MenuItem
    └── Order
         └──OrderSuccess
```

## Project Set Up Instructions (If you want to run the app on your machine)

First, fork the repository using your Github account.

Once you have forked the repository, you can clone the code directly onto your local machine using the `git clone` command.

On your machine, in the project directory, you can run:

### `npm install`

This will install all of the node module dependencies needed to run the application. 

The terminal may prompt you to run `npm audit fix`. I recommend you run `npm audit fix --force` to get rid of any errors.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

## Authors
* [Benard Wanyande](https://github.com/benard-dev)
## License
This project is available for use under the [MIT License](https://opensource.org/license/mit/).
