import React, { useRef, useState } from "react";
import styled from "styled-components";

import { PALETTE } from "constants/styles";
import { KEY_CODES } from "constants/keyCodes";

import { EmptyImage } from "components";

import { Button as NativeButton } from "../../basics/buttons";
import { BlankInput } from "../../basics/inputs";

const ImageAreaWrapper = styled.div`
  margin-top: 10px;
  width: 290px;
  height: 350px;

  padding: 20px 0 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 15px;

  background-color: ${PALETTE.getHeaderBackground};
`;

const ImageEl = styled.img`
  width: 250px;
  height: 180px;
`;

const Label = styled.label`
  width: 250px;
  height: 50px;

  outline: none;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 15px;
  border: 2px solid ${PALETTE.blue};

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  transition: background-color 0.3s ease-out;

  background-color: transparent;

  &:focus-within {
    box-shadow: 0 0 10px ${PALETTE.blue};
  }

  &:hover:not(:disabled) {
    color: ${PALETTE.white};
    background-color: ${PALETTE.blue};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Button = styled(NativeButton)`
  margin-top: 10px;
`;

const UploadImage = ({
  className,
  uploadText,
  removeText,
  defaultImage: DefaultImage,
  isRemoveButton = true,
}) => {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const onImageChange = e => {
    setImage(URL.createObjectURL(e.target.files?.[0]));
  };

  const onRemoveImage = () => {
    setImage(null);
  };

  // for case of image selecting after removing the same image
  const onInputClick = e => {
    e.target.value = null;
  };

  // for Label accessibility
  const onKeyDown = e => {
    if (e.keyCode === KEY_CODES.enter) {
      inputRef.current.click();
    }
  };

  return (
    <ImageAreaWrapper className={className}>
      {image ? (
        <ImageEl src={image} alt="Task image preview" />
      ) : (
        <>
          {DefaultImage ? (
            <DefaultImage style={{ width: "250px", height: "250px" }} />
          ) : (
            <EmptyImage />
          )}
        </>
      )}
      <div>
        <BlankInput
          ref={inputRef}
          id="upload-button"
          type="file"
          accept="image/svg+xml"
          onChange={onImageChange}
          onClick={onInputClick}
          hidden
        />
        <Label onKeyDown={onKeyDown} tabIndex={0} htmlFor="upload-button">
          {uploadText || "Upload image"}
        </Label>
        {isRemoveButton && (
          <Button onClick={onRemoveImage}>
            {removeText || "Remove image"}
          </Button>
        )}
      </div>
    </ImageAreaWrapper>
  );
};

export default UploadImage;
