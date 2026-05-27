import { useState } from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import SendIcon from "@mui/icons-material/Send";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const themeGradient = "linear-gradient(135deg, #0F4C81 0%, #1976d2 100%)";
const accentYellow = "#ffb805";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Feedback submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        background: "#f7fbff",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          background: themeGradient,
          color: "#fff",
          py: { xs: 6, md: 8 },
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
            color: "#fff",
          }}
        >
          We Value Your Feedback
        </Typography>

        <Typography
          sx={{
            maxWidth: 720,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            color: "rgba(255,255,255,.88)",
          }}
        >
          Share your questions, concerns, or suggestions so we can improve our
          service and support your healthcare supply needs better.
        </Typography>
      </Box>

      <Box
        className="container"
        sx={{
          py: { xs: 5, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.85fr 1.35fr",
            },
            gap: 4,
            alignItems: "stretch",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "8px",
              border: "1px solid rgba(15, 76, 129, 0.08)",
              boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
              background: "#ffffff",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#0f4c81",
                fontSize: "1.5rem",
                fontWeight: 800,
                mb: 2,
              }}
            >
              How We Can Help
            </Typography>

            <Typography
              sx={{
                color: "#5f7283",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Whether you need product information, quotation assistance, or
              service support, our team is ready to listen.
            </Typography>

            <Stack spacing={3}>
              <InfoItem
                icon={<SupportAgentIcon />}
                title="Customer Support"
                text="Tell us what you need and our team will review your concern."
              />

              <InfoItem
                icon={<MarkEmailReadIcon />}
                title="Email Response"
                text="We may contact you through the email address you provide."
              />

              <InfoItem
                icon={<AccessTimeIcon />}
                title="Timely Assistance"
                text="We aim to respond as soon as possible during business hours."
              />
            </Stack>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "8px",
              border: "1px solid rgba(15, 76, 129, 0.08)",
              boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
              background: "#ffffff",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#0f4c81",
                fontSize: "1.5rem",
                fontWeight: 800,
                mb: 1,
              }}
            >
              Send Feedback
            </Typography>

            <Typography
              sx={{
                color: "#5f7283",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Complete the form below and let us know how we can improve.
            </Typography>

            {submitted ? (
              <Alert
                severity="success"
                sx={{
                  mb: 3,
                  borderRadius: "8px",
                }}
              >
                Thank you! Your feedback has been received.
              </Alert>
            ) : null}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  minRows={5}
                />

                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    background: accentYellow,
                    color: "#0f4c81",
                    fontWeight: 800,
                    borderRadius: "999px",
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    boxShadow: "none",

                    "&:hover": {
                      background: "#e9a600",
                      boxShadow: "none",
                    },
                  }}
                >
                  Submit Feedback
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const InfoItem = ({ icon, title, text }: InfoItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 46,
          height: 46,
          flex: "0 0 46px",
          borderRadius: "50%",
          background: "#fff5d6",
          color: "#0f4c81",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255, 184, 5, 0.65)",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#0f4c81",
            fontWeight: 800,
            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#5f7283",
            lineHeight: 1.6,
            fontSize: "0.95rem",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
