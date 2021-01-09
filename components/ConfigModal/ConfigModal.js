import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

import Header from './components/Header/Header';
import TimeSection from './components/TimeSection/TimeSection';
import ThemeSection from './components/ThemeSection/ThemeSection';

const ModalBackground = styled.View`
    background-color: whitesmoke;
    height: 400px;
    width: 350px;
    border-radius: 10px;
    padding: 16px;
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
`

const ConfigModal = ({ visibility, setVisibility }) => {

    return(

        <Modal 
            animationType='slide'
            transparent={true}
            visible={visibility}
        >
            <ModalBackground>  
                <Header close={setVisibility}/>
                <TimeSection />
                <ThemeSection />
            </ModalBackground>
        </Modal>
    )

}

export default ConfigModal;