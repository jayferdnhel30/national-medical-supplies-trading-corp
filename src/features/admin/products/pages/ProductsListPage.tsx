import { useMemo, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const PRODUCT_IMAGE_BASE = "/images";

type ProductStatus = "Available" | "For Quotation";

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  status: ProductStatus;
};

const categories = [
  "CS SETS",
  "Medical Disposables",
  "Medical Devices",
  "Hospital Solutions",
] as const;

const statusOptions: ProductStatus[] = ["Available", "For Quotation"];

// Demo data (until admin products API is wired)
const products: Product[] = [
  {
    id: 1,
    name: "BALFOUR(SELF RETAINING AND BLADDER RETRACTOR)",
    category: "CS SETS",
    description:
      "Durable disposable gloves suitable for clinics, laboratories, and patient care use.",
    image: `${PRODUCT_IMAGE_BASE}/products/balfour.png`,
    status: "Available",
  },
  {
    id: 2,
    name: "MAYO SCISORS STRAIGHT 6",
    category: "CS SETS",
    description:
      "Easy-to-use monitoring device for routine blood pressure checks and patient assessment.",
    image: `${PRODUCT_IMAGE_BASE}/products/mayo-scissors-straight-6.png`,
    status: "Available",
  },
  {
    id: 3,
    name: "MAYO SCISORS CURVED 6",
    category: "CS SETS",
    description:
      "Essential supplies for patient rooms, treatment areas, and healthcare operations.",
    image: `${PRODUCT_IMAGE_BASE}/hospital-solutions.png`,
    status: "For Quotation",
  },
  {
    id: 4,
    name: "Digital Blood Pressure Monitor",
    category: "Medical Devices",
    description:
      "A reliable blood pressure monitor for clinics and home healthcare.",
    image: `${PRODUCT_IMAGE_BASE}/products/mayo-scissors-curved-6.png`,
    status: "Available",
  },
];

export default function ProductsListPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus | null>(
    null,
  );

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.status.toLowerCase().includes(q);

      const matchesCategory =
        !selectedCategory || p.category === selectedCategory;
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
      sx={{ background: "#f7fbff", minHeight: "100vh", py: { xs: 4, md: 6 } }}
    >
      <Box className="container">
        <Box sx={{ mb: 3 }}>
          <Typography
            component="h1"
            sx={{
              color: "#0f4c81",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 900,
              mb: 1,
            }}
          >
            Products (admin)
          </Typography>
          <Typography sx={{ color: "#5f7283", lineHeight: 1.7 }}>
            Search and filter products.
          </Typography>
        </Box>

        {/* Filters bar */}
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
          <Grid container spacing={2}>
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
              <Typography sx={{ color: "#0f4c81", fontWeight: 900, mb: 1 }}>
                Category
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {categories.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <Chip
                      key={cat}
                      label={cat}
                      clickable
                      color={active ? "primary" : "default"}
                      variant={active ? "filled" : "outlined"}
                      onClick={() => setSelectedCategory(active ? null : cat)}
                      sx={{ fontWeight: 900 }}
                    />
                  );
                })}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Typography sx={{ color: "#0f4c81", fontWeight: 900, mb: 1 }}>
                Status
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {statusOptions.map((st) => {
                  const active = selectedStatus === st;
                  return (
                    <Chip
                      key={st}
                      label={st}
                      clickable
                      color={active ? "primary" : "default"}
                      variant={active ? "filled" : "outlined"}
                      onClick={() => setSelectedStatus(active ? null : st)}
                      sx={{ fontWeight: 900 }}
                    />
                  );
                })}
              </Box>
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

        {/* Results */}
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
                    borderRadius: "10px",
                    border: "1px solid rgba(15, 76, 129, 0.08)",
                    boxShadow: "0 10px 28px rgba(15, 76, 129, 0.06)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    background: "#fff",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      height: 190,
                      width: "100%",
                      objectFit: "cover",
                      backgroundColor: "#eef6fc",
                    }}
                  />

                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
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
                          fontWeight: 900,
                        }}
                      />

                      <Chip
                        label={product.status}
                        size="small"
                        sx={{
                          background:
                            product.status === "Available"
                              ? "#edf7f1"
                              : "#fff0f2",
                          color:
                            product.status === "Available"
                              ? "#237a47"
                              : "#b00020",
                          border:
                            product.status === "Available"
                              ? "1px solid rgba(35, 122, 71, 0.25)"
                              : "1px solid rgba(176, 0, 32, 0.25)",
                          fontWeight: 900,
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        color: "#0f4c81",
                        fontWeight: 900,
                        fontSize: "1.15rem",
                        mb: 1,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography sx={{ color: "#5f7283", lineHeight: 1.7 }}>
                      {product.description}
                    </Typography>
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
