/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export const getData = async () => {
  const response = await fetch(`https://futuramaapi.herokuapp.com/api/quotes/1
  `);
  const data = response.json();
  return data;
};
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export const getDataThen = () => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/1
    `).then((res) => res.json());
};

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export const tryAsyncQuotes = async () => {
  try {
    const data = await getData();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

export const tryThenQuotes = async () => {
  return fetch(`https://futuramasapssi.herokuapp.com/api/quotes/1
    `)
    .then((res) => res.json())
    .catch((e) => console.log('something went wrong'));
};

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export const tryThenQuotesFinally = async () => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/1
    `)
    .then((res) => res.json())
    .catch((e) => console.log('something went wrong'))
    .finally(() => console.log('All done!'));
};

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
