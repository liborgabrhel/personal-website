import { Outlet } from "remix"

export default function Developer() {
  return (
    <main>
      <h1>Front-end developer</h1>
      <p>some text...</p>
      <Outlet />
    </main>
  )
}
