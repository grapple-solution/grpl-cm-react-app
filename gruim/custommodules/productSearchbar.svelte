<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let searchQuery = "";
  const dispatch = createEventDispatcher();

  const handleInput = (event) => {
    searchQuery = event.target.value;
  };

  const handleSearch = () => {
    dispatch("search", { query: searchQuery });
  };
</script>

<div class="relative flex">
  <input
    type="text"
    placeholder="Search products..."
    bind:value={searchQuery}
    on:input={handleInput}
    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
  />
  <button
    on:click={handleSearch}
    class="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
  >
    Search
  </button>
</div>
