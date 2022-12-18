import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  ContainerDragArea,
  ContainerWrap,
  FileSelectedName,
  FileUploadWrap,
} from "./styles";
import { DragAndDropProps } from "./types";

const DragAndDrop: React.FC<DragAndDropProps> = ({ onChange }) => {
  const [nameFile, setNameFile] = useState("");
  const [label, setLabel] = useState("");
  const [showFileName, setShowFileName] = useState(false);

  const handleSelectFile = React.useCallback(
    async (file: File) => {
      if (onChange) onChange(file);
      setNameFile(file.name);
    },
    [onChange]
  );

  useEffect(() => {
    let extensionFile = nameFile.includes(".png") || nameFile.includes(".jpeg");
    if (extensionFile) setShowFileName(true);
    if (nameFile.length === 0 || extensionFile) {
      setLabel("");
    } else if (nameFile.length > 0 && !extensionFile) {
      setLabel("*Archivo no compatible*");
      setShowFileName(false);
    }
  }, [nameFile]);

  return (
    <ContainerWrap>
      <ContainerDragArea>
        <FileUploadWrap>
          <input
            type="file"
            className="file-upload"
            onChange={({ target }: any) => handleSelectFile(target.files[0])}
          />

          {showFileName ? (
            <FileSelectedName>
              <Typography variant="h3">{nameFile}</Typography>
            </FileSelectedName>
          ) : (
            <Typography variant="h2">Arrastra el archivo</Typography>
          )}
        </FileUploadWrap>
      </ContainerDragArea>
      <Typography variant="h3">{label}</Typography>
    </ContainerWrap>
  );
};

export default DragAndDrop;
