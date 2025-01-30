<script lang="ts">
  import { run } from "svelte/legacy";

  import { onMount, onDestroy } from "svelte";

  let interval = null;
  let count = $state(0);
  let delayCounter = $state(0);
  let focus = $state(false);
  let flashCursor = $state(false);
  let cursorInterval = $state(null);
  let clickListener = $state(null);
  interface Props {
    text?: string;
    tickSpeed?: number;
    style?: string;
    delay?: number;
    cursor?: boolean;
    dataTab?: any;
    href: string;
  }

  function onclick() {
    document.removeEventListener('click', clickListener);
    count = text.length
  }

  let {
    text = "",
    tickSpeed = 50,
    style = "",
    delay = 0,
    cursor = false,
    dataTab = -1,
    href,
  }: Props = $props();

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
      }
    }, tickSpeed);
  });

  function switchFlashCursor() {
    flashCursor = !flashCursor;
  }

  function onfocus() {
    clearInterval(cursorInterval);
    flashCursor = true;
    cursorInterval = setInterval(() => {
      switchFlashCursor();
    }, 500);
  }

  function onblur() {
    clearInterval(cursorInterval);
    flashCursor = false;
    cursorInterval = null;
  }

  // $effect(() => {
  //   if (focus) {
  //     console.log('focus');
  //     clearInterval(cursorInterval);
  //     flashCursor = true;
  //     cursorInterval = setInterval(() => {
  //       switchFlashCursor();
  //     }, 500);
  //   } else {
  //     clearInterval(cursorInterval);
  //     cursorInterval = null;
  //     // cursor = false;
  //   }
  // });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<a
  class={style}
  data-astro-prefetch
  {href}
  target={href.startsWith("/") ? undefined : "_blank"}
  rel={href.startsWith("/") ? undefined : "noopener noreferrer"}
  data-tab={dataTab}
  {onfocus}
  {onblur}
  aria-label={text}
>
  <span aria-hidden="true">
    {cursor && count < text.length && delay <= delayCounter
      ? text.slice(0, count) + "█"
      : text.slice(0, count)}
    <span class="pl-0">{flashCursor ? "█" : ""}</span>
  </span>
  <span class="sr-only">{text}</span>
</a>