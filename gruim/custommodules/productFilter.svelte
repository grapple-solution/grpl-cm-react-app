<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();
  let showFilters = false;
  let priceRange = { min: 0, max: 0 };
  let categories = [];
  let tempPriceRange = { min: 0, max: 0 };
  let tempCategories: string[] = [];
  let appliedPriceRange = { min: 0, max: 0 };
  let appliedProductLines: string[] = [];

  onMount(async () => {
    const maxFilter = {
      fields: ["buyPrice"],
      order: ["buyPrice DESC"],
      limit: 1,
    };

    const minFilter = {
      fields: ["buyPrice"],
      order: ["buyPrice ASC"],
      limit: 1,
    };

    const pls = {
      fields: ["id"],
    };

    const [maxResponse, minResponse, plsResponse] = await Promise.all([
      fetch(
        `${process.env.SVELTE_APP_REMOTE_URL}/api/products?filter=${encodeURIComponent(JSON.stringify(maxFilter))}`
      ),
      fetch(
        `${process.env.SVELTE_APP_REMOTE_URL}/api/products?filter=${encodeURIComponent(JSON.stringify(minFilter))}`
      ),
      fetch(
        `${process.env.SVELTE_APP_REMOTE_URL}/api/productlines?filter=${encodeURIComponent(JSON.stringify(pls))}`
      ),
    ]);

    const maxData = await maxResponse.json();
    const minData = await minResponse.json();
    const plsData = await plsResponse.json();

    priceRange = {
      min: minData[0].buyPrice,
      max: maxData[0].buyPrice,
    };
    tempPriceRange = { ...priceRange };
    appliedPriceRange = { ...priceRange };
    categories = Array.from(new Set(plsData.map((p: { id: string; }) => p.id))).sort();
  });

  const handleProductLineToggle = (productLine: string) => {
    tempCategories = tempCategories.includes(productLine)
      ? tempCategories.filter((pl) => pl !== productLine)
      : [...tempCategories, productLine];
  };

  const handleApplyFilters = () => {
    appliedPriceRange = { ...tempPriceRange };
    appliedProductLines = [...tempCategories];
    showFilters = false;
    dispatch("applyFilters", { appliedPriceRange, appliedProductLines });
  };

  const handleResetFilters = () => {
    tempPriceRange = { ...priceRange };
    tempCategories = [];
    appliedPriceRange = { ...priceRange };
    appliedProductLines = [];
    dispatch("resetFilters");
  };
</script>

<div class="max-w-7xl my-2">
  <div class="flex items-center justify-between">
    <button
      on:click={() => (showFilters = !showFilters)}
      class="md:hidden flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 w-full"
    >
      <span>☰</span>
      Filters
    </button>
  </div>

  <div class="flex flex-col md:flex-row gap-8">
    <div
      class={`md:w-full flex-shrink-0 ${showFilters ? "block" : "hidden md:block"}`}
    >
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Filters</h2>
          <button
            on:click={handleResetFilters}
            class="text-gray-500 hover:text-gray-700"
            title="Reset filters"
          >
            ↺
          </button>
        </div>

        <div class="mb-6">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
          <div class="space-y-2">
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              bind:value={tempPriceRange.min}
              class="w-full"
            />
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              bind:value={tempPriceRange.max}
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-600">
              <span>${tempPriceRange.min.toFixed(2)}</span>
              <span>${tempPriceRange.max.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Product Lines</h3>
          <div class="space-y-2">
            {#each categories as category}
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={tempCategories.includes(category)}
                  on:change={() => handleProductLineToggle(category)}
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span class="ml-2 text-sm text-gray-600">{category}</span>
              </label>
            {/each}
          </div>
        </div>

        <button
          on:click={handleApplyFilters}
          class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
</div>
