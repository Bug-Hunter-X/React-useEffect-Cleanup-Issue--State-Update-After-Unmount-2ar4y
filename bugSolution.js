```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    //This fixes the warning
    timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);

    return () => clearTimeout(timeoutId); 
  }, []);

  return <div>Count: {count}</div>;
}
```