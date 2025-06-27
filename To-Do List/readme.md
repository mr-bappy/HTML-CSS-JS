# A To-Do-List with HTML-CSS-JS

## steps

### steps for HTML and CSS 
1. create the to-do HTML structure
2. HTML must include an input field, button with value add and a empty div with classname 'addTask' for adding task inside it.
3. set onclick event on button
3. Style it according to your preferences and make it responsive
4. create a javascript file and add it in HTML file

### steps for JavaScript
1. create a function to get task items from localStorage

2. create a function to set task items in localStorage

3. connect the input tag and 'addTask' container with DOM and store them in different variable for each

4. create a function with name 'taskAdded' for the button to add task inside 'addTask' container

5. create a array, array should contain items fetched from localStorage or array should be empty

6. Inside 'taskAdded' function
    - create li element and store it inside a variable
    - create span element and store it inside a variable
    - push the input value inside array
    - store input value inside li element 
    - store symbol 'x' inside span element
    - append span element inside li element
    - append li element inside 'addTask' container
    - set input value to empty after appending task
    - store the array elements inside localStorage
    ### conditions before adding a task
    - input field must not be empty
    - input field must not contain only spaces
    - change the alphabet to lowercase (for this you use toLowerCase() at the time of adding input value)
    - user can not add same tasks 

7. create a function, when page is refreshed show tasks that are added by user
    - use for of loop for taskArr to display tasks
    - call the function 

8. when user clicks on li, the text-decoration should be line-through 

9. when user click on symbol 'x' it should remove the task from UI, from taskArr array and update the localStorage by adding items from taskArr


live link: https://mr-bappy.github.io/HTML-CSS-JS/To-Do%20List/todo.html