// Style preset options for the dropdown
export const styleOptions = [
  {
    name: "Bearnie",
    value: "bearnie",
    description: "Default style. Balanced radius with Inter font.",
  },
  {
    name: "Monana nui",
    value: "monana-nui",
    description: "Rounded and friendly. Uses Figtree font.",
  },
  {
    name: "Rere",
    value: "rere",
    description: "Sharp edges, no radius. Uses Geist font.",
  },
  {
    name: "Valentina",
    value: "valentina",
    description: "Smooth curves with Outfit font.",
  },
];

// Style preset values (radius, spacing, font combinations)
export const stylePresets: Record<string, { radius: string; spacing: string; font: string }> = {
  bearnie: {
    radius: "0.625",
    spacing: "0.25",
    font: "inter",
  },
  "monana-nui": {
    radius: "1",
    spacing: "0.3",
    font: "figtree",
  },
  rere: {
    radius: "0",
    spacing: "0.2",
    font: "geist",
  },
  valentina: {
    radius: "0.75",
    spacing: "0.25",
    font: "outfit",
  },
};
