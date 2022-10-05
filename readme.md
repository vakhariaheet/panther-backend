## Panther Backend

### Installation

#### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

#### Setup

1. Copy the `.env` file from the developer and place it in the root of the `backend` directory
2. Install dependencies: `yarn install`
3. Run the backend: `yarn start` or `yarn dev` for development
4. Open the browser to [http://localhost:4040](http://localhost:4040)

#### Routes

baseURL: `http://localhost:4040`

1. `/` - Health check:
   1. Method: GET
   2. body: none
   3. query: none
   4. response: `Welcome to the API server of the Panther app!`
