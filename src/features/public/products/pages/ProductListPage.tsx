import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { products } from "../services/productsData";

export default function ProductListPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const categories = ["CS SETS", "ORTHO SETS", "NEW SETS"];
  const statusOptions = ["Available", "For Quotation"];

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((p) => {
      const productCategory = Array.isArray(p.category)
        ? p.category.join(" ")
        : p.category;

      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        productCategory.toLowerCase().includes(q) ||
        p.status.toLowerCase().includes(q);

      const matchesCategory =
        !selectedCategory ||
        (Array.isArray(p.category)
          ? p.category.includes(selectedCategory)
          : p.category === selectedCategory);
      const matchesStatus = !selectedStatus || p.status === selectedStatus;

      return matchesQuery && matchesCategory && matchesStatus;
    });
  }, [query, selectedCategory, selectedStatus]);

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory(null);
    setSelectedStatus(null);
  };

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

        <Box
          sx={{
            mb: 3,
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid rgba(15, 76, 129, 0.08)",
            boxShadow: "0 10px 28px rgba(15, 76, 129, 0.06)",
            p: { xs: 2, md: 3 },
          }}
        >
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products (name, category, status)"
                label="Search"
                size="small"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                select
                fullWidth
                size="small"
                label="Category"
                value={selectedCategory ?? ""}
                onChange={(e) =>
                  setSelectedCategory(e.target.value ? e.target.value : null)
                }
              >
                <MenuItem value="">All categories</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                select
                fullWidth
                size="small"
                label="Status"
                value={selectedStatus ?? ""}
                onChange={(e) =>
                  setSelectedStatus(e.target.value ? e.target.value : null)
                }
              >
                <MenuItem value="">All status</MenuItem>
                {statusOptions.map((st) => (
                  <MenuItem key={st} value={st}>
                    {st}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 1 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={resetFilters}
                sx={{
                  borderRadius: "999px",
                  fontWeight: 900,
                  color: "#0f4c81",
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Box>

        {filteredProducts.length === 0 ? (
          <Box sx={{ py: 8, textAlign: "center" }}>
            <Typography sx={{ color: "#0f4c81", fontWeight: 900, mb: 1 }}>
              No products found
            </Typography>
            <Typography sx={{ color: "#5f7283" }}>
              Try adjusting your search or filters.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
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
                        label={
                          Array.isArray(product.category)
                            ? product.category.join(" / ")
                            : product.category
                        }
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
        )}
      </Box>
    </Box>
  );
}
