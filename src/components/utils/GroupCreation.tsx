import React from "react";
import { Button, Modal } from "native-base";
import { useState } from "react";

const GroupCreationModal = () => {
    const [showModal, setShowModal] = useState(true)

    return (
    <Modal isOpen={showModal} size={"full"} onClose={() => setShowModal(false)}>
        <Modal.Content height="90%" {...styles["bottom"]}>
          <Modal.CloseButton />
          <Modal.Header>Nuevo grupo</Modal.Header>
          <Modal.Body>
            Test modal body
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>
                Crear
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
}

const styles = {
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
    }, 
    center: {},
}
export default GroupCreationModal;