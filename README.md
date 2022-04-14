## jonahduffin.com portfolio website 

This website can also be found hosted at https://jonahduffin.com

This a light-weight React application that serves as Jonah Duffin's portfolio website.

Currently the website has two features; a simple "About" page with some text about me, and a sorting algorithms demo. The idea of the site is to be built up over time as a portfolio, showcasing my web development skills.

The meat of the project is in the Sorting Algorithm Demo feature. This feature stores an array of objects, with arandom, unique integer and a current color, in state, then builds a set of appropriately sized and colored "column" components.

Several helper functions in the Sort component walk through different sorting algorithms, resetting the state of the array of objects each time a change is made. Changing the colors in the array helps the user track where the algorithm is currently working.

The AnimateSorting component is where the magic happens. Each time its children re-render, it checks to see if they're in a different position in the DOM tree. If they are, it sets them back to their previous spot and then shows an animation to the new (current) spot. This way, all the animation is handled automatically when you re-render the children in a different order. Really awesome. 

The SortHome component houses a couple options you can play with, the number of columns and the speed of the sorting algorithm.

Please reach out with any inqueries. jonahfduffin@gmail.com

