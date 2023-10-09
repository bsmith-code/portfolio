export const STUDY_GUIDE: Record<
  string,
  { question: string; answer: string }[]
> = {
  Javascript: [
    {
      question: 'What is prototypal inheritance?',
      answer: `Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. JavaScript is a prototype-based language, which means that inheritance is achieved by linking objects together through their prototypes rather than through class hierarchies as in class-based languages.

      Every object in JavaScript has a hidden property called [[Prototype]], which refers to another object (or null). This [[Prototype]] is also referred to as the object's prototype. Objects inherit properties and methods from their prototype.

      Objects in JavaScript are organized in a prototype chain. When you access a property or method on an object, JavaScript looks for that property/method in the object itself. If it doesn't find it, it goes up the prototype chain and checks the object's prototype, and so on, until it either finds the property or reaches the end of the chain with a null prototype.

      Constructor functions in JavaScript have a prototype property. When you create objects using these constructors with the new keyword, the new object's [[Prototype]] is set to the constructor's prototype.`
    },
    {
      question: 'Pass by ref vs pass by value',
      answer: `In summary, "pass by value" means that a copy of the data is passed, and changes inside the function do not affect the original data. "Pass by reference" means that a reference to the original data is passed, and changes inside the function affect the original data. JavaScript exhibits a unique behavior with objects and arrays, where the reference to the data is passed by value, allowing changes to the data but not reassignment of the reference itself.`
    },
    {
      question: 'What are primitive values?',
      answer: `Strings, Numbers, Booleans, Undefined, Null, and Symbols.
      Primitive types which represent single and immutable values are compared by their value, which means that two primitive values with the same content are considered equal. For example, "hello" and "hello" are equal, and 42 and 42 are equal.`
    },
    {
      question: 'What are non-primitive values?',
      answer: `Non-primitive values are more complex data structures and can hold multiple values and methods. Non-primitive values are often referred to as reference types because they are stored by reference rather than by value. Objects, Arrays, Function, Date, RegExp, Map, Set`
    },
    {
      question: 'What are pure functions?',
      answer: `A pure function is a function that produces the same output value for the same input values and has no observable side effects. This definition can be broken down into two key characteristics: Deterministic and No side effects. `
    },
    {
      question: 'What are the benefits of pure functions?',
      answer: `Predictability: Pure functions are easy to reason about because their behavior is entirely determined by their inputs. This predictability simplifies debugging and testing.

      Testability: Since pure functions have no side effects, testing them is straightforward.

      Immutability: Pure functions encourage the use of immutable data structures, which helps prevent unintended changes to data and simplifies concurrent programming.

      Memoization: Pure functions are ideal candidates for memoization, where you can cache the results of function calls for the same inputs to improve performance.

      Parallelization: Because pure functions have no dependencies on external state, they can be executed in parallel without concerns about shared state.`
    },
    {
      question: 'What are the differences between a Map and an Object?',
      answer: `Maps and objects in JavaScript are both used to store collections of key-value pairs, but they have some key differences in terms of their characteristics and use cases:
      Key Types - Objects can only be strings or symbols (primitive type) and Map key can be of any type.
      Key Order - Objects do not guarantee order for their properties. Maps maintain their order.
      Iteration - Objects do not have a built in iterator, must use Object.keys/values/entries. Maps provide built in methods for iterating over their entries such as map.keys(), map.values(), map.entries()
      Size - The num of properties in an object must be manually counted. Maps have a built in size property.

      In summary, Maps are more versatile when it comes to keys, offer ordered iteration, and have built-in methods for working with key-value pairs. Objects, on the other hand, are commonly used for more general purposes, and their keys are limited to strings or symbols. Your choice between Maps and objects depends on the specific requirements of your application and the characteristics you need for your data structure.
      `
    },
    {
      question: 'What are the differences between a Set and an Array?',
      answer: `Sets and arrays in JavaScript are both used to store collections of values, but they have distinct characteristics and use cases. Here are the key differences between them:
      Duplicate Values - Arrays allow duplicate values, Sets do not.
      Order - Arrays are ordered collections, sets are unordered.
      Indexing - You can access elements in arrays using numeric indicies such as myArray[0], Sets do not support indexing or direct access to elements by position, you must iterate over the set to access its values.
      Methods - Arrays have a wide range of built-in methods for adding, removing, and manipulating elements. Sets provide methods for adding and deleting elements (add(), delete()) and for checking if an element exists (has()). Sets also have methods for set operations like union, intersection, and difference.
      Use Cases - Arrays are commonly used when you need an ordered collection with the potential for duplicate values and when you want to access elements by index. They are versatile and suitable for a wide range of scenarios. Sets are used when you need a collection of unique values, and the order of elements does not matter. They are particularly useful for tasks that involve eliminating duplicates or checking for the presence of specific values.

      In summary, arrays are ordered collections that allow duplicate values and provide easy indexing and manipulation of elements. Sets, on the other hand, are unordered collections of unique values and are suitable for scenarios where uniqueness and order are not significant. Your choice between them depends on the specific requirements of your application and the nature of the data you need to store.
      `
    },
    {
      question: 'What is the callstack?',
      answer:
        'The call stack in JavaScript is a fundamental data structure used for managing the execution context of functions and tracking the order in which functions are called and returned. It plays a crucial role in understanding how JavaScript manages function calls and handles the call stack frame by frame.'
    },
    {
      question: 'What is event propagation?',
      answer: `Event propagation is the over arching term for event capturing and event bubbling.
      Event Capturing Phase: During the event capturing phase, the event starts at the root of the DOM hierarchy, which is typically the document object, and then travels down through the hierarchy of ancestor elements toward the target element. It descends from the root element through its parent elements, then their parent elements, and so on.

      Target Element: Once the event reaches the target element that originally triggered the event, it enters the target phase. This is where event handlers registered on the target element itself are executed.

      Event Bubbling Phase: After the target phase, the event proceeds to the event bubbling phase, where it starts to bubble up through the hierarchy from the target element, passing through its parent elements, and continuing up to the root element (document). During this phase, event handlers on each element along the propagation path have an opportunity to respond to the event. `
    },
    {
      question: 'What is event capturing?',
      answer: `
      During the event capturing phase, the event starts at the root of the DOM hierarchy, which is typically the document object, and then travels down through the hierarchy of ancestor elements toward the target element. It descends from the root element through its parent elements, then their parent elements, and so on.
      `
    },
    {
      question: 'What is event bubbling?',
      answer: `
      During the bubbling phase, each element along the propagation path has the opportunity to respond to the event by executing event handlers registered on those elements. Event handlers can be functions that perform specific actions in response to the event, such as changing the content of an element, toggling a CSS class, or triggering other JavaScript functions. Event bubbling allows you to capture events at higher levels of the DOM hierarchy, making it easier to handle events for multiple elements with a common ancestor. It simplifies event delegation and can lead to more efficient event handling.
      `
    },
    {
      question: 'Explain the concept of "hoisting" in JavaScript.',
      answer: `Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This means that you can use variables and functions before they are declared, but they will be initialized with undefined until their declarations are encountered in the code.`
    },
    {
      question:
        'What are arrow functions in ES6, and how do they differ from regular functions?',
      answer: `Arrow functions are a concise way to write functions in ES6. They have a shorter syntax and automatically capture the this value from the surrounding lexical context. Arrow functions do not have their own this, arguments, or super binding, making them particularly useful for functions within classes or callbacks.`
    },
    {
      question: 'Function expression vs function declaration',
      answer: `Key differences of arrow function expressions:

      Arrow functions do not have their own this. They inherit the this value from their enclosing lexical scope.
      They cannot be used as constructor functions with the new keyword.
      Arrow functions are always anonymous; you cannot give them a name.
      They are often preferred for short, simple functions and for functions that need to preserve the value of this.
      In summary, function declarations are hoisted and named, function expressions are not hoisted and can be anonymous or named, and arrow function expressions have a distinct syntax and inherit this from their lexical scope. The choice between them depends on your specific use case and coding style preferences.`
    },
    {
      question:
        'Describe the concept of the "this" keyword in JavaScript and how it behaves in different contexts.',
      answer: `The this keyword refers to the current execution context in JavaScript. Its value depends on how and where a function is called:

      In a regular function, this is determined by the function's caller.
      In an arrow function, this is lexically scoped and retains the value of this from its surrounding code.`
    },
    {
      question:
        'What is a generator function, and how does it differ from a regular function?',
      answer: `A generator function is a special type of function in JavaScript that allows you to pause and resume its execution. It's defined using an asterisk (function*). When a generator function is called, it returns an iterator object that can be used to control the flow of execution using the yield keyword.`
    },
    {
      question: 'What is the purpose of the bind() method in JavaScript?',
      answer: `The bind() method allows you to create a new function with a specified this value and initial arguments. It's commonly used to set the context (the value of this) for a function, especially in event handlers and callback functions.`
    },
    {
      question:
        'What is the difference between null and undefined in JavaScript?',
      answer: `null represents an intentionally missing value or absence of an object value. undefined represents a variable that has been declared but has not been assigned a value, or a non-existent object property.`
    },
    {
      question:
        'Explain the differences between let, const, and var in terms of variable declaration in ES6.',
      answer: `var has function scope and can be re-declared within the same function.
      let and const have block scope and cannot be re-declared within the same block.
      const is used for variables that should not be reassigned after declaration, while let allows reassignment.`
    },
    {
      question: 'Explain async/await',
      answer: `
      async/await is a powerful and concise way to work with asynchronous code in JavaScript. It provides a more readable and structured approach to handling asynchronous operations compared to traditional callback functions and promises. async/await is built on top of the Promise API and makes asynchronous code appear more like synchronous code, improving code clarity and maintainability.`
    },
    {
      question:
        'Explain Promises and the role they play in asynchronous JavaScript.',
      answer:
        'Promises are objects that represent the eventual completion or failure of an asynchronous operation. A Promise is a proxy for a value not necessarily known when the promise is created. They provide a more structured way to handle asynchronous code compared to callbacks. Promises have three states: pending, resolved (fulfilled), and rejected. Developers can attach .then() and .catch() handlers to handle successful and failed outcomes of asynchronous tasks.'
    },
    {
      question:
        'What are some differences between promise.all and promise.allSettled?',
      answer: `In summary, Promise.all is used when you need all promises to succeed for the overall operation to succeed and when you want to short-circuit on the first rejection. Promise.allSettled is used when you want to monitor the status and results of all promises, regardless of whether they fulfill or reject, and when you don't need the operation to fail immediately upon a single rejection. The choice between them depends on the specific requirements of your asynchronous task.`
    },
    {
      question: 'What is a constructor function?',
      answer:
        "A constructor function in JavaScript is a special type of function that is used to create and initialize objects. Constructor functions are often used as templates or blueprints for creating multiple objects of the same type. They are a fundamental part of object-oriented programming in JavaScript and a key concept in JavaScript's prototype-based inheritance model."
    },
    {
      question: 'What is a closure?',
      answer:
        "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. Closures are important because they allow for data encapsulation, private variables, and the creation of functions with persistent state."
    },
    {
      question: 'What is a stale closure?',
      answer:
        'The stale closure problem occurs when a closure captures outdated variables. An efficient way to solve stale closures is to correctly set the dependencies of React hooks.'
    },
    {
      question: 'What is the Event Loop?',
      answer:
        'Allows JS to perform non-blocking async operations despite being a single threaded language giving the illusion of multi-threading. Whenever an async function is called, it is sent to the event queue in the browser API. The event loop then checks whether the call stack is empty and adds any events in the queue that were offloaded from the main thread.'
    },
    {
      question: 'What is the temporal dead zone?',
      answer:
        "Describes the state where variables are un-reachable. They are in scope, but they aren't declared. The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared. Let, Const and Var are all hoisted - Vars are hoisted and initialized which is why we see “undefined” when evaluating a var before it's declared and a reference error when evaluating a const/let."
    },
    {
      question: 'What is the super keyword used for?',
      answer:
        'The super keyword in JavaScript is used in order to call the methods of the parent class. By itself, super() is used within a constructor function to call the parent constructor function.'
    },
    {
      question: 'Bind vs Call vs Apply',
      answer: `Use bind when you want to create a new function with a fixed this context that you can call later.
      Use call when you want to invoke a function immediately with a specific context and individual arguments.
      Use apply when you want to invoke a function immediately with a specific context and an array (or array-like object) of arguments.
      These methods are handy for controlling function context and argument passing in JavaScript, especially in scenarios involving object-oriented programming, callbacks, and event handling.`
    },
    {
      question: 'What is a callback function?',
      answer: `A callback function is a function passed into another function as an argument. The callback function is then invoked inside the callee to complete an action.`
    },
    {
      question: 'What is the nullish coalescing operator?',
      answer: `Nullish coalescing is a JavaScript logical operator represented by two question marks (??). Nullish coalescing is an operator that returns the first “defined” value. “defined” here refers to an expression whose value is neither null nor undefined.`
    },
    {
      question: 'What is a spread operator',
      answer: `Spread operator allows iterables such as arrays, objects, and strings to be expanded into single arguments. The spread operator is denoted by three dots (...) followed by the variable to be expanded.`
    },
    {
      question: 'What is the rest parameter',
      answer: `The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. The rest operator puts the contents of the variable after the rest operator into an array (rest parameter can only be used as the last parameter of a function).`
    },
    {
      question: 'What are logical operators?',
      answer:
        'There are 4 logical operator in JS - OR, AND, NOT, and nullish coalescing.'
    },
    {
      question: 'What is memoization?',
      answer: `Memoization is an optimization technique that speeds up your code by storing the results of expensive function calls and reusing the stored result when the same input occurs again. An expensive function refers to functions that consume a lot of resources (time and memory) during their execution due to heavy computation.`
    },
    {
      question: 'What is function currying?',
      answer: `Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). In other words, currying a function means the function takes one argument at a time and returns a new function expecting the next argument. Instead of taking all arguments at the same time, currying decomposes the function into a sequence of functions with a single argument.`
    },
    {
      question: 'What is typecasting?',
      answer: `Typecasting or coercion means to change the data type of a value to another data type. For example, a conversion from a string to an integer or vice versa. There are three typecasts provided by JavaScript:

      Boolean(value): Casts the input value to a boolean value
      Number(value): Casts the input value to a float or integer value
      String(value): Casts the input value to a string`
    },
    {
      question: 'What is a microtask?',
      answer: `A priority asynchronous task that is executed after the call stack is empty but before the next task from the event loop's task queue is executed. Microtasks are typically used for high-priority, non-blocking operations that need to be performed as soon as possible without blocking the main thread. Promises, .then, .catch, Mutation Observers`
    },
    {
      question: 'What is a higher order function?',
      answer: `Functions that can take other functions as arguments or return functions as their results. They are a fundamental concept in functional programming and provide a powerful way to work with functions and data. Higher-order functions enable you to abstract and compose functionality, making your code more modular and expressive.`
    },
    {
      question: 'What are the different types of native errors in JavaScript?',
      answer: `Error, SyntaxError, ReferenceError, TypeError, RangeError, URIError`
    },
    {
      question:
        'What is the difference between attributes and properties in JavaScript?',
      answer: `Attributes are part of the HTML markup and define the initial state of an element, while properties are JavaScript objects that allow you to interact with and manipulate the current state of an element in the DOM. Although attributes and properties often have the same name, they serve different purposes and should be used accordingly when working with the DOM in JavaScript.`
    },
    {
      question:
        'What are the main differences between a forEach loop and a map loop?',
      answer: `forEach is primarily used for iterating and performing actions on array elements without creating a new array, while map is used for creating a new array by applying a function to each element in the original array. The choice between them depends on your specific use case and whether you need to transform data or just perform actions on it.`
    },
    {
      question: 'How do you compare two objects in JavaScript?',
      answer: `Comparing two objects in JavaScript can be a bit tricky because objects are reference types, and comparing them directly with == or === will check if they reference the same object in memory, not if their properties/values are the same. To compare the contents of two objects, you typically need to perform a deep comparison by comparing their properties recursively. Using a library or custom deep equal comparison function`
    }
  ],
  React: [
    {
      question: 'What is React?',
      answer:
        'React is a Javascript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling the view layer for web and mobile apps based on components in a declarative approach.'
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX stands for JavaScript XML and is a syntax extension for JavaScript used in React to define the structure and layout of UI components. It allows you to write HTML-like code within your JavaScript files, making it easier to create and manage the user interface of your React applications. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax.'
    },
    {
      question: 'What are the major features of React?',
      answer: `The major features of React are:

      Virtual DOM: React uses a virtual DOM (Document Object Model) to improve performance. Instead of directly updating the actual DOM when the state changes, React first updates a virtual representation of the DOM in memory. It then calculates the most efficient way to update the real DOM, minimizing costly operations. This approach results in faster rendering and improved application performance.

      Unidirectional Data Flow: React enforces a unidirectional data flow, which means data flows in one direction—from parent components to child components. This makes it easier to understand and debug the application's behavior since changes in data are predictable and traceable.

      JSX: JSX, or JavaScript XML, is a syntax extension that allows you to write UI components using a syntax that closely resembles HTML. JSX makes it easier to visualize and define the structure of your UI within your JavaScript code.`
    },
    {
      question: 'What are react components?',
      answer: `Components are the building blocks of creating User Interfaces(UI) in React. React components are self-contained, reusable pieces of user interface. They can be either functional or class-based and encapsulate their own logic and rendering.`
    },
    {
      question: 'What is a react hook?',
      answer:
        'A React hook is a function that allows you to "hook into" React state and lifecycle features in functional components. React introduced hooks in React 16.8 to provide a way to manage component logic and state in functional components without the need for class components. Hooks enable you to reuse stateful logic across different components and make functional components more powerful and expressive.'
    },
    {
      question: 'What is state in react?',
      answer:
        "State in React is a mechanism for managing and storing data within a component, allowing it to respond to user interactions, data changes, and other dynamic aspects of the application's UI. State helps in creating dynamic and interactive components that can update their rendering based on changing data or user actions. State updates in React are asynchronous for performance reasons. React may batch multiple state updates together to optimize rendering. If you need to perform an action after the state has been updated, you can pass a callback function as the second argument to setState."
    },
    {
      question: 'What are props in react?',
      answer:
        'Props in React are a means of passing data and behavior from parent components to child components. They enable you to create dynamic and reusable components by allowing customization and configuration based on the data and functions passed from their parent components. Props are a fundamental concept for building modular and flexible React applications.'
    },
    {
      question: 'Explain the concept of Virtual DOM in React.',
      answer:
        'The Virtual DOM is an in-memory representation of the actual DOM. React uses it to optimize updates by comparing the Virtual DOM with the real DOM and applying minimal changes to the latter to improve rendering performance.'
    },
    {
      question:
        'What is the role of the key prop in React when rendering lists of elements?',
      answer:
        'The key prop is used to help React identify which items in a list have changed, been added, or been removed. It aids in efficient list rendering and updates.'
    },
    {
      question:
        'Explain the concept of props drilling in React and how to mitigate it.',
      answer: `Props drilling occurs when you pass props through multiple layers of nested components.
      To mitigate it, you can use React Context or a state management library like Redux to avoid passing props down manually.`
    },
    {
      question:
        'What is the purpose of React Router, and how is routing achieved in React applications?',
      answer: `React Router is a library for handling client-side routing in React applications.
      Routing is achieved by defining routes and associating components with specific URLs using Route components.`
    },
    {
      question:
        'What are controlled and uncontrolled components in React forms?',
      answer: `Controlled components are forms elements whose values are controlled by React state. They provide a predictable way to manage form input.
      Uncontrolled components are forms elements whose values are not controlled by React state. They are typically accessed through refs.`
    },
    {
      question: 'What is the callback function used for in setState?',
      answer: `In React, the callback function used in the setState method is a function that gets executed after the state has been updated and the component has been re-rendered. It allows you to perform additional actions or tasks that rely on the updated state. The primary purpose of using a callback function with setState is to ensure that you're working with the most up-to-date state data.`
    },
    {
      question: 'What are synthetic events in react?',
      answer: `In React, synthetic events refer to a cross-browser wrapper around the native browser events. React provides this abstraction to ensure consistent event handling and behavior across different web browsers.`
    },
    {
      question: 'What are higher order components?',
      answer: `A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.`
    },
    {
      question: 'What is context?',
      answer:
        'React Context is an advanced feature in React that provides a way to share data between components in a React application without having to pass props explicitly through the component tree. It is primarily used to manage and propagate global or application-level state and settings, making it easier to access this data throughout your component hierarchy. Dependency injection tool.'
    },
    {
      question: 'What is reconciliation?',
      answer: `Reconciliation in React refers to the process of updating the user interface to reflect changes in application state or component props. It is a fundamental part of React's rendering process, where React compares the previous state of the component's virtual DOM (Virtual Document Object Model) with the current state and determines what updates, if any, are needed to synchronize the UI with the latest data.`
    },
    {
      question: 'What are react fragments?',
      answer: `React Fragments, introduced in React 16.2, are a feature that allows you to group multiple child elements within a single parent element without adding extra nodes to the HTML markup. Fragments are useful in situations where you want to group elements for rendering purposes without introducing additional DOM elements.`
    },
    {
      question: 'What are react portals?',
      answer: `React Portals are a feature in React that provide a way to render a component's content outside of its parent's DOM hierarchy. They allow you to render a component's content at a different place in the DOM tree, typically at a higher level in the hierarchy or in a completely different part of the DOM.`
    },
    {
      question: 'What are some limitations of react?',
      answer: `React is just a view library, not a full framework.
      There is a learning curve for beginners who are new to web development.
      Integrating React into a traditional MVC framework requires some additional configuration.
      The code complexity increases with inline templating and JSX.
      Too many smaller components leading to over engineering or boilerplate.`
    },
    {
      question: 'What is the useCallback hook?',
      answer: `The primary purpose of useCallback is to memoize functions and prevent unnecessary re-creation of function instances when a component re-renders. It's useful when you need to pass functions as props to child components. By memoizing the function, you can prevent unnecessary re-renders of child components when the parent component re-renders.
      It's commonly used with event handlers and functions that are part of the component's state or effect dependencies.`
    },
    {
      question: 'What is the useMemo hook?',
      answer: `The primary purpose of useMemo is to memoize values (not functions) and prevent the re-computation of expensive calculations or expensive object creations when a component re-renders. It's useful when you have a calculation that is computationally expensive, and you want to avoid recalculating it every time the component renders.
      It's often used for memoizing the results of complex computations, formatting data, or creating new objects that depend on certain inputs.`
    },
    {
      question: 'useCallback vs useMemo summary',
      answer: `Use useCallback when you want to memoize functions to prevent unnecessary function re-creation and you're primarily concerned with optimizing function references.
      Use useMemo when you want to memoize values or object instances to prevent unnecessary recomputation of expensive calculations or object creations.
      Remember that both hooks should be used judiciously. Using them too aggressively can lead to over-optimization, which might make your code harder to understand. Use profiling tools and performance metrics to determine if and where these optimizations are necessary for your specific application.`
    },
    {
      question: 'What is a compound component?',
      answer: `A compound component in React is a pattern used to create a set of interconnected components that work together to form a complex UI component. Unlike traditional components, where each component manages its own state and rendering logic, compound components share state and behavior among themselves while allowing developers to configure their appearance and behavior individually.`
    },
    {
      question: 'useEffect vs useLayoutEffect',
      answer: `
      useEffect and useLayoutEffect are both hooks in React used for handling side effects in functional components. However, they differ in when they are executed during the component's lifecycle and whether they block rendering.

      useEffect:

      Execution Timing: useEffect is called asynchronously after rendering is committed to the screen. This means it runs after the render cycle is complete, and the DOM has been updated.

      Blocking Rendering: useEffect does not block the rendering process. It allows the component to render first, and then it performs its side effects. Therefore, any changes it makes to the DOM or state won't be reflected until the next render cycle.

      Common Use Cases: Use useEffect for side effects that don't need to be synchronous with rendering. This is suitable for most scenarios, such as data fetching, setting up subscriptions, or performing DOM manipulations that don't impact layout.

      useLayoutEffect:

      Execution Timing: useLayoutEffect is called synchronously immediately after rendering but before the browser has painted the screen. This means it runs before the render cycle is complete and before any changes to the DOM are visible to the user.

      Blocking Rendering: useLayoutEffect blocks the rendering process. If you perform complex or time-consuming tasks within it, it may lead to slower rendering and a less responsive user interface.

      Common Use Cases: Use useLayoutEffect when you need to make changes that affect the layout of the DOM and need to be reflected immediately. For example, when you want to measure the size of an element, you'd use useLayoutEffect to ensure that you have access to accurate layout information before the browser repaints.
      `
    }
  ],
  Redux: [],
  Patterns: [
    {
      question: 'What is the Observer Pattern?',
      answer:
        'The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.'
    },
    {
      question: 'What is the Module Pattern?',
      answer:
        "Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized. Good to hear - ESM, AMD, CommonJS"
    },
    {
      question: 'What is the Prototype Pattern?',
      answer:
        'We can think of the prototype pattern as being based on prototypal inheritance where we create objects which act as prototypes for other objects. The prototype object itself is effectively used as a blueprint for each object the constructor creates. If the prototype of the constructor function used contains a property "name" example (as per the code sample lower down), then each object created by that same constructor will also have this same property.'
    },
    {
      question: 'What is the Constructor Pattern?',
      answer:
        'Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.'
    },
    {
      question: 'What is the Factory Pattern?',
      answer:
        "The Factory pattern is another creational pattern concerned with the notion of creating objects. Where it differs from the other patterns in its category is that it doesn't explicitly require us to use a constructor which allows us to return more than just objects."
    },
    {
      question: 'What is Dependency Injection?',
      answer:
        "Dependency injection is providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out. Parameterizing dependencies."
    }
  ],
  Typescript: [],
  CORS: [],
  Exercises: [
    {
      question:
        'Create a function that accepts 2 strings and removes the common characters from the outputted string',
      answer: 'codepen url'
    }
  ]
}
