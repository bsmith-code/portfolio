## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Yarn. Make sure you have yarn installed. ```npm i -g yarn```

### Installation

1. Clone the repository: ```git clone https://github.com/bsmith-code/portfolio```
2. Install node modules: ```yarn```

### Hosts
1. Add ```127.0.0.1 brianmatthewsmith.local``` to your /etc/hosts file

### Scripts
- Development: ```yarn start```
  - This will open the application in your default web browser. You can view the project at http://brianmatthewsmith.local:3000.
- Production: ```yarn build```
  - This will generate a dist folder containing the optimized and minified build.
- Testing: ```yarn test```
  - This will execute the test suite and provide information on any test failures.