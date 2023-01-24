import React from 'react';
import { useParams } from 'react-router-dom';

export default function RGBDisplay() {
  const { redColor, greenColor, blueColor } = useParams();

  return (
    <h1 style={{ backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})` }}>
      RGB: {redColor}, {greenColor}, {blueColor}
    </h1>
  );
}
