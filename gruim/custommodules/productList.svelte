<script lang="ts">
  import { onMount } from "svelte";
  import ProductCard from "./productCard.svelte";

  interface Product {
    id: string;
    productName: string;
    productDescription: string;
    productLine: string;
    productScale: string;
    productVendor: string;
    buyPrice: number;
    msrp: number;
    quantityInStock: number;
    productlinesId: string;
  }

  let products: Product[] = [];

  onMount(async () => {
    const response = await fetch(
      `${process.env.SVELTE_APP_REMOTE_URL}/api/products?filter={"limit": 2}`
    );
    products = await response.json();
    console.log("Products loaded:", products);
  });
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each products as product (product.id)}
      <ProductCard {product} />
    {/each}
  </div>
</div>
