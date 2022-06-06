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

function Nav(props) {
  console.log('props', props.data);
  const list = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a href="{'/read/' + e.id}">{e.title}</a>
      </li>
    );
  });
  // const list = [
  //   <li><a href="/read/1">{props.data[0].title}</a></li>,
  //   <li><a href="/read/2">{props.data[1].title}</a></li>
  // ]
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html iss...' },
    { id: 2, title: 'css', body: 'css iss...' },
  ];
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, Web!"></Article>
    </div>
  );
}

export default App;
