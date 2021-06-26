# Random Kiss
 

## Requires node-fetch
 Random Kiss requires node-fetch, which you can install using either `npm i node-fetch` or `yarn add node-fetch`.

## Install
 `npm i random-kiss` or `yarn add random-kiss`

This package was more for a test but I may make a new package for each bot.

### Example

```javascript
const kiss = require("random-kiss"); //!calls the package

kiss.test(); //! TEst msg to make sure the package installed  /// This is a test message from the random-kiss package

console.log(kiss.message("user1", "user2")); //! msg replace user1 with the user kissing and user2 with the user there kissing /// user1 kissed user2!

console.log(kiss.imageurl); //! calls the function for the image! // URL
```

## Upgrade to v2.0.0

```javascript
kiss.kissmsg("user1", "user2") to kiss.message("user1", "user2")
```



