import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Tema tanımı
export const theme = createTheme({
  palette: {
    mode: "light", // veya 'dark'
    primary: {
      main: "#556cd6", // Modern mavi tonu
    },
    secondary: {
      main: "#ff6f61", // Soft mercan kırmızısı
    },
    background: {
      default: "#f9fafc", // Hafif gri/beyaz arka plan
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2937", // Koyu gri (siyah yerine)
      secondary: "#4b5563", // Daha açık gri metin
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { textTransform: "none" },
  },
  shape: {
    borderRadius: 12, // Daha yumuşak köşeler
  },
});

// Kullanımı
export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
