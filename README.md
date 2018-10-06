# Fall 2018 React Onboarding

Congratulations on joining DEV - we are very excited to have you on board!

Before you join a project team, however, we need to complete a few training stages
designed to get you up to speed with our stack. As such, we will be making a
site in React which stores "todos," designed to introduce you to core aspects of
frontend web development.

<img src="https://media.giphy.com/media/yaR8Dux1s0fAI/giphy.gif" alt="hoora"/>

## Stage 0: Getting Started

This project assumes basic knowledge of git and JavaScript. If you feel like you need a brushup, I'd encourage you
to take some time looking at our training documents found in the dev-general repository at `dev-general/technical.`

If you do not already have node.js installed, please do so at https://nodejs.org/en/
You can check if you have it downloaded by running `node -v` and `npm -v` in your terminal.

If you do not already have git installed, please do so at https://git-scm.com/downloads

Open a terminal and make a local clone of the repository on your desktop by running the following command:

```
git clone https://github.com/jbperry004/onboardingFall18.git
```

Navigate into that directory and make your own branch of the repository by running

```
git checkout -b <YOUR_NAME>
```

Next, run the following command to install all the app's dependencies

```
npm i
```

Finally, run the following command to start the app

```
npm run start
```

You should now be able to view the app in a browser at `localhost:3000`

## Stage 1: Basic Functionality

Before commencing work on this section, please thoroughly read the 12 pages of the "Main Concepts" section of the React documentation found at https://reactjs.org/docs/hello-world.html. These are the same pages you skimmed during the interview - it is highly recommended to learn this material thoroughly before hacking at this project.

<img src="https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif" alt="spongebob" />

### Objectives:

- Learn how to navigate the file structure of a standard React repository
- Increase fluency with JavaScript
- Learn how to divide UI designs into reusable and appropriately-sized components
- Learn how to pass data between components through props
- Learn how to manipulate state amidst a hierarchical component structure.

### Specification:

Your task is to create a 'Todo Tracker' website. This single-page website should be able to perform the following actions:

- Add todos to a list
- Delete todos once they have been added
- Filter through todos by substring

Please view the demo video uploaded at [designs/Todo_Demo.m4v](designs/Todo_Demo.m4v) for an idea of what the site should look like. Do note the following
specifications:

- When there are no todos in the list, the text 'No Todos to complete' should render under 'Current Todos', and the search bar should not appear
- As soon as a todo has been added, it will appear as an unordered list element under 'Current Todos' along with the search bar. Next to the todo should be a button which deletes the todo from the list.
- The search bar updates the filtering whenever its text is changed - if a todo does not contain the text as a substring than it is taken away
- If there are todos in existence and the search bar does not match any of them, the text 'No results found' should be rendered under 'Current Todos'

At this state of the project, do not worry about styling at all (that will be the next stage!) - for now, it's most important
that you nail down the basics of data flow and state management in React.

### Recommendations

<img src="https://media.giphy.com/media/xT1R9Z8f7YIpYjLvcA/giphy.gif" alt="directions" />

Regardless of your background in React, we can break down this task. Let's outline in high-level terms a guideline for implementing the functionality of the website.

1. Breaking the user interface into different components. I've already created the `ToDoContainer` as a model for you to follow when creating new components, and you should place all of your new components inside that container.

   - I like to think of a component in React as a subset of the user interface which accomplishes one thing - for example, the "Add Todo" Bar, the bulleted list of Todos, or the search bar.
   - Furthermore, break up each component into potential subcomponents and ultimately React tags such as `div`, `ul`, or `input`.
   - It's often very helpful to draw out the user interface by hand and use the 'box' method to group individual sections into components and then sub components.

2. Now that you've established which components your app will use, consider how data should flow through your application. We can break this up into a few smaller questions:
   - What type of data needs to be stored in the app? Certainly you will want some sort of a list of todos, but what form should those todos take? A list of strings? A list of objects containing a string and an id? Do keep in mind that you will have to have a way of uniquely identifying each todo so that it can individually be deleted from the list.
   - What type of data does each component need to access? For example, if you decide to create a separate component for the unordered list of todos, that component will need to access the list of todos that you've stored somewhere in your app. Keep in mind that data flow in React is always downward - data in one component can be passed down to its child components through props, yet not vice versa. Therefore, if data needs to be accessed by two components, it needs to be stored in a common ancestor of those two components.
   - How can you update the data you've stored? If you haven't gotten my hints by now, this project will inevitably require manipulation of state. Updating state within the same component is easy - just use `this.setState()`. Things get harder, however, when you are attempting to update data outside of the same component. In other words, how can you set the state of a parent component? I'll leave that question up to you to research.

Other issues you will inevitably have to consider are how to filter the list of todos given a text input (`.match()` and `.filter()` should prove very helpful here), how to conditionally render components and text (this should be in the documentation), and how to maintain track of elements in the todo list for deletion (consider storing an `id` somewhere in the data structure you decide to use).

If still struggling to gain a foothold after reading the React documentation thoroughly and pondering these questions for a while - feel more than free to reach out to me via email or Slack. Happy coding!

### Submission

Once you have completed the requirements of the specification, commit all of your changes by running

```
git add .
git commit -m "Phase 1 Rough Draft"
```

Then, push your branch to the remote repository by running

```
git push origin <YOUR_NAME>
```

Then, navigate to the remote repository, where you should see a button telling you that you have pushed a new branch. Click on that button, which takes you the pull request page.

You will now be creating your first pull request - in other words, a submission for your code to be reviewed by me before it is merged into the codebase. Add a title to your request and a description of your work - for now, please write a paragraph or two explaining how your website works and any signficant challenges you faced when making it.

Once you submit your request, I will review your code and propose changes for you to make, and this process keeps iterating until the code is eventually approved.

<img src="https://media.giphy.com/media/3ov9kbFQpQc1oAZEs0/giphy.gif" alt="approved" />
