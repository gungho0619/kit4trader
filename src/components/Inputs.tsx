import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import { Box, Typography, TextField } from "@mui/material";

interface containerProps {
  visited: number;
  textWidth?: string;
}

interface NormalInputProps {
  value: any;
  setValue: any;
  type: string;
  label?: string;
  name: string;
  placeholder?: string;
  component?: React.ReactNode;
}

export const NormalInput = (props: NormalInputProps) => {
  const { value, setValue, type, name, placeholder, component, label } = props;
  const [isVisit, setVisit] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (inputRef.current && !inputRef.current.contains(event.target as any)) {
      setVisit(false);
    }
  };

  const handleClickInside = () => {
    setVisit(true);
    valueRef.current?.focus();
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event as any)
    );
  }, [inputRef]);
  return (
    <NormalContainer
      ref={inputRef}
      visited={isVisit ? 1 : 0}
      onMouseUp={() => handleClickInside()}
    >
      <NormalArea>
        <LabelText visited={isVisit ? 1 : 0}>{label}</LabelText>
        <NormalInputFieldValue
          value={value}
          type={type}
          name={name}
          ref={valueRef}
          placeholder={placeholder}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setValue(e.currentTarget.value)
          }
        />
        {component}
      </NormalArea>
    </NormalContainer>
  );
};

const NormalContainer = styled(Box)<containerProps>(({ visited, theme }) => ({
  width: "360px",
  padding: "16px 15px",
  border: visited === 1 ? "1px solid #7C72F2" : "1px solid #E2E2E2",
  borderRadius: "8px",
  [theme.breakpoints.down("xs")]: {
    padding: "8px",
  },
  [theme.breakpoints.down(640)]: {
    width: "90%",
  },
}));

const LabelText = styled(Box)<containerProps>(({ visited, theme }) => ({
  color: visited === 1 ? "#7C72F2" : "#7C7C7C",
  position: "absolute",
  background: "white",
  top: "-28px",
  left: "0px",
  padding: "0px 4px",
}));

const NormalArea = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  justifyContent: "space-between",
  position: "relative",
}));

const NormalInputFieldValue = styled("input")(({ theme }) => ({
  outline: "none",
  width: "100%",
  background: "none",
  border: "none",
  color: "#18181B",
  fontSize: "16px",
  lineHeight: "22px",
  fontWeight: "400",
  letterSpacing: "0.05em",
  "::placeholder": {
    color: "#777E90",
  },
  // [theme.breakpoints.down(390)]: {
  //   width: '50px'
  // },
}));
