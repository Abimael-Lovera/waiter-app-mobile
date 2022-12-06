import { Text } from '../Text';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Form, Header, Input, ModalBody, Overlay } from './style';
import { Close } from '../Icons/Close';
import { Button } from '../Button';

export function TableModal() {


  return(
    <Modal transparent >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity>
              <Close color="#666"/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Numero de mesa"
              placeholderTextColor="#666"
              keyboardType='number-pad'
            />
            <Input
              placeholder="Numero de mesa"
              placeholderTextColor="#666"
            />

            <Button onPress={()=> alert('Salvou!')}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
