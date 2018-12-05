# Chatkit-cli-app

![status in_progress](https://img.shields.io/badge/status-in_progress-brightgreen.svg)

A command line chat application built with Pusher's Chatkit

!['chat-sample'](img/chat-sample.png?raw=true)

### Requirements
In order to run the app locally you need to create a Chatkit instance first. Go to https://dash.pusher.com/chatkit, login into your account and create a chatkit instance in INSTANCE INSPECTOR. Replace the Instance Locator and the Secret Key at the code files and you are good to go.

##### In server.js
```
// Chatkit Server SDK
  const chatkit = new Chatkit.default({
      instanceLocator: "Your instance locator",
      key: "Your key"
  });
```
##### In app.js
```
// Init chatkit manager
  const chatManager = new ChatManager({
      instanceLocator: "Your instance locator",
      userId: username,
      tokenProvider: new TokenProvider({
          url: "http://localhost:3000/authenticate"
      })
  });
```

### Installing

```
npm install
```

### Getting Started

#### Running the server

```
node server.js
```

#### Running the chat instances
Open two different terminal windows and run:
```
node app.js
```
### Acknowledgments
Inspired by Alex Booker's (@bookercodes) tutorial.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

