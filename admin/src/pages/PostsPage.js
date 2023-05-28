import { useState } from "react";
import { Helmet } from "react-helmet-async";
// @mui
import { Container, Stack, Typography } from "@mui/material";
// components
import {
  ProductCartWidget,
  ProductFilterSidebar,
  ProductSort,
} from "../sections/@dashboard/products";
// mock

// ----------------------------------------------------------------------

export default function PostsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard - Post </title>
      </Helmet>

      <Container>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Posts
        </Typography>

        <Stack
          direction='row'
          flexWrap='wrap-reverse'
          alignItems='center'
          justifyContent='flex-end'
          sx={{ mb: 5 }}
        >
          <Stack direction='row' spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        {/* <ProductList products={PRODUCTS} /> */}
        <ProductCartWidget />
      </Container>
    </>
  );
}