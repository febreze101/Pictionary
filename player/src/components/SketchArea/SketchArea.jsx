import { Box, Button, FormLabel, Slider, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

function Canvas() {
  const canvasRef = useRef(ReactSketchCanvas);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleStrokeWidthChange = (event) => {
    setStrokeWidth(+event.target.value);
  };

  const handleEraserWidthChange = (event) => {
    setEraserWidth(+event.target.value);
  };

  return (
    <>
      <Box>
        <Typography variant="h4">Tools</Typography>
        <Button
          variant="contained"
          disabled={!eraseMode}
          onClick={handlePenClick}
        >
          Pen
        </Button>
        <Button
          variant="contained"
          disabled={eraseMode}
          onClick={handleEraserClick}
        >
          Eraser
        </Button>
        <FormLabel>Stroke Width</FormLabel>
        <Slider
          aria-label="stroke-width"
          min={1}
          max={20}
          step={1}
          disabled={eraseMode}
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
        <FormLabel>Eraser Width</FormLabel>
        <Slider
          aria-label="erase-width"
          min={1}
          max={20}
          step={1}
          disabled={!eraseMode}
          value={eraserWidth}
          onChange={handleEraserWidthChange}
        />
        <Typography variant="h1">Draw here!</Typography>
        <ReactSketchCanvas
          ref={canvasRef}
          width="500px"
          height="500px"
          canvasColor="transparent"
          eraserWidth={eraserWidth}
          strokeWidth={strokeWidth}
        />
      </Box>
    </>
  );
}

export default Canvas;
