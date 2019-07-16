# chatkit-cli-app

![work in_progress](https://img.shields.io/badge/work-in_progress-yellow.svg?style=flat-square)

> A command line chat application using [Pusher's Chatkit0](https://pusher.com/chatkit)

!['chat-sample'](img/chat-sample.png?raw=true)

### Requirements
In order to run the app locally you need to create a Chatkit instance first. Go to https://dash.pusher.com/chatkit, login into your account and create a chatkit instance in INSTANCE INSPECTOR. Replace the Instance Locator and the Secret Key at the code files and you are good to go.

##### In server.js
```javascript
// Chatkit Server SDK
  const chatkit = new Chatkit.default({
      instanceLocator: "Your instance locator",
      key: "Your key"
  });
```
##### In app.js
```javascript
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

```sh
npm install
```

### Getting Started

```sh
# Clone the repository
git clone https://github.com/pankaryp/chatkit-cli-app.git
cd chatkit-cli-app
```

#### Running the server

```sh
node server.js
```

#### Running the chat instances
Open two different terminal windows and run:
```sh
node app.js
```
### Acknowledgments
Inspired by Alex Booker's (@bookercodes) tutorial.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

