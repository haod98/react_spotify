import Hero from "./component/landingPage/Hero";
import { userHasAccessToken } from "./helpers/authentication";
function App() {
  if (userHasAccessToken()) {
    return <h1>Hello World</h1>
  }
  return (
    <Hero />
  );
}

export default App;
