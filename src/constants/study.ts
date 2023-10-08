export const STUDY_GUIDE: Record<
  string,
  { question: string; answer: string }[]
> = {
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
    }
  ],
  Redux: [],
  Javascript: [
    {
      question: 'What is a constructor function?',
      answer:
        "A constructor function in JavaScript is a special type of function that is used to create and initialize objects. Constructor functions are often used as templates or blueprints for creating multiple objects of the same type. They are a fundamental part of object-oriented programming in JavaScript and a key concept in JavaScript's prototype-based inheritance model."
    },
    {
      question: 'What is a closure?',
      answer:
        "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time."
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
    }
  ],
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
