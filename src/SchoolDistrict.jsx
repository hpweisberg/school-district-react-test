import School from "./School";

const SchoolDistrict = (props) => {
  return ( (
    <div>{props.name}
      <School name='South' />
      <School name='North' />
      <School name='Felex Festa' />
    </div>
  ) )
}

export default SchoolDistrict;