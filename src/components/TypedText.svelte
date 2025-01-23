<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let interval = null;
  let count = $state(0);
  let delayCounter = $state(0);
  let clickListener = $state(null);
  interface Props {
    text?: string;
    tickSpeed?: number;
    style?: string;
    delay?: number;
    cursor?: boolean;
    onpress?: () => void;
    type?: 'p' | 'button'
  }

  let {
    text = "",
    tickSpeed = 50,
    style = "",
    delay = 0,
    cursor = false,
    onpress,
    type = 'p'
  }: Props = $props();

  function onclick() {
    document.removeEventListener('click', clickListener);
    count = text.length + 1;
  }

  onMount(() => {
    clickListener = document.addEventListener('click', onclick);

    interval = setInterval(() => {
      if (delayCounter < delay) {
        delayCounter++;
        return;
      }
      if (count < text.length) {
        count++;
      } else {
        clearInterval(interval);
        document.removeEventListener('click', clickListener);
      }
    }, tickSpeed);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#if type === 'p'}
<p class={style}>
  {#if count == 0}
    <br />
  {:else if cursor && count < text.length && delay <= delayCounter}
    {text.slice(0, count) + "█"}
  {:else}
    {text.slice(0, count)}
  {/if}
</p>
{:else if type === 'button'}
<button type="button" class={style} onclick={onpress}>
  {#if count == 0}
    <br />
  {:else if cursor && count < text.length && delay <= delayCounter}
    {text.slice(0, count) + "█"}
  {:else}
    {text.slice(0, count)}
  {/if}
</button>
{/if}