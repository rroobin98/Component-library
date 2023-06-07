import { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";
import Badge from "./Badge";
import Card from "./Card";
import Modal from "./Modal";
import { ImWarning } from "react-icons/im";
import { MdDone } from "react-icons/md";

function handleClick() {
  alert("Dismiss");
}

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div>
      <div className="flex flex-col border-b items-center border-black">
        <h1 className="font-semibold text-lg p-5 text-neutral-600">
          Buttons with different color, size, title and one disabled button!
        </h1>
        <div className=" flex gap-2 p-10">
          <Button title="Gray" color="light" size="small" />
          <Button title="Green" color="green" size="medium" />
          <Button title="Red" color="red" size="large" />
          <Button title="Disabled" size="large" disabled />
        </div>
      </div>
      <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
        Alert with different colors, icon and dismiss button!
      </h1>
      <div className="flex justify-center items-center p-10 border-b border-black ">
        <Alert
          icon={<ImWarning />}
          title="Alert!"
          color="warning"
          onDismiss={handleClick}
        />
        <Alert title="Warning!!" color="error" onDismiss={handleClick} />
        <Alert title="All Good" onDismiss={handleClick} color="good" />
      </div>
      <div className="border-b border-black">
        <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
          Badges with Icon!
        </h1>
        <div className="flex gap-2 justify-center pt-10 mb-10">
          <Badge icon={<MdDone />} size="small" color="gray" />
          <Badge icon={<MdDone />} color="blue" />
          <Badge icon={<MdDone />} size="medium" color="light" />
        </div>
      </div>
      <div className="border-b border-black">
        <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
          Cards with a picture!
        </h1>
        <Card
          imgAlt="A monkey"
          href="https://www.google.se/"
          imgSrc="https://www.joseivanaguilar.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-13-at-3.42.09-PM.jpeg"
        />
        <Card
          imgAlt="Dog"
          href="https://www.dogrescue.se/en/"
          imgSrc="./public/bild.jpg"
        />
      </div>
      <div>
        <div className="flex p-10 justify-center flex-col">
          <h1 className="flex justify-center pt-10 text-lg font-semibold text-gray-600">
            Two Modals with different content
          </h1>
          <div className="flex justify-center mt-10">
            <button
              className="flex p-9 border border-black rounded-md  "
              onClick={() => setShow(true)}
            >
              Open Modal
            </button>
          </div>
          <Modal show={show} onClose={() => setShow(false)} size="medium">
            <Modal.Header>This is a Modal</Modal.Header>
            <Modal.Body>
              <p>
                This is a Card, can u see it ?
              </p>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
        <div className="flex p-14 justify-center">
          <button
            className="flex p-9 border border-black rounded-md -z-1 "
            onClick={() => setShow2(true)}
          >
            Open Modal
          </button>
          <Modal show={show2} onClose={() => setShow2(false)}>
            <Modal.Header>This is Modal 2</Modal.Header>
            <Modal.Body>Great it works!</Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;