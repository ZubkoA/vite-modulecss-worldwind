import { Link } from "react-router-dom";
import { PageNav } from "../components/PageNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWide</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}
