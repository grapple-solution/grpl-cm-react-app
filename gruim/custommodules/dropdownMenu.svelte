<script lang="ts">
  import { writable } from "svelte/store";
  import ProductList from "./productList.svelte";
  import ProductCard from "./productCard.svelte";
  import ProductSearchbar from "./productSearchbar.svelte";
  import ProductFilter from "./productFilter.svelte";
  import ProductCollector from "./productCollector.svelte";

  let selectedComponent = writable("ProductList");

  function handleSelect(event) {
    selectedComponent.set(event.target.value);
  }
</script>

<div class="relative inline-block text-left mb-8">
  <select
    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
    on:change={handleSelect}
  >
    <option value="ProductList">Product List</option>
    <option value="ProductCard">Product Card</option>
    <option value="ProductSearchbar">Product Searchbar</option>
    <option value="ProductFilter">Product Filter</option>
    <option value="ProductCollector">Product Collector</option>
  </select>
</div>

{#if $selectedComponent === "ProductList"}
  <ProductList />
{:else if $selectedComponent === "ProductCard"}
  <ProductCard />
{:else if $selectedComponent === "ProductSearchbar"}
  <ProductSearchbar />
{:else if $selectedComponent === "ProductFilter"}
  <ProductFilter />
{:else if $selectedComponent === "ProductCollector"}
  <ProductCollector />
{/if}
