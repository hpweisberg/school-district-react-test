import Student from "./Student"

const School = (props) => {
  return ( (
    <div>
      {props.name}
      <Student amount="500 Students" />
    </div>
  ) )
}

export default School