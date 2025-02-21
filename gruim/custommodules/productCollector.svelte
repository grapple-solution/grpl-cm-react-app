<script lang="ts">
  import { onMount } from "svelte";
  import ProductList from "./productList.svelte";
  import ProductSearchbar from "./productSearchbar.svelte";
  import type { ProductType } from "./types";

  let products: ProductType[] = [];
  let searchQuery: string = "";
  let limit: number = 5;
  let offset: number = 0;

  const fetchProducts = async (
    query: string = "",
    limitValue: number = 5,
    offsetValue: number = 0
  ) => {
    const filter = query
      ? {
          where: {
            productName: {
              like: `%${query}%`,
            },
          },
          limit: limitValue,
          offset: offsetValue,
        }
      : { limit: limitValue, offset: offsetValue };

    const url = `${process.env.SVELTE_APP_REMOTE_URL}/api/products?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const response = await fetch(url);
    const data = await response.json();
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
    console.log("Search query:", query);
    searchQuery = query;
    limit = 5;
    offset = 0;
    await fetchProducts(query, 5, 0);
  }

  const loadMore = () => {
    offset += limit;
    fetchProducts(searchQuery, limit, offset);
  }
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <div class="mb-8 space-y-4">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
    <ProductSearchbar on:search={handleSearch} />
    <ProductList {products} {limit} {offset} loadMoreCallback={loadMore} />
  </div>
</div>
