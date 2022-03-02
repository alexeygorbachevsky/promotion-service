import React, { useRef, useState } from "react";
import styled from "styled-components";

import { BlankButton, BlankInput } from "basics";

import { PALETTE } from "constants/styles";
import { KEY_CODES } from "constants/keyCodes";

import NativeSearchIcon from "assets/icons/search.svg";
import CrossIcon from "assets/icons/cross.svg";

const Wrapper = styled.div`
  width: ${({ $isOpened }) => ($isOpened ? 600 : 200)}px;
  height: 42px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s;
`;

const Input = styled(BlankInput)`
  width: 100%;
  height: 100%;
  padding: 0 55px 0 45px;
  border-radius: 15px;
  background-color: ${PALETTE.getEmptyItemBackground};

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }

  &::placeholder {
    color: ${PALETTE.getText};
    opacity: 0.5;
  }
`;

const SearchIcon = styled(NativeSearchIcon)`
  position: absolute;
  margin-left: 12px;
  color: ${PALETTE.getText};
  opacity: 0.5;
`;

const CloseButton = styled(BlankButton)`
  position: absolute;
  right: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${PALETTE.getText};
  opacity: 0.5;
  transition: all 0.5s;

  &:focus {
    opacity: 1;
    border: 2px solid ${PALETTE.blue};
  }

  @keyframes appearance {
    0% {
      transform: rotateX(-0.2turn);
    }
    100% {
      transform: rotateX(0);
    }
  }
  animation-name: appearance;
  animation-duration: 0.5s;
`;

const Search = () => {
  const [value, setValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);

  let timeOutId = null;

  const onFocus = () => {
    clearTimeout(timeOutId);
    setIsOpened(true);
  };

  const onBlur = () => {
    timeOutId = setTimeout(() => {
      if (!value) {
        setIsOpened(false);
      }
    });
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue("");
    setIsOpened(false);
  };

  const onKeyDown = e => {
    if (e.keyCode === KEY_CODES.esc) {
      onClear();
      // for opportunity to make focus again after blur event when KEY_CODES.esc was pressed
      ref.current.blur();
    }
  };

  // TODO: aria-expanded
  return (
    <Wrapper $isOpened={isOpened}>
      <SearchIcon />
      <Input
        ref={ref}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Search"
      />
      {isOpened && (
        <CloseButton
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClear}
        >
          <CrossIcon />
        </CloseButton>
      )}
    </Wrapper>
  );
};

export default Search;
