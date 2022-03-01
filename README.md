# Create an Application which will display a list of items, handling user input, and updating the UI when that data changes

npx create-react-app react-tracking-list

cd react-tracking-list

npm i redux --save-dev

npm i react-redux --save-dev

# Defining Requirements​

Let's start by figuring out the initial business requirements for this application:

    The UI should consist of three main sections:
        An input box to let the user type in the text of a new todo item
        A list of all the existing todo items
        A footer section that shows the number of non-completed todos, and shows filtering options

    Todo list items should have a checkbox that toggles their "completed" status. We should also be able to add a color-coded category tag for a predefined list of colors, and delete todo items.

    The counter should pluralize the number of active todos: "0 items", "1 item", "3 items", etc

    There should be buttons to mark all todos as completed, and to clear all completed todos by removing them

    There should be two ways to filter the displayed todos in the list:
        Filtering based on showing "All", "Active", and "Completed" todos
        Filtering based on selecting one or more colors, and showing any todos whose tag that match those colors

# Design the star\te value

    The actual list of current todo items

    The current filtering options

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
