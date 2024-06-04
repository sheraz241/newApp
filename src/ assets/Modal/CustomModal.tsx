import { View, Text, Modal, Alert, Pressable } from 'react-native';
import React from 'react';
import { StyleSheetModal } from '../Styles/Modal';
import CustomButton from '../Button/CustomButton';
import EmailVerification from '../../ assets/icons/EmailVerification';
import { primaryColors } from '../color';

const CustomModal = ({ titel, visible, onContinue, titeltext }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onContinue}>
      <View style={StyleSheetModal.centeredView}>
        <View style={StyleSheetModal.modalView}>
          <EmailVerification />
          <Text style={StyleSheetModal.modalText}>{titel}</Text>
          <Text style={StyleSheetModal.titelTextmodal}>{titeltext}</Text>
          <View style={{ paddingTop: 40, width: 100, marginRight: 100 }}>
            <Pressable
              style={StyleSheetModal.buttonContainer}
              onPress={onContinue}>
              <Text style={StyleSheetModal.btnText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
