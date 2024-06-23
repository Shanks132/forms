// eslint-disable-next-line react/prop-types
export default function Input({ id, label,...props}){
  return(
    <div className="inputField">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id}  {...props}/>
    </div>
  )
}