import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function ContactPage() {
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

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          background: "linear-gradient(135deg, #0F4C81 0%, #1976d2 100%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Contact Us
          </Typography>

          <Typography
            component="p"
            variant="h6"
            sx={{ maxWidth: 760, opacity: 0.9, lineHeight: 1.6 }}
          >
            Have questions or need a quotation? Send us a message and our team
            will get back to you.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontWeight: 800, mb: 2 }}
            >
              Reach Us
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Card sx={{ borderRadius: 4, boxShadow: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 1,
                      }}
                    >
                      <LocationOnOutlinedIcon color="primary" />
                      <Typography sx={{ fontWeight: 700 }}>Address</Typography>
                    </Box>
                    <Typography color="text.secondary">
                      Quezon City, Philippines
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Card sx={{ borderRadius: 4, boxShadow: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 1,
                      }}
                    >
                      <EmailOutlinedIcon color="primary" />
                      <Typography sx={{ fontWeight: 700 }}>Email</Typography>
                    </Box>
                    <Typography color="text.secondary">
                      inquiries@nationalmedical.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Card sx={{ borderRadius: 4, boxShadow: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 1,
                      }}
                    >
                      <PhoneOutlinedIcon color="primary" />
                      <Typography sx={{ fontWeight: 700 }}>Phone</Typography>
                    </Box>
                    <Typography color="text.secondary">
                      +63 912 345 6789
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  Send a Message
                </Typography>

                {submitted && (
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "success.main",
                      color: "success.contrastText",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>Thank you!</Typography>
                    <Typography sx={{ opacity: 0.95 }}>
                      Your message has been received. We will contact you
                      shortly.
                    </Typography>
                  </Box>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        minRows={5}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          borderRadius: 3,
                          px: 4,
                          py: 1.5,
                          fontWeight: 800,
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
