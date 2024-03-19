Each time a button is pressed , it is incremeneted below the current 
number rather than the expected behavior of one being cleared and
the other being inserted in its place.

Solution => Define the variable responsible for storing the text
outside of the loop.

Detailed :: This was how the code looked like

```javascript
let buttons = document.querySelectorAll('button');
// Attach a single event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonId = button.id; // Get the ID of the clicked button
    let text_test = document.createElement('p');
    console.log("Button clicked:", buttonId); // Log it for now
    // Use buttonId as needed for further actions
	let div = document.getElementById('screen-div');
	text_test.textContent = `${buttonId}`;
	text_test.align = 'center';
	text_test.style = 'font-size: 20px;margin-right: 0px;margin-top: 0px;margin-left: 0px;margin-bottom: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 30px;padding-left: 140px;';
	div.appendChild(text_test);
    // If you need to resolve a Promise with the buttonId:
    //resolve(buttonId);
  });
});
```
> Notice that we are defining text_test as a new variable each time
> inside of the function. then we appendchild the new variable

FIX => Remove it outside of the loop as such

```javascript
let text_test = document.createElement('p');
let buttons = document.querySelectorAll('button');
// Attach a single event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonId = button.id; // Get the ID of the clicked button
    console.log("Button clicked:", buttonId); // Log it for now
    // Use buttonId as needed for further actions
	let div = document.getElementById('screen-div');
	text_test.textContent = `${buttonId}`;
	text_test.align = 'center';
	text_test.style = 'font-size: 20px;margin-right: 0px;margin-top: 0px;margin-left: 0px;margin-bottom: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 30px;padding-left: 140px;';
	div.appendChild(text_test);
    // If you need to resolve a Promise with the buttonId:
    //resolve(buttonId);
  });
});
```
