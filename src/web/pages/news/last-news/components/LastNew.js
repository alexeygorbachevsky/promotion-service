import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import Media from "helpers/media";

import { EmptyImage as NativeEmptyImage } from "components/empty-image";

const Wrapper = styled.div`
  padding: 20px;
  width: 390px;
  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};

  ${Media.smallerThan.mobileLarge`
     max-width: 300px;
  `}
`;

const Image = styled.img`
  width: 350px;
  height: 190px;
  user-select: none;
  border-radius: 15px;

  ${Media.smallerThan.mobileLarge`
     width: 100%;
  `}
`;

const Text = styled.p`
  margin: 0;
  line-height: ${toREM(20)};
`;

const Title = styled(Text)`
  margin-top: 16px;
  font-size: ${toREM(20)};
  line-height: ${toREM(24)};
`;

const Date = styled(Text)`
  margin-top: 10px;
  color: ${({ theme }) => (theme.isDarkMode ? "#a6adb1" : "#5f5f6e")};
`;

const EmptyImage = styled(NativeEmptyImage)`
  width: 350px;
  height: 190px;

  ${Media.smallerThan.mobileLarge`
     width: 100%;
  `}
`;

const EmptyTitle = styled.div`
  margin-top: 16px;
  width: 80%;
  height: 45px;
  background-color: ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;
`;

const EmptyDate = styled.div`
  margin-top: 10px;
  width: 40%;
  height: 25px;
  background-color: ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;
`;

const LastNew = ({ lastNew: { image, title, date } }) => (
  <Wrapper>
    {image ? <Image src={image} alt="last new" /> : <EmptyImage />}
    {title ? <Title>{title}</Title> : <EmptyTitle />}
    {date ? <Date>{date}</Date> : <EmptyDate />}
  </Wrapper>
);

export default LastNew;
