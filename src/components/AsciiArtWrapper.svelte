<script lang="ts">
  import { onMount } from "svelte";
  import AsciiArt from "./AsciiArt.svelte";
  import TypedText from "./TypedText.svelte";
  let key_ = 0;

  function refreshKey() {
    key_ = key_ + 1;
  }

  onMount(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "r") {
        refreshKey();
      }
    });
  })

</script>

{#key key_}
  <div class="flex flex-col flex-grow items-center self-center">
    <AsciiArt />
    <TypedText
      onpress={refreshKey}
      type="button"
      text="press r to reload"
      style="font-mono text-xs text-gray-500 hover:text-white hover:bg-gray-500 px-1 py-1"
      delay={200}
    ></TypedText>
  </div>
{/key}
