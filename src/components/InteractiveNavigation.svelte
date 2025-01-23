<script lang="ts">
  import TypedSelectableLink from "./TypedSelectableLink.svelte";
  type NavItem =
    | {
        type: "spacer";
      }
    | {
        type: "link";
        text: string;
        href: string;
        tab: number;
      };
  const navItems: NavItem[] = [
    { type: "link", text: "About", href: "/about", tab: 0 },
    { type: "link", text: "Portfolio", href: "/portfolio", tab: 1 },
    { type: "link", text: "Freelancing", href: "/freelancing", tab: 2 },
    { type: "spacer" },
    {
      type: "link",
      text: "Github",
      href: "https://github.com/buk0vec",
      tab: 3,
    },
    {
      type: "link",
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/bukovec/",
      tab: 4,
    },
  ];

  interface Props {
    delay?: number;
  }

  let { delay = 0 }: Props = $props();
  let selected = 0;
    
</script>

<div class="pt-8">
  {#each navItems as item, i}
    {#if item.type === "spacer"}
      <div class="h-4"></div>
    {:else}
      <TypedSelectableLink
        href={item.href}
        text={item.text}
        delay={delay + i * 10}
        dataTab={item.tab}
        style="font-mono text-black hover:text-white hover:bg-black dark:text-white text-xl block dark:focus:text-black dark:focus:bg-white focus:ring-none focus:outline-none dark:hover:bg-white dark:hover:text-black"
        cursor={true}
      />
    {/if}
  {/each}
</div>
