"use client";

import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";

export default function ShaderStack() {
  return (
    <Shader style={{ width: "100%", height: "100%" }}>
      <Swirl colorA="#f2f6fd" colorB="#d2ddf2" detail={1.7} />
      <ChromaFlow
        baseColor="#e6ecfa"
        downColor="#9CB9EE"
        leftColor="#9CB9EE"
        rightColor="#9CB9EE"
        upColor="#9CB9EE"
        momentum={13}
        radius={3.5}
      />
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      <FilmGrain strength={0.05} />
    </Shader>
  );
}
