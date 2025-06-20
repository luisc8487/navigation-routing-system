import {useState} from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
        nunc sit amet est vehicula auctor nec sit amet urna. Vestibulum id
        facilisis urna, eu fermentum turpis. Mauris ut risus sem. Quisque risus
        orci, facilisis at facilisis ac, fermentum sit amet quam. Donec sagittis
        ipsum at egestas tincidunt. Maecenas efficitur sem non dui convallis
        congue. Etiam congue eget orci congue ornare. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Cras ut mi scelerisque lorem sagittis tempor. Duis consequat, purus a
        accumsan fermentum, nibh nibh congue justo, vitae tincidunt eros nunc
        vel nunc. Donec eget orci id magna suscipit scelerisque non eget felis.
        Curabitur non feugiat orci. In hac habitasse platea dictumst.
      </p>
    </div>
  );
}

export default ModalPage;
