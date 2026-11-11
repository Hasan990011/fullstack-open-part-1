# Full Stack Open – Part 1 Exercises (1.6–1.14)

## Introduction

In this assignment, I worked on exercises 1.6–1.14 of the Full Stack Open course. The main purpose of these exercises was to understand the fundamentals of React, JavaScript, components, state management and event handling.

I created two small React applications called **Unicafe** and **Anecdotes**. While developing these applications, I learned how React updates the user interface when the application state changes and how to organize code into reusable components.

---

## 1. Unicafe – Exercises 1.6–1.11

In the Unicafe exercises, I developed a simple feedback application where users can give feedback by selecting three options:

- Good
- Neutral
- Bad

### What I implemented

**Exercise 1.6 – Unicafe Step 1**

First, I created three feedback buttons: Good, Neutral and Bad. I used React's `useState` hook to store the number of clicks for each feedback option. When a user clicks a button, the corresponding counter increases.

**Exercise 1.7 – Unicafe Step 2**

Next, I added statistics to the application. I calculated the total number of feedback responses and displayed the number of good, neutral and bad responses.

**Exercise 1.8 – Unicafe Step 3**

I added the average feedback calculation. The average is calculated using the difference between good and bad feedback divided by the total number of responses.

**Exercise 1.9 – Unicafe Step 4**

I implemented the positive feedback percentage. The application calculates the percentage of positive feedback based on the number of good responses and the total number of responses.

**Exercise 1.10 – Unicafe Step 5**

I separated the statistics into a reusable `Statistics` component. This helped me understand how components can make React applications easier to organize and maintain.

**Exercise 1.11 – Unicafe Step 6**

Finally, I improved the statistics display by using reusable components such as `Button` and `StatisticLine`. I also added a condition to display a message when no feedback has been submitted and organized the statistics into an HTML table.

### What I learned from Unicafe

Through these exercises, I learned:

- How to use the `useState` hook.
- How to handle button click events.
- How to update state based on user interactions.
- How to perform calculations using JavaScript.
- How to use conditional rendering.
- How to divide an application into smaller reusable components.
- How to pass information between components using props.

---

## 2. Anecdotes – Exercises 1.12–1.14

In the Anecdotes exercises, I developed an application that displays programming-related anecdotes. The application contains eight different anecdotes, and users can select a random anecdote and vote for their favourite one.

### What I implemented

**Exercise 1.12 – Anecdotes Step 1**

First, I created an array containing eight programming anecdotes.

I used the `useState` hook to keep track of the currently selected anecdote.

I also implemented a Next anecdote button. When the user clicks this button, the application selects a random anecdote from the array using JavaScript's `Math.random()` and `Math.floor()` methods.

**Exercise 1.13 – Anecdotes Step 2**

Next, I implemented a voting system.

I created a separate state to store the number of votes for each anecdote. When a user clicks the Vote button, the application increases the vote count of the currently selected anecdote.

I used an array to store the vote counts and updated the selected anecdote's vote count when the button was clicked.

I also displayed the number of votes below the currently selected anecdote.

**Exercise 1.14 – Anecdotes Step 3**

Finally, I implemented a feature to display the anecdote that has received the most votes.

The application checks the vote counts and identifies the anecdote with the highest number of votes. It then displays that anecdote and its vote count separately.

I also improved the user interface by organizing the quote, vote count and buttons in the centre of the application.

### What I learned from Anecdotes

Through these exercises, I learned:

- How to work with arrays in React.
- How to select random elements from an array.
- How to manage multiple pieces of state using `useState`.
- How to update array values without directly modifying the original state.
- How to handle user interactions through event handlers.
- How to find the highest value in an array.
- How to use conditional expressions to display singular and plural words correctly.
- How to build an interactive application using React.

---

## Technologies and Tools Used

- JavaScript
- React
- HTML
- CSS
- Visual Studio Code
- Vite
- Git and GitHub

## How to Run the Applications

To run either application locally:

1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal in your browser.

## Conclusion

These exercises helped me understand the basic concepts of React through practical implementation rather than only theoretical explanations.

At the beginning, I had some difficulties understanding how state, components and event handlers work together. However, by implementing each exercise step by step, I became more comfortable with React.

I also learned that breaking an application into smaller components makes the code easier to understand, reuse and maintain.

Overall, these exercises gave me a good foundation for continuing with more advanced React development in the Full Stack Open course.