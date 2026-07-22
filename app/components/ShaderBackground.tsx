"use client";

import dynamic from "next/dynamic";

/**
 * The `shaders` package renders through WebGPU and touches `navigator.gpu` on
 * import, so it can only be loaded in the browser. Where WebGPU is missing
 * (older Firefox, locked-down browsers) the stack simply renders nothing and
 * the #EFEFEF base colour behind it shows through.
 */
const ShaderStack = dynamic(() => import("./ShaderStack"), { ssr: false });

export default function ShaderBackground() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <ShaderStack />
    </div>
  );
}
