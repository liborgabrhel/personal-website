import { Outlet } from "remix"

export default function Beekeeper() {
  return (
    <main>
      <h1>Beekeeper</h1>
      <p>some text...</p>
      <Outlet />
    </main>
  )
}
