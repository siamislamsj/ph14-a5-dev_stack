<<<<<<< HEAD
# Dev Stack

Dev Stack is a beginner-friendly React application where users can explore popular development technologies and build their own personal technology stack.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Toastify
- JSON

## Main Features

1. Browse technology cards loaded from a local JSON file.
2. Add and remove technologies from the "Your Stack" sidebar.
3. Get toast notifications for add, duplicate, remove, and remove-all actions.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data managed inside a component and can change over time.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` stores changing data in a component. I used it for the technology list, selected stack items, loading state, and the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after a component renders. I used it to fetch the local JSON file when the app loads.

### 5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item correctly when the list changes, so React can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. In this project, the stack panel shows an empty message when no technology is selected, otherwise it shows the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
The parent passes data and functions to the child using props. The child can call a function received through props to send an action or value back to the parent.

=======
# Dev Stack

Dev Stack is a beginner-friendly React application where users can explore popular development technologies and build their own personal technology stack.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React Toastify
- JSON

## Main Features

1. Browse technology cards loaded from a local JSON file.
2. Add and remove technologies from the "Your Stack" sidebar.
3. Get toast notifications for add, duplicate, remove, and remove-all actions.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data managed inside a component and can change over time.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` stores changing data in a component. I used it for the technology list, selected stack items, loading state, and the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after a component renders. I used it to fetch the local JSON file when the app loads.

### 5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item correctly when the list changes, so React can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. In this project, the stack panel shows an empty message when no technology is selected, otherwise it shows the selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
The parent passes data and functions to the child using props. The child can call a function received through props to send an action or value back to the parent.

>>>>>>> 790dc985f4f5d5e3711c06fc18ea5f8e3cecd719
