import React from 'react';
import { Modal } from 'react-native';

import Header from './components/Header';
import TimeSection from './components/TimeSection';
import ThemeSection from './components/ThemeSection';
import { ModalBackground } from './styles';

const ConfigModal = ({ visibility, setVisibility, reset }) => {

    return(

        <Modal 
            animationType='slide'
            transparent={true}
            visible={visibility}
        >
            <ModalBackground>  
                <Header close={setVisibility}/>
                <TimeSection reset={reset} />
                <ThemeSection />
            </ModalBackground>
        </Modal>
    )

}

export default ConfigModal;