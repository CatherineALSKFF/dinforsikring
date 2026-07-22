import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "DinForsikringsHjelp.no - uavhengig forsikringssammenligning";

/**
 * Link-preview card. Rendered with system fonts only so the build never has to
 * reach the network for a webfont.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #eef3fd 0%, #cddcf5 100%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "999px",
              background: "#1D4ED8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: "28px", fontWeight: 600, color: "#111827" }}>
            DinForsikringsHjelp.no
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#111827",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Uavhengig forsikringshjelp.</span>
            <span>Vi sammenligner for deg.</span>
          </div>
          <div style={{ fontSize: "30px", color: "#4B5563", marginTop: "28px" }}>
            Bedre pris og bedre vilkår, uten binding.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              background: "#1D4ED8",
              color: "white",
              fontSize: "24px",
              fontWeight: 500,
              padding: "14px 30px",
              borderRadius: "999px",
              display: "flex",
            }}
          >
            Start forsikringsgjennomgang
          </div>
          <div style={{ fontSize: "22px", color: "#4B5563", display: "flex" }}>
            Pengene-tilbake-garanti
          </div>
        </div>
      </div>
    ),
    size
  );
}
