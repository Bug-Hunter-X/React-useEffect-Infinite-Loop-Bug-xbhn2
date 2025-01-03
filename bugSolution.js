```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct solution 1: add count to the dependency array 
    setCount(count + 1);
  }, [count]);

  // Correct solution 2:  add conditional logic to avoid infinite loop
  useEffect(() => {
     let mounted = true;
     if(mounted){
       setCount(prevCount => prevCount +1);
     }
     return () => mounted = false; 
  }, []);

  return <div>Count: {count}</div>;
}
```