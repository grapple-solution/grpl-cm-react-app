<script lang="ts">
  import { onMount } from "svelte";
  import ProductCard from "./productCard.svelte";
  import type { OptionalType, ProductType } from "./types";

  export let products: OptionalType<ProductType[]> = undefined;
  export let limit: number = 5;
  export let offset: number = 0;
  export let isLoadMore: boolean = true;
  export let loadMoreCallback: () => void;

  let loading: boolean = true;
  let error: string | null = null;

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.SVELTE_APP_REMOTE_URL}/api/products?filter={"limit": ${limit}, "offset": ${offset}}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      isLoadMore = data.length !== 0;
      products = Array.isArray(data) ? data : [];
    } catch (err) {
      error = err instanceof Error ? err.message : "Failed to fetch products";
      console.error("Failed to fetch products:", err);
    } finally {
      loading = false;
    }
  };

  onMount(async () => {
    if (!products) {
      await fetchProducts();
    } else {
      loading = false;
    }
  });

  const loadMore = () => {
    if (loadMoreCallback) {
      loadMoreCallback();
    } else {
      offset += limit;
      fetchProducts();
    }
  };
</script>

{#if loading}
  <div class="flex justify-center items-center h-64">
    <div
      class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
    ></div>
  </div>
{:else if error}
  <div class="text-center py-12">
    <p class="text-red-600 text-lg">{error}</p>
  </div>
{:else if !Array.isArray(products) || products.length === 0}
  <div class="text-center py-12">
    <p class="text-gray-600 text-lg">No products available</p>
  </div>
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each products as product (product.productCode)}
      <ProductCard {product} />
    {/each}
  </div>
  {#if isLoadMore}
    <div class="flex justify-center mt-8">
      <button
        on:click={loadMore}
        class="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Load More
      </button>
    </div>
  {/if}
{/if}
