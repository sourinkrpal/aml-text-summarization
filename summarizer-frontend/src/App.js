import React, { useState } from "react";
import {
  FaMagic,
  FaCopy,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { PiTextTLight } from "react-icons/pi";
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/system";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";

const GradientBackground = styled("div")({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #B71C1C 0%, #FF8A80 100%)",
  padding: "2rem",
  position: "relative",
});

const GlassPanel = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(8px)",
  borderRadius: "16px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
  padding: "1.5rem",
  height: "130%",
  display: "flex",
  flexDirection: "column",
}));

const ScrollableArea = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  borderRadius: "8px",
  padding: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#B71C1C",
    borderRadius: "4px",
  },
}));

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/summarize", {
        text,
      });
      setSummary(response.data.summary);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleCopy = () => navigator.clipboard.writeText(summary);

  const handleDownload = () => {
    const blob = new Blob([summary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <GradientBackground>
      <CssBaseline />

      {/* Logos */}
      <Box
        sx={{ position: "absolute", top: 40, left: 40, width: 150, height: 60 }}
      >
        <img
          src={logo1}
          alt="Logo 1"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 150,
          height: 60,
        }}
      >
        <img
          src={logo2}
          alt="Logo 2"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>

      {/* Header Section */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/sourinkrpal/"
              target="_blank"
              size="small"
            >
              <FaLinkedin size={24} style={{ color: "white" }} />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.7rem" }}
            >
              Sourin
            </Typography>
          </Box>

          <IconButton
            href="https://github.com/sourinkrpal/aml-text-summarization/"
            target="_blank"
            size="small"
          >
            <FaGithub size={24} style={{ color: "white" }} />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/jhameeda/"
              target="_blank"
              size="small"
            >
              <FaLinkedin size={24} style={{ color: "white" }} />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.9)", fontSize: "0.7rem" }}
            >
              Jassim
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "white",
            textShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          Text Summarizer
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "rgba(255,255,255,0.85)", fontSize: "1.2rem" }}
        >
          AML Mini Project
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic", fontSize: "rem" }}
        >
          by Sourin Kumar Pal & Jassim Hameed Ayobkhan
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ p: 0 }}>
        <Grid container spacing={3} sx={{ height: "400px" }}>
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <GlassPanel>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 2 , gap: 1 }}
              >
                <PiTextTLight size={24} style={{ color: "#B71C1C" }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Input Text
                </Typography>
              </Box>

              <ScrollableArea>
                <TextField
                  fullWidth
                  multiline
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text here..."
                  inputProps={{ maxLength: 5000 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      alignItems: "flex-start",
                      "& textarea": { overflowY: "auto !important" },
                      "& fieldset": { border: "none" },
                    },
                  }}
                />
              </ScrollableArea>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="caption" color="textSecondary">
                  {text.length}/5000 characters
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      text && !loading
                        ? "linear-gradient(45deg, #B71C1C 0%, #FF8A80 100%)"
                        : "rgba(183, 28, 28, 0.2)",
                    color: text && !loading ? "white" : "rgba(255,255,255,0.7)",
                    borderRadius: "8px",
                    px: 4,
                    fontWeight: 600,
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        text && !loading
                          ? "linear-gradient(45deg, #D32F2F 0%, #FF8A80 100%)"
                          : "rgba(183, 28, 28, 0.2)",
                      boxShadow:
                        text && !loading
                          ? "0 4px 12px rgba(183, 28, 28, 0.3)"
                          : "none",
                    },
                    "&.Mui-disabled": {
                      background: "rgba(183, 28, 28, 0.15)",
                      color: "rgba(255,255,255,0.5)",
                      cursor: "not-allowed",
                    },
                  }}
                  onClick={handleSummarize}
                  disabled={!text || loading}
                  startIcon={
                    loading && (
                      <CircularProgress
                        size={20}
                        sx={{ color: "rgba(255,255,255,0.5)" }}
                      />
                    )
                  }
                >
                  {loading ? "Processing..." : "Summarize"}
                </Button>
              </Box>
            </GlassPanel>
          </Grid>

          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <GlassPanel>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <FaMagic size={20} style={{ color: "#B71C1C" }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Generated Summary
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    onClick={handleCopy}
                    size="small"
                    sx={{ mr: 1, color: "#B71C1C" }}
                  >
                    <FaCopy size={18} />
                  </IconButton>
                  <IconButton
                    onClick={handleDownload}
                    size="small"
                    sx={{ color: "#B71C1C" }}
                  >
                    <FaDownload size={18} />
                  </IconButton>
                </Box>
              </Box>

              <ScrollableArea>
                {summary || (
                  <Typography
                    color="textSecondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    Generated summary will appear here...
                  </Typography>
                )}
              </ScrollableArea>

              <Box sx={{ mt: 2, textAlign: "right" }}>
                <Typography variant="caption" color="textSecondary">
                  {summary ? `${summary.length} characters` : " "}
                </Typography>
              </Box>
            </GlassPanel>
          </Grid>
        </Grid>
      </Container>
    </GradientBackground>
  );
}

export default App;
