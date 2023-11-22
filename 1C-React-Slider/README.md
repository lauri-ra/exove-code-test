# 1C. Create a slider in react

-   Have its value stored in state
-   Have it fire an event with the value
-   Have it fire the event only when the user has stopped moving it

# Task setup and prequisities

Make sure you have node installed and then run

```
npm install
```

then start the app with

```
npm run build && npm run preview
```

The app will start at http://localhost:4173

# About the solution

For this task, I chose Vite due to its minimal and fast setup with React, which aligns well with the fairly straightforward requirements of the task.

I implemented the slider as an input element, with values ranging from 1 to 100. The selected value is managed using a state hook. When the user clicks, drags, and releases the slider handle the value updates. The onMouseUp event to keeps track when the user releases their mouse. This is then tied to an event handler 'handleSlider' that fires an event with the updated value.
