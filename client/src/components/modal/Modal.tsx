import React from "react";

import {
  Button,
  Dialog,
  DialogProps,
  IconButton,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { Close } from "@mui/icons-material";

type ModalProps = {
  children: React.ReactNode;
  okDisabled?: boolean;
  okText?: string;
  onOk?: () => void;
} & Pick<DialogProps, "onClose" | "open" | "title">;

export const Modal = ({
  children,
  onClose,
  onOk,
  okDisabled,
  okText = "Ok",
  open,
  title,
}: ModalProps): JSX.Element => {
  return (
    <Dialog fullWidth onClose={onClose} open={open}>
      {title && (
        <Header>
          <Typography fontWeight={500} variant="subtitle1">
            {title}
          </Typography>
          <IconButton
            onClick={(e) => onClose?.(e, "escapeKeyDown")}
            size="small"
          >
            <Close />
          </IconButton>
        </Header>
      )}
      <Content>
        <Typography variant="body2">{children}</Typography>
      </Content>
      <Footer>
        <Button
          color="inherit"
          onClick={(e) => onClose?.(e, "escapeKeyDown")}
          size="small"
          variant="text"
        >
          Close
        </Button>
        <Button
          disabled={okDisabled}
          onClick={onOk}
          size="small"
          variant="contained"
        >
          {okText}
        </Button>
      </Footer>
    </Dialog>
  );
};

const Header = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 12px;
`;

const Content = styled.div`
  padding: 0 12px;
`;

const Footer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 12px;
`;
