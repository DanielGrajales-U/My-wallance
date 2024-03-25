import { Routes, Route } from "react-router-dom"

export interface Props{
    children: JSX.Element[] | JSX.Element[]
}

export default function RoutesWithNotFound({children}: Props) {
  return (
    <Routes>
        {children}
        <Route path='*' element={<div><h1>This Page Not Found</h1></div>} />
    </Routes>
  )
}