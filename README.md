# college-football-fan-api

# Running the backend for the college-football-fan app.
1. Ensure you have Node installed on your machine.
2. Ensure you have visited https://collegefootballdata.com/key, provided your email, and received an API key from the site.
3. Take that API key and create a config.js file in the root of the project directory, and then put your API key in that config file. The file should look like this:
```
const config = {
    apiKey: <API Key Goes Here>,
}

export default config;
```
4. Run the `npm i` command to install all dependencies.
5. Run the `npm start` command to start serving the app on port 8080.