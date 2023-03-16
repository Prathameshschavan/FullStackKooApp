import Dropdown from 'react-bootstrap/Dropdown';
import "./Dropdown.css"
function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        IN +91
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item href="#/action-1">India +91</Dropdown.Item>
        <Dropdown.Item href="#/action-2">United States +1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Afghanistan	93</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Argentina	54</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Australia	61</Dropdown.Item>
         <Dropdown.Item href="#/action-3">China	86</Dropdown.Item>
         <Dropdown.Item href="#/action-3">France	33</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Ghana	233</Dropdown.Item>
         <Dropdown.Item href="#/action-3">Indonesia	62</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;