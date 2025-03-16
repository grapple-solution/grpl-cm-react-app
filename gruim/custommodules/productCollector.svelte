<script lang="ts">
  import { onMount } from "svelte";
  import type { ProductType } from "./types";
  import ProductList from "./productList.svelte";
  import ProductSearchbar from "./productSearchbar.svelte";
  import ProductFilter from "./productFilter.svelte";

  let products: ProductType[] = [];
  let searchQuery: string = "";
  let limit: number = 5;
  let offset: number = 0;
  let appliedPriceRange = { min: 0, max: 0 };
  let appliedProductLines: string[] = [];
  let isLoadMore: boolean = true;

  const fetchProducts = async (
    query: string = "",
    limitValue: number = 5,
    offsetValue: number = 0,
    priceRange = { min: 0, max: 0 },
    productLines: string[] = []
  ) => {
    let where: object = {
      productName: { like: `%${query}%` },
    };

    if (priceRange.min !== 0 || priceRange.max !== 0) {
      where = {
        ...where,
        and: [
          { buyPrice: { gt: priceRange.min } },
          { buyPrice: { lt: priceRange.max } },
        ],
      };
    }

    if (productLines.length) {
      where = {
        ...where,
        ...{ productLine: { inq: productLines } },
      };
    }

    const filter = {
      where,
      limit: limitValue,
      offset: offsetValue,
    };

    const url = `${process.env.SVELTE_APP_REMOTE_URL}/api/products?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const response = await fetch(url);
    const data = await response.json();
    isLoadMore = data.length !== 0;
    if (offsetValue === 0) {
      products = data;
    } else {
      products = [...products, ...data];
    }
  };

  onMount(async () => {
    await fetchProducts();
  });

  const handleSearch = async (event) => {
    const query = event.detail.query.toLowerCase().trim();
    searchQuery = query;
    limit = 5;
    offset = 0;
    await fetchProducts(query, 5, 0, appliedPriceRange, appliedProductLines);
  };

  const handleApplyFilters = async (event) => {
    appliedPriceRange = event.detail.appliedPriceRange;
    appliedProductLines = event.detail.appliedProductLines;
    limit = 5;
    offset = 0;
    await fetchProducts(
      searchQuery,
      5,
      0,
      appliedPriceRange,
      appliedProductLines
    );
  };

  const handleResetFilters = async () => {
    appliedPriceRange = { min: 0, max: 0 };
    appliedProductLines = [];
    searchQuery = "";
    limit = 5;
    offset = 0;
    await fetchProducts();
  };

  const loadMore = () => {
    offset += limit;
    fetchProducts(
      searchQuery,
      limit,
      offset,
      appliedPriceRange,
      appliedProductLines
    );
  };
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <div class="mb-8 space-y-4">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
    <ProductSearchbar on:search={handleSearch} />
    <ProductFilter
      on:applyFilters={handleApplyFilters}
      on:resetFilters={handleResetFilters}
    />
    <ProductList
      {products}
      {limit}
      {offset}
      loadMoreCallback={loadMore}
      {isLoadMore}
    />
  </div>
</div>
