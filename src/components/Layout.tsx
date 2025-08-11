import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <section className="layout">{children}</section>
  )
}

export default Layout;