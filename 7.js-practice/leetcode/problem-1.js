var createCounter = function(init) {
    let count = init;

    // Define the methods inside the function
    let increment = () => {
        return ++count;
    }

    let decrement = () => {
        return --count; // Decrement count instead of incrementing
    }

    let reset = () => {
        count = init;
        return init;
    }

    // Return an object with methods to access the counter
    return {
        increment, // Shorthand for increment: increment
        decrement, // Shorthand for decrement: decrement
        reset     // Shorthand for reset: reset
    };
};

// Example usage
let counter = createCounter(0);
counter.increment(); // Increment counter by 1
console.log(counter.count); // Output: 1
counter.decrement(); // Decrement counter by 1
console.log(counter.count); // Output: 0
counter.reset(); // Reset counter to initial value
console.log(counter.count); // Output: 0
