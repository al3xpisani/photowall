
interface childProps {
  color:string,
  click: () => void,
}

// export const Child = ({color}:childProps) =>{
//   return <div>{color}</div>
// }

//children does not needto be declared on interface, its implicity 
//by React.FC

export const Child: React.FC<childProps> = ({color,click,children}) => {
  console.log(children)
  return <div>{color}
    {children}
    <button onClick={click}>Click me</button>
  </div>
}
