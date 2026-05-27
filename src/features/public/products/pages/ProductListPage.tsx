import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  {
    id: 1,
    name: "Medical Disposable Gloves",
    category: "Medical Disposables",
    description:
      "Durable disposable gloves suitable for clinics, laboratories, and patient care use.",
    image: "/src/shared/styles/images/medical-disposable.png",
    status: "Available",
  },
  {
    id: 2,
    name: "Digital Blood Pressure Monitor",
    category: "Medical Devices",
    description:
      "Easy-to-use monitoring device for routine blood pressure checks and patient assessment.",
    image: "/src/shared/styles/images/medical-devices.png",
    status: "Available",
  },
  {
    id: 3,
    name: "Hospital Support Supplies",
    category: "Hospital Solutions",
    description:
      "Essential supplies for patient rooms, treatment areas, and healthcare operations.",
    image: "/src/shared/styles/images/hospital-solutions.png",
    status: "For Quotation",
  },
];

export default function ProductListPage() {
  return (
    <Box
      sx={{
        background: "#f7fbff",
        minHeight: "100vh",
        py: { xs: 5, md: 8 },
      }}
    >
      <Box className="container">
        <Box sx={{ mb: 5, textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              color: "#0f4c81",
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 1.5,
            }}
          >
            Medical Products
          </Typography>

          <Typography
            sx={{
              color: "#5f7283",
              maxWidth: 720,
              mx: "auto",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Browse dependable medical supplies, healthcare devices, and facility
            support products for clinics, hospitals, laboratories, and care
            providers.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "8px",
                  border: "1px solid rgba(15, 76, 129, 0.08)",
                  boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: 220,
                    objectFit: "cover",
                    backgroundColor: "#eef6fc",
                  }}
                />

                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 1,
                      mb: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{
                        background: "#fff5d6",
                        color: "#0f4c81",
                        border: "1px solid rgba(255, 184, 5, 0.65)",
                        fontWeight: 700,
                      }}
                    />

                    <Chip
                      label={product.status}
                      size="small"
                      sx={{
                        background: "#edf7f1",
                        color: "#237a47",
                        fontWeight: 700,
                      }}
                    />
                  </Box>

                  <Typography
                    component="h2"
                    sx={{
                      color: "#0f4c81",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      mb: 1,
                      lineHeight: 1.25,
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#5f7283",
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/products/${product.id}`}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      alignSelf: "flex-start",
                      background: "#ffb805",
                      color: "#0f4c81",
                      fontWeight: 800,
                      borderRadius: "999px",
                      px: 2.5,
                      textTransform: "none",
                      boxShadow: "none",

                      "&:hover": {
                        background: "#e9a600",
                        boxShadow: "none",
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
