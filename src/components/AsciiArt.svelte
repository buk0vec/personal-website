<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import start from "../init.json";
  import finish_json from "../ascii.json";

  let clickListener = $state(null);

  let block_chars = $state(start.map((s) => s.split("")));
  let finish = finish_json.map((s) => s.split(""));
  let interval = null;
  let count = 0;
  let stall = 0;
  let prestall = 0;

  function randChar() {
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(start.length)
  console.log(finish.length)
  console.log(start[0].length)
  console.log(finish[0].length)

  function randomArray(length) {
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    var result = [];
    for (var i = length; i > 0; --i)
      result.push(chars[Math.floor(Math.random() * chars.length)]);
    return result;
  }

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  let order = [...Array(46 * 128).keys()];
  shuffle(order);
  let changed = [...Array(46)].map(() => [...Array(128)].map(() => false));

  function onclick(e: MouseEvent) {
    if (!(e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement)) {
      clearInterval(interval);
      prestall = 10;
      stall = 20;
      count = order.length;
      block_chars = finish;
      // console.log(block_chars)
      // clickListener.remove();
    }
  }

  onMount(() => {
    clickListener = document.addEventListener('click', onclick);
    interval = setInterval(() => {
      if (prestall < 10) {
        prestall++;
        return;
      }
      if (stall < 20) {
        for (let i = 0; i < 46; i++) {
          block_chars[i] = randomArray(128);
        }
        stall++;
        return;
      }
      if (count < order.length) {
        for (let k = 0; k < 100 && k + count < order.length; k++) {
          let idx = order[count + k];
          let x = Math.floor(idx / 128);
          let y = idx % 128;
          block_chars[x][y] = finish[x][y];
          changed[x][y] = true;
        }
        count += 100;
        for (let i = 0; i < 46; i++) {
          for (let j = 0; j < 128; j++) {
            if (!changed[i][j]) {
              block_chars[i][j] = randChar();
            }
          }
        }
      } else {
        clearInterval(interval);
      }
    }, 80);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="w-100% flex flex-col items-center flex-grow">
  {#each block_chars as row}
    <pre
      class="font-mono sm:text-xxs lg:text-xs text-xxxs text-gray-500">{row.join(
        "",
      )}</pre>
  {/each}
</div>
