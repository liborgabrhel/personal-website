import { Link } from "remix"

export default function Index() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Personal Website</h1>
      <p>This is my personal website.</p>

      <ul>
        <li>
          <Link to={"/developer"}>Developer</Link>
        </li>
        <li>
          <Link to={"/beekeeper"}>Beekeeper</Link>
        </li>
      </ul>
    </main>
  )
}
