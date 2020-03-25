import Typography from "typography";

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: ["Work Sans", "sans-serif"],
});

// Inserting styles (directly into the head-element)
typography.injectStyles();

export default typography;