import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <h1> Hello world!</h1>
      <main>
        <nav>
          <Container className="navigation__container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
