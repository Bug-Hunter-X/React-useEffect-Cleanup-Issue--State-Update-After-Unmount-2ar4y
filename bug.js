```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a warning because it sets the state after the component unmounts
    const timeoutId = setTimeout(() => {
      setCount(count + 1); 
    }, 1000);

    return () => clearTimeout(timeoutId); // This cleanup function prevents the warning
  }, [count]);

  return <div>Count: {count}</div>;
}
```