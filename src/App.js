import React, { useState, useEffect } from 'react';
import {UncontrolledModal} from "./UncontrolledModal";
import {ControlledModal} from "./ControlledModal";

function App() {
    const [shouldShowModal, setShouldShowModal] = useState(false);

    return (  <>
        <ControlledModal shouldShow = {shouldShowModal} onRequestClose={() =>setShouldShowModal(false)}>
            <h1>Echo Controlled Modal</h1>
        </ControlledModal>
        <button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide Modal' : 'Show Modal'}</button>
    </>);
}

export default App;