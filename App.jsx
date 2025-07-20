function App() {
  const name = 'JOHN';
  let x = 2;
  let y = 4;

  function fruit() {
    return 'An Apple a day keeps the doctor away.';
  }

  function sum(a, b) {
    return a + b;
  }

  function operation(p, r, op) {
    if (op === '*') {
      return p * r;
    } else if (op === '/') {
      return p / r;
    }
  }

  let userObj = {
    user_name: 'Smith',
    email: 'smith123@gmail.com',
    age: 25,
  };

  let userArr = [12, 34, 54, 21, 76, 89, 98];
  //let path ="img/Path"

  return (
    <>
      <h1>JSX with Curly Braces</h1>
      <p>{name ? name : 'User Not Found'}</p>
      <p>2+4={x + y}</p>
      <p>{fruit()}</p>
      <p>sum of a+b ={sum(6, 4)}</p>
      <p>result = {operation(5, 10, '*')}</p>
      <p>{userObj.email}</p>
      <p>{userArr[6]}</p>
      {/*<img src="path" alt="this is image."/>  way of using an image by using variable in react js,go to line 29 */}
      <input type="text" value={name} />
    </>
  );
}

export default App;
