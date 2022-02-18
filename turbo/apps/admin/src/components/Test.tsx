import { PropsWithChildren } from "react"

export function Test(props: PropsWithChildren<unknown>) {
  return <div>{props.children}</div>
}
