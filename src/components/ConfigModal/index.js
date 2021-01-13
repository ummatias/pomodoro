import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components';

import Header from './components/Header';
import TimeSection from './components/TimeSection';
import ThemeSection from './components/ThemeSection';
import { ModalBackground } from './styles';

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