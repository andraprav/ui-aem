# ui-aem
in this small project I tried to create a panel for a smart home.

currently it has only 2 functionalities: turning the light off and on and setting the temperature.

there are also lots of buttons which are disabled. in order to extend this, you just need to add functionalities 
to the disabled buttons, or create buttons of your own.

the light is turned on and off by pressing the button.

the temperature is set by sliding. the temperature is first got from a resourse data (.json) and is saved at each modification.
The data is not really persisted because we would need a server-side, but the functionality is there in case we would like,
in the future to call a server to update the json.

I've runned this app by running a simple http-server (node.js) in ui-aem 
and then accessing it from browser with http://localhost:8080/index.html
