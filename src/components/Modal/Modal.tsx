import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import { useFeedbackDialogStyles } from '@components/FeedbackDialog/FeedbackDialog.styles';

export interface ModalProps {
  title: string | null;
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  title = '',
  children,
  isOpen,
  closeModal,
  className,
}) => {
  const { blurPage } = useFeedbackDialogStyles();

  useEffect(() => {
    document.body.classList[isOpen ? 'add' : 'remove'](blurPage);
    return () => {
      document.body.classList.remove(blurPage);
    };
  }, [blurPage, isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="responsive-dialog-title"
      hideBackdrop
      maxWidth="md"
    >
      <DialogTitle id="responsive-dialog-title">
        <Box display="flex" flexDirection="column">
          <Box alignSelf="flex-end">
            <IconButton aria-label="close" role="button" onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            flexGrow={1}
            fontWeight="bold"
            px={2.5}
            fontSize={20}
            lineHeight="1.75rem"
            letterSpacing="0"
          >
            {title}
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};
