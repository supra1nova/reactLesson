import logo from './logo.svg';
import './App.css';

// 해더태그 함수를 만듦 - 컴포넌트 이름은 반드시 대문자로 써야한다.
// return 값도 반드시 태그 한개에 다 들어가야한다!!!!
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WWW</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB!
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
