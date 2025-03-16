<script lang="ts">
  import { onMount } from "svelte";
  import { ProductLineType } from "./types";

  let productlines: ProductLineType[] = [];

  onMount(async () => {
    const response = await fetch(
      `${process.env.SVELTE_APP_REMOTE_URL}/api/productlines`
    );
    productlines = await response.json();
  });
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  {#each productlines as productline (productline.productLine)}
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://placehold.co/600x400"
        alt={productline.productLine}
        class="w-full h-64 object-cover"
      />
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-2">{productline.productLine}</h2>
        <p class="text-gray-600 mb-4">
          Explore our collection of meticulously crafted {productline.productLine} models.
        </p>
        <a
          href="/products"
          class="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Collection
        </a>
      </div>
    </div>
  {/each}
</div>
