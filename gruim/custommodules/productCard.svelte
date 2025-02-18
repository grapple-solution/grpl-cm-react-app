<script lang="ts">
  import { onMount } from "svelte";

  export let id;

  export let product;
  let showProduct = false;

  if (!product && showProduct) {
    onMount(async () => {
      const response = await fetch(`${process.env.SVELTE_APP_REMOTE_URL}/api/products/${id}`);
      product = await response.json();
    });
  }
</script>

{#if !product}
  <div class="bg-white rounded-lg shadow-md p-6 text-center">
    <h2 class="text-xl font-semibold text-gray-900">Product Not Found</h2>
    <p class="text-gray-600 mt-2">The requested product could not be found.</p>
  </div>
{:else}
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <img
      src="https://placehold.co/600x400"
      alt={product.productName}
      class="w-full h-56 object-cover"
    />
    <div class="p-6">
      <div class="flex justify-between items-start mb-2">
        <h2 class="text-xl font-semibold text-gray-900 flex-1 h-[60px]">
          {product.productName}
        </h2>
        <span class="text-sm font-medium text-gray-500">
          {product.productScale}
        </span>
      </div>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2 h-[110px]">
        {product.productDescription}
      </p>
      <div class="flex items-center mb-4">
        <span
          class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
        >
          {product.productLine}
        </span>
        <span class="ml-2 text-sm text-gray-500">
          by {product.productVendor}
        </span>
      </div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex flex-col">
          <span class="text-lg font-bold text-blue-600">
            ${product.msrp.toFixed(2)}
          </span>
          <span class="text-sm text-gray-500">
            Stock: {product.quantityInStock}
          </span>
        </div>
        <button
          class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          disabled={product.quantityInStock === 0}
        >
          {product.quantityInStock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  </div>
{/if}
