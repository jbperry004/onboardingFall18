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

Our text editor of choice at DEV is VS Code because of its strong support for JavaScript libraries. Please download it here to work on your project: https://code.visualstudio.com/ - there are a lot of features to set up eventually, which we can walk through together in person.


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

## Stage 1.5: Revision and Rebase

### Specification

Please account for all of the feedback you received on stage 1. 
Learn how to maintain a clean git history

### Submission

Run
```
git log
```
to get the id number of your latest commit and copy that id number to your clipboard.

Next, please commit your code using the following command: 

```
git add .
git commit --fixup PREV_COMMIT
```

where PREV_COMMIT is the hash of the previous commit. This indicates that this is not a new commit in itself, but rather a fix of a previous commit. 

We can now merge this commit into the previous commit - squashing "fixup" commits into their mistaken earlier commits is an important part of maintaining a clean git history. 

Run 
```
git fetch origin
git rebase --autosquash origin/master
```
to "autosquash" the fixup commit into the previous commit messages. If you get any merge conflicts, fix them, `git add` the relevant files, and run `git rebase --continue` to keep going. 

Now, run 
```
git push origin YOUR_BRANCH --force
```

to push your new code onto your remote branch. You need the `--force` flag because you have modified your previous commit history. 

## Stage 2: Styling

N.B: This stage assumes basic knowledge of CSS. If you need a quick review - or even if you need to look anything up during this part of the assignment - W3Schools is a great resource for this: https://www.w3schools.com/css/default.asp

### tl;dr

-Style your REVISED code from stage 1
-Review CSS, learn Flexbox and Styled Components

### Introduction to Styling in React

Styling in React is very much similar to CSS but not quite the same. Let's go over some of the key similarities and differences!

Here at DEV, we use a very nifty library known as `styled-components` to accomplish styling in React. Its philosophy is as follows: instead of making one large CSS stylesheet for the whole site, it is easier to assign styled attributes to each component individually. For example, in this app, we can create a styled `DeleteButton` component from the more general `button` component. Here are examples of the syntax:

```
const SubmitButton = styled.button`
  width: 50%;
  margin-bottom: 10px;
  border-radius: 2px;
`;

const Container = styled(Flex)`
  background-color: blue;
  width: 100%;
  margin-top: 10px;
`;
```

When writing these components, you can use the full power of CSS when defining their properties. The best part is, however, that once we define these 'styled' components, we can use them just as we can use the components they were derived from - i.e., we can pass in the same props and attributes - the only difference is that they now contain the new styles!

For example, we can write

```
<Container>
   <SubmitButton onClick={this.handleClick}> Click me! </SubmitButton>
</Container>
```
in place of 

```
<div>
   <button onClick={this.handleClick}> Click me! </button>
</div>
```

When a project is fully styled, almost all of its components tend to be styled components instead of the basic ones like `div`, `p`, and `input`. 

N.B. - you might notice a difference between `styled.li` and `styled(Flex)` - this is because `li` is a basic, built-in component whereas `Flex` is a component we import from a library.

For more information about `styled-components`, please consult the documentation at https://www.styled-components.com/docs/basics#getting-started.

### Flexbox

You might have wondered why we use the `Flex` component in the previous example instead of `div`. This is because `Flex` allows us access to Flexbox, a powerful way of laying out components in HTML, and indeed React.

At DEV, we use Flexbox almost always (rather than `float` or `relative` positioning, for example), because of the clean way it fits into the component hierarchy which characterizes React. When a `Flex` component has children, it can dictate how it wishes its children to interact - should they be stacked in rows or columns, how they should be aligned on their main and secondary axes, and how they should react to resizing. 

Before you get started on this portion of the project, please complete the (fun!) game https://flexboxfroggy.com/ to teach yourself Flexbox - it will teach you everything you need to know in about 30 minutes! You can also find a good quick reference to Flexbox here at https://css-tricks.com/snippets/css/a-guide-to-flexbox/.

In React, when you want to employ Flexbox (which should be all the time), you use the `Flex` component, which is basically a `div` tag with the CSS property `{display: flex}` by default. To specify Flexbox-related properties for the component (such as `flex-direction`, `align-items`, or `justify-content`, however, you do not specify these with the other CSS properties in the styled component, but rather pass them as props. For example: 

```
import { Flex } from 'grid-styled'
import styled from 'styled-components'

const SubmitButton = styled.button`
  width: 50%;
  margin-bottom: 10px;
  border-radius: 2px;
`;

const Container = styled(Flex)`
  background-color: blue;
  width: 100%;
  margin-top: 10px;
`;

const Text = styled(Flex)`
  font: Arial
  font-size: 18px;
  font-weight: 300;
`

<Container flexDirection="column" justifyContent="flex-start" alignItems="center">
   <Text>Hi!</Text>
   <SubmitButton onClick={this.handleClick}> Click me! </SubmitButton>
</Container>
```

This example will ensure that the "Hi" text and the "Click me!" button will be stacked vertically, aligned to the top of the page, and aligned in the center of the page's width.

### Specification

The goal of this stage is to style your basic todo site from stage 1 into the EXACT form indicated in the video at [designs/Styled_Demo.m4v](designs/Styled_Demo.m4v). 

You're free (and encouraged!) to customize basic details (colors, fonts, etc.) but the core styling details (layout, sizing, hover states, transitions, etc.) should be exactly the same as in the video.

Do note the following: 
-When you hover over the buttons, they change color into their original border color, and the text color changes to white. This change does not happen immediately but rather over a (relatively short) transition period. 
-When you type in the input fields, the border of the field changes color and grows slightly. 

### Setup and Submission

Run:
```
npm i -s styled-components
```
and 
```
npm i -s grid-styled
```

to install the dependencies necessary for this stage of the project.

Next, for each of your `index.js` files for individual components, create a `styles.js` file in the same directory, which will have the following structure:

```
import { Flex } from 'grid-styled'
import styled from 'styled-components'

export const SubmitButton = styled.button`
  width: 50%;
  margin-bottom: 10px;
  border-radius: 2px;
`;

export const Container = styled(Flex)`
  background-color: blue;
  width: 100%;
  margin-top: 10px;
`;

export const Text = styled(Flex)`
  font: Arial
  font-size: 18px;
  font-weight: 300;
`
```

Then, you can add the following line to your `index.js` file to import the styled components for use!

```
import { SubmitButton, Container, Text } from './styles'
```

Style your code, commit, push to the same branch, and create a new pull request for me to review your code!











