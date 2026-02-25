1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById:

- Selects an element using its unique ID.
- Returns one element.

getElementsByClassName:

- Selects all elements with the same class.
- Returns an HTMLCollection (updates automatically if DOM changes).

querySelector:

- Selects the first matching element using CSS selectors (ID, class, tag).
- Returns one element.

querySelectorAll:

- Selects all matching elements using CSS selectors.
- Returns a NodeList (does not auto-update).

2. How to Create and Insert a New Element

1. Select the parent container.
1. Create a new element using document.createElement().
1. Add content using innerHTML or textContent.
1. Insert it using appendChild().

1. What is Event Bubbling?

- When an event occurs on a child element, it moves upward to its parent, then to ancestors.
- Useful because one parent event listener can manage events for many child elements.

4. What is Event Delegation?

- Adding one event listener to a parent to control events from multiple child elements.
- Reduces the need for multiple event listeners.

5. Difference Between preventDefault() and stopPropagation()

preventDefault():

- Stops the default action of an element (e.g., link redirect, form submit).

stopPropagation():

- Stops the event from bubbling to parent elements.
