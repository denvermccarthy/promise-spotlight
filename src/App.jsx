import { useEffect } from 'react';
import { getData, getDataThen, tryThenQuotes } from './services/promise-me';

export default function App() {
  useEffect(() => {
    const fetch = () => {
      const data = thenQuotes();
      console.log(data);
    };
    fetch();
  }, []);
  return <h1>Hello World</h1>;
}
