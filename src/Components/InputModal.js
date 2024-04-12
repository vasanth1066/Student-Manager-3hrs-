import { useRef, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Context from "../Store/Context";

function InputModal() {
  const contxt = useContext(Context);
  const nameinputref = useRef();
  const phoneinput = useRef();
  const addressinputref = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Submithandler = (event) => {
    event.preventDefault();
    const name = nameinputref.current.value;
    const phoneno = phoneinput.current.value;
    const address = addressinputref.current.value;

    let myobj = {
      name,
      phoneno,
      address,
    };
    contxt.adddata(myobj);

    console.log(myobj);
  };

  return (
    <>
      <div className="text-center">
        <Button variant="outline-secondary" onClick={handleShow}>
          ADD NEW STUDENT
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Enter Student Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={Submithandler}>
            <label>Name:</label>
            <input type="text" ref={nameinputref}></input>
            <br></br>
            <label>Phone No:</label>
            <input type="number" ref={phoneinput}></input>
            <br></br>
            <label>Adddress:</label>
            <input type="text" ref={addressinputref}></input>
            <br />
            <button onClick={handleClose}>Add</button>
            <button onClick={handleClose}>Close</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InputModal;
