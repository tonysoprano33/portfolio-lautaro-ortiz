import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const metrics = [
  { value: "100+", label: "patients managed" },
  { value: "300+", label: "reports generated" },
  { value: "3", label: "daily users" },
];

const chips = ["Python", "Data", "Automation", "Real systems"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #06070b 0%, #0d1220 52%, #111827 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.16,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(91,102,255,0.15) 0%, rgba(55,180,255,0.08) 45%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 14,
            background: "linear-gradient(180deg, #5b66ff 0%, #37b4ff 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            gap: 36,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "6px 0",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(148, 163, 184, 0.22)",
                  background: "rgba(255, 255, 255, 0.04)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                  color: "#93c5fd",
                }}
              >
                Portfolio
              </div>

              <div
                style={{
                  fontSize: 78,
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: -2,
                  maxWidth: 680,
                }}
              >
                Lautaro Ortiz
              </div>

              <div
                style={{
                  fontSize: 30,
                  lineHeight: 1.2,
                  color: "#dbeafe",
                  maxWidth: 690,
                  fontWeight: 600,
                }}
              >
                Internal tools developer building software for clinics,
                automation and data workflows.
              </div>

              <div
                style={{
                  fontSize: 23,
                  lineHeight: 1.45,
                  color: "rgba(226, 232, 240, 0.82)",
                  maxWidth: 700,
                }}
              >
                Real systems, measurable impact, and case studies that show
                the work holds up after delivery.
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {chips.map((chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(148, 163, 184, 0.22)",
                    color: "#e2e8f0",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: 392,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                padding: 30,
                borderRadius: 28,
                border: "1px solid rgba(148, 163, 184, 0.2)",
                background: "rgba(8, 12, 24, 0.72)",
                boxShadow: "0 24px 80px rgba(0, 0, 0, 0.32)",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#93c5fd",
                }}
              >
                Real proof
              </div>

              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: "18px 20px",
                    borderRadius: 22,
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(148, 163, 184, 0.16)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 46,
                      lineHeight: 1,
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {metric.value}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      lineHeight: 1.2,
                      color: "#cbd5e1",
                      fontWeight: 600,
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: 18,
                lineHeight: 1.4,
                color: "rgba(226, 232, 240, 0.78)",
                paddingLeft: 4,
              }}
            >
              Built for real clinic workflows and easy to explain in an
              interview.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
