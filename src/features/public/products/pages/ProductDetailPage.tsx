import { Link, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import VerifiedIcon from "@mui/icons-material/Verified";

const PRODUCT_IMAGE_BASE = "/images";
const accentYellow = "#ffb805";
const themeGradient = "linear-gradient(135deg, #0F4C81 0%, #1976d2 100%)";

const products = [
  {
    id: 1,
    name: "Medical Disposable Gloves",
    category: "Medical Disposables",
    status: "Available",
    image: `${PRODUCT_IMAGE_BASE}/medical-disposable.png`,
    summary:
      "Durable disposable gloves suitable for clinics, laboratories, and patient care use.",
    description:
      "Designed for everyday clinical protection, these disposable gloves help support safe handling, cleanliness, and infection-control routines across healthcare environments.",
    features: [
      "Suitable for clinics, hospitals, and laboratories",
      "Comfortable fit for routine medical tasks",
      "Ideal for patient care, cleaning, and handling supplies",
      "Available for bulk quotation and facility orders",
    ],
  },
  {
    id: 2,
    name: "Digital Blood Pressure Monitor",
    category: "Medical Devices",
    status: "Available",
    image: `${PRODUCT_IMAGE_BASE}/medical-devices.png`,
    summary:
      "Easy-to-use monitoring device for routine blood pressure checks and patient assessment.",
    description:
      "A practical digital blood pressure monitor for healthcare teams that need dependable, easy-to-read measurements during routine checks and patient monitoring.",
    features: [
      "Simple operation for daily use",
      "Clear digital display for quick reading",
      "Useful for clinics, patient rooms, and health stations",
      "Supports routine blood pressure assessment",
    ],
  },
  {
    id: 3,
    name: "Hospital Support Supplies",
    category: "Hospital Solutions",
    status: "For Quotation",
    image: `${PRODUCT_IMAGE_BASE}/hospital-solutions.png`,
    summary:
      "Essential supplies for patient rooms, treatment areas, and healthcare operations.",
    description:
      "A flexible range of hospital support products for treatment spaces, patient rooms, and daily healthcare operations.",
    features: [
      "Helpful for patient rooms and treatment areas",
      "Supports organized healthcare facility operations",
      "Available depending on facility requirements",
      "Recommended for quotation-based purchasing",
    ],
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <Box
        sx={{
          background: "#f7fbff",
          minHeight: "100vh",
          py: { xs: 6, md: 10 },
        }}
      >
        <Box className="container">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "8px",
              textAlign: "center",
              border: "1px solid rgba(15, 76, 129, 0.08)",
              boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
            }}
          >
            <Typography
              component="h1"
              sx={{
                color: "#0f4c81",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              Product Not Found
            </Typography>

            <Typography
              sx={{
                color: "#5f7283",
                mb: 3,
              }}
            >
              The product you are looking for may have been removed or is no
              longer available.
            </Typography>

            <Button
              component={Link}
              to="/products"
              startIcon={<ArrowBackIcon />}
              variant="contained"
              sx={{
                background: accentYellow,
                color: "#0f4c81",
                fontWeight: 800,
                borderRadius: "999px",
                textTransform: "none",
                boxShadow: "none",

                "&:hover": {
                  background: "#e9a600",
                  boxShadow: "none",
                },
              }}
            >
              Back to Products
            </Button>
          </Paper>
        </Box>
      </Box>
    );
  }

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
          py: { xs: 5, md: 7 },
          px: 2,
        }}
      >
        <Box className="container">
          <Button
            component={Link}
            to="/products"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: "#fff",
              mb: 3,
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                background: "rgba(255,255,255,.12)",
              },
            }}
          >
            Back to Products
          </Button>

          <Typography
            component="h1"
            sx={{
              color: "#fff",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              mb: 2,
              maxWidth: 900,
            }}
          >
            {product.name}
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Chip
              label={product.category}
              sx={{
                background: "#fff5d6",
                color: "#0f4c81",
                border: "1px solid rgba(255, 184, 5, 0.65)",
                fontWeight: 800,
              }}
            />

            <Chip
              label={product.status}
              sx={{
                background: "rgba(255,255,255,.16)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.32)",
                fontWeight: 800,
              }}
            />
          </Stack>
        </Box>
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
              md: "1.05fr 0.95fr",
            },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(15, 76, 129, 0.08)",
              boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
              background: "#fff",
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: { xs: 280, md: 430 },
                objectFit: "cover",
                display: "block",
                backgroundColor: "#eef6fc",
              }}
            />
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "8px",
              border: "1px solid rgba(15, 76, 129, 0.08)",
              boxShadow: "0 10px 28px rgba(15, 76, 129, 0.08)",
              background: "#fff",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#0f4c81",
                fontSize: "1.5rem",
                fontWeight: 800,
                mb: 1.5,
              }}
            >
              Product Overview
            </Typography>

            <Typography
              sx={{
                color: "#5f7283",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography
              component="h3"
              sx={{
                color: "#0f4c81",
                fontSize: "1.1rem",
                fontWeight: 800,
                mb: 2,
              }}
            >
              Key Details
            </Typography>

            <Stack spacing={2.25}>
              {product.features.map((feature) => (
                <DetailItem key={feature} text={feature} />
              ))}
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Stack
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: 1.5,
                flexWrap: "wrap",
              }}
            >
              <Button
                component={Link}
                to="/feedback"
                variant="contained"
                startIcon={<EmailIcon />}
                sx={{
                  background: accentYellow,
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
                Request Quotation
              </Button>

              <Button
                component={Link}
                to="/products"
                variant="outlined"
                startIcon={<Inventory2Icon />}
                sx={{
                  color: "#0f4c81",
                  borderColor: "rgba(15, 76, 129, 0.35)",
                  fontWeight: 800,
                  borderRadius: "999px",
                  px: 2.5,
                  textTransform: "none",

                  "&:hover": {
                    borderColor: "#0f4c81",
                    background: "rgba(15, 76, 129, 0.05)",
                  },
                }}
              >
                View More Products
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

interface DetailItemProps {
  text: string;
}

const DetailItem = ({ text }: DetailItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
      }}
    >
      <VerifiedIcon
        sx={{
          color: "#0f4c81",
          fontSize: 22,
          mt: "2px",
        }}
      />

      <Typography
        sx={{
          color: "#5f7283",
          lineHeight: 1.6,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
