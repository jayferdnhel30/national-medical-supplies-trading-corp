import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

export default function AboutPage() {
  const features = [
    {
      icon: <MedicalServicesOutlinedIcon fontSize="large" />,
      title: "Quality Products",
      description:
        "We provide certified medical supplies and healthcare equipment from trusted manufacturers.",
    },
    {
      icon: <LocalShippingOutlinedIcon fontSize="large" />,
      title: "Fast Delivery",
      description:
        "Reliable nationwide delivery for hospitals, clinics, and healthcare institutions.",
    },
    {
      icon: <SupportAgentOutlinedIcon fontSize="large" />,
      title: "Expert Support",
      description:
        "Our team is ready to assist with product selection and procurement needs.",
    },
    {
      icon: <VerifiedOutlinedIcon fontSize="large" />,
      title: "Trusted Supplier",
      description:
        "Committed to providing authentic products with excellent customer service.",
    },
  ];

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
            About Us
          </Typography>

          <Typography
            component="p"
            variant="h6"
            sx={{
              maxWidth: 700,
              opacity: 0.9,
            }}
          >
            Delivering trusted medical supplies and healthcare solutions to
            hospitals, clinics, laboratories, and healthcare professionals.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  component="h2"
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  Our Mission
                </Typography>

                <Typography component="p" color="text.secondary">
                  To provide accessible, affordable, and high-quality medical
                  products while maintaining exceptional customer service and
                  supporting better healthcare outcomes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  component="h2"
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  Our Vision
                </Typography>

                <Typography component="p" color="text.secondary">
                  To become the leading medical supplies provider recognized for
                  innovation, reliability, and excellence in healthcare
                  distribution.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box
        sx={{
          bgcolor: "grey.100",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography
                component="h3"
                variant="h3"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                500+
              </Typography>

              <Typography component="p" color="text.secondary">
                Medical Products
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography
                component="h3"
                variant="h3"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                100+
              </Typography>

              <Typography component="p" color="text.secondary">
                Healthcare Clients
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography
                component="h3"
                variant="h3"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                10+
              </Typography>

              <Typography component="p" color="text.secondary">
                Years Experience
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Typography
                component="h3"
                variant="h3"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                24/7
              </Typography>

              <Typography component="p" color="text.secondary">
                Customer Support
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, textAlign: "center" }}
        >
          Why Choose Us
        </Typography>

        <Typography
          component="p"
          color="text.secondary"
          sx={{ mb: 6, textAlign: "center" }}
        >
          We are dedicated to providing reliable healthcare solutions for
          medical professionals and institutions.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    component="h3"
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography component="p" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box
        sx={{
          py: 10,
          bgcolor: "primary.main",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, textAlign: "center" }}
            >
              Ready to Partner With Us?
            </Typography>

            <Typography component="p" sx={{ textAlign: "center" }}>
              Contact our team today to learn more about our medical supplies
              and healthcare solutions.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#fff",
                color: "primary.main",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
