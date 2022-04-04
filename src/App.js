import React, { useState, useEffect } from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({goToNext}) => (<><h1>Step 1</h1> <button onClick={goToNext}>Next</button></>);
const StepTwo = ({goToNext}) =>  (<><h1>Step 2</h1> <button onClick={goToNext}>Next</button></>);
const StepThree = ({goToNext}) =>  (<><h1>Step 3</h1> <button onClick={goToNext}>Next</button></>);

function App() {
    const [shouldShowModal, setShouldShowModal] = useState(false);
    
    return <>
        <UncontrolledOnboardingFlow>
            <StepOne></StepOne>
            <StepTwo></StepTwo>
            <StepThree></StepThree>
        </UncontrolledOnboardingFlow>
    </>;
}

export default App;