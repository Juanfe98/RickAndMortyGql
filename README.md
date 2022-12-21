# Personal Notes

## Promises

A Promise is just an object that is telling us that the code have not finish the execution.
Promises are used always when you are executing asynchronous code. Meaning that when you are not 
sure how log is gonna take something to finish, or even the response of that. 

Are used when you are making a request to the server.

Please, go deep on promises, being honest this is a complex concept!

## Explaning the episodes fetching information

Here we would see step by step of the process.

### Let's dig into the the `fetch` object.

[More info on this here](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

Keep in mind that fetch return promises! that need to be resolved. There are more than on way to resolve a promise


In each `then` you are resolving a promise. In the first one the first one you are returning response.json() which will capture the body of the response and transform it into a JSON object readable easily by us.

In the second one you resolve the last promise and after that you can access your data! :D

Keep in mind that there are PROMISES, It's all about PROMISES HERE.
```javascript
fetch(`https://rickandmortyapi.com/api/character`)
  .then ( (response) => response.json())
  .then ( ({results}) => {
    setData(results);
  })

```	

This is only one way of resolving promises. You also can use async -> await to resolve promises without using `then`

### Let's see the Promise.all() method

[More info on this here](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

Now that we have clear the `fetch` and `then`. Let's see the `Promise.all()`.

So this is basically something that will help us resolve or reject multiple promises. ( An array of promises ).

The promise.all() returns... guess what? Yep! A new promise!

So...

Recieve as argument a list of promises. (an array)

Returns a new promise with the array of promises resolved or rejected.

Let's see the code!

```javascript
  const loadCharacterEpisodes = () => {
    const listOfPromises = espisodes.map(episode => {
      return fetch(episode).then(response => response.json());
    });
    Promise.all(listOfPromises).then((results) => {
      // This is a set state with the results
      setCharacterEpisodes(results);
      setShow(true);
    });
  };
```
So... 

```javascript
  const listOfPromises = espisodes.map(episode => {
    return fetch(episode).then(response => response.json());
  });
```

This const will get a value like this [Promise1, Promise2, Promise3,...]

Remember the map will always return a ... ? Yep! a new ARRAY with the value you are returning inside the map. In this case we are turning a promise! so the map will return an array of promises.

```javascript
 Promise.all(listOfPromises).then((results) => {
      // This is a set state with the results
      setCharacterEpisodes(results);
      setShow(true);
    });
```
The interesting part! The Promise.all()

So according to what we've learned let's read this line by line.

1. We are passing the list of promises as an argument. and the promise.all will return a promise!

so we are using the .then function to resolve that promise. Inside it we are setting the value to a state and finish! that's it!

This is a really complex thing. Don't feel overwelmed. Take it easy!

It's all about time!

I don't want to confuse you with this. And i hope not to. It is the right time to talk abnout this!

The next code will do exactly the same thing that the function `loadCharacterEpisodes` above.
This is a different way of resolving promises. I'll let it here! Please, read, understand and let me know if you have further questions.

```javascript
  const loadCharacterEpisodes2 = async () => {
    const tests = espisodes.map(episode => {
      return fetch(episode).then(response => response.json());
    });
    const results = await Promise.all(tests)
    setCharacterEpisodes(results);
    setShow(true);
  };
```