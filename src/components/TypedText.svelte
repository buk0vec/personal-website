<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let interval = $state(null);
  let count = $state(0);
  let delayCounter = $state(0);
  let clickListener: (() => void) | null = null;

  interface Props {
    text?: string;
    tickSpeed?: number;
    style?: string;
    delay?: number;
    cursor?: boolean;
    onpress?: () => void;
    type?: 'p' | 'button';
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
    document.removeEventListener('click', clickListener!);
    count = text.length + 1;
  }
  
  onMount(() => {
    clickListener = onclick;
    document.addEventListener('click', clickListener);

    interval = setInterval(() => {
      if (delayCounter < delay) {
        delayCounter++;
        return;
      }
      if (count < text.length) {
        count++;
      } else {
        clearInterval(interval!);
        document.removeEventListener('click', clickListener!);
      }
    }, tickSpeed);
  });

  onDestroy(() => {
    clearInterval(interval!);
  });
</script>

{#if type === 'p'}
<p class={style} aria-label={text}>
  <span aria-hidden="true">
    {#if count == 0}
      <br />
    {:else if cursor && count < text.length && delay <= delayCounter}
      {text.slice(0, count) + "█"}
    {:else}
      {text.slice(0, count)}
    {/if}
  </span>
  <span class="sr-only">{text}</span> 
</p>
{:else if type === 'button'}
<button type="button" class={style} onclick={onpress} aria-label={text}>
  <span aria-hidden="true">
    {#if count == 0}
      <br />
    {:else if cursor && count < text.length && delay <= delayCounter}
      {text.slice(0, count) + "█"}
    {:else}
      {text.slice(0, count)}
    {/if}
  </span>
  <span class="sr-only">{text}</span> 
</button>
{/if}
