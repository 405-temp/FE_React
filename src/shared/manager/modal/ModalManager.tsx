'use client';

import useGlobalDialog from '@/shared/manager/modal/useGlobalModal';
import { Button, Container, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { createPortal } from 'react-dom';
import './modal.scss';

export default function DialogManager() {
  const { confirmMessage, isViewConfirm, confirm, deny } = useGlobalDialog();

  if (!isViewConfirm) {
    return null;
  }

  return createPortal(
    <Modal size="sm" isOpen onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <div className="header__container">
            <p className="header__text">{confirmMessage.header}</p>
          </div>
        </ModalHeader>

        <div className="description__container">
          <p className="description__text">{confirmMessage.description}</p>
        </div>

        <ModalBody>
          <div className="body__container">
            <p className="body__content">{confirmMessage.contents}</p>
          </div>
        </ModalBody>

        <ModalFooter>
          {confirmMessage.type === 'alert' && (
            <Container className="bottom__btn-group">
              <Button onClick={confirm}>{confirmMessage.confirmTitle}</Button>
            </Container>
          )}

          {confirmMessage.type === 'confirm' && (
            <Flex className="bottom__btn-group">
              {/* <Button onClick={deny}>{confirmMessage.cancelTitle}</Button> */}
              <Button onClick={confirm}>{confirmMessage.confirmTitle}</Button>
            </Flex>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>,
    document.querySelector('#root') || document.body,
  );
}
