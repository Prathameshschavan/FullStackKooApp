import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import "./Languge.css"
import { AiOutlineGlobal } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h5>Select Language</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Available Languages</h5>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>English</p>
        <div>
        <p>(English)</p>
        </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>Hindi</p>
        <div>
        <p>(Hindi)</p>
        </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>Kannada</p>
        <div>
        <p>(ಕನ್ನಡ)</p>
        </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>Tamiḻ</p>
        <div>
        <p>(தமிழ் )</p>
        </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p> Telugu</p>
        <div>
        <p>(తెలుగు)</p>
        </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>Marathi</p>
        <div>
        <p> (मराठी)</p>
        </div>
        </div>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>Bangla</p>
        <div>
        <p>(বাংলা)</p>
        </div>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <input type="radio" id="age1" name="age" value="30"/>
        <p>Gujarati</p>
        <div>
        <p>(ગુજરાતી)</p>
        </div>
        </div>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Language() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" style={{fontSize:"19px"}} onClick={() => setModalShow(true)}>
      <AiOutlineGlobal/> Language
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Language;