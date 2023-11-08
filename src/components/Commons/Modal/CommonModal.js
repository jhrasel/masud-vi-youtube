import { Box, Button, Modal } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CommonModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="common__modal">
      <div>
        <Button onClick={handleOpen} className="bg__btn">
          Open modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="common__modal__box">
            <div className="modal__box__content">
              {/* header */}
              <div className="header">
                <h3>Upload Videos</h3>
                <div className="close" onClick={handleClose}>
                  <CloseIcon />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CommonModal;
