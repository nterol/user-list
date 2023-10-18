import mainLogo from './assets/icon/logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <a href="/" target="_blank">
          <img src={mainLogo} className="logo" alt="User logo" />
        </a>
      </div>
      <section className="bg-main flex justify-center items-center p-4">
        <h1>Hello World</h1>
      </section>
    </>
  );
}

export default App;
