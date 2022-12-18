import styled from "styled-components";

export const ContainerWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .MuiTypography-h3 {
    font-size: 14px;
    font-weight: 400;
    color: red;
  }
`;

export const ContainerDragArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 22px;
  margin-bottom: 10px;
  border-radius: 11px;
  box-sizing: border-box;
  border: 0.2rem dashed rgba(125, 125, 125, 0.4);
  padding: 0 30px;

  & .MuiTypography-h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: gray;
    margin: 0;
    max-width: 17rem;
  }
`;

export const FileUploadWrap = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .file-upload {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }

  & svg :hover {
    opacity: 0.2;
  }
`;

export const FileSelectedName = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #565a5ead;
  padding: 6px 0px;

  & .MuiTypography-h3 {
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.2;
    color: white;
    margin: 0;
  }
`;
