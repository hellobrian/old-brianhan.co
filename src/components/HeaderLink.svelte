<script lang="ts">
  type HeaderLinkProps = {
    href: string;
    target?: string;
    rel?: string;
  };

  export let href: HeaderLinkProps["href"];
  export let target: HeaderLinkProps["target"] = "";
  export let rel: HeaderLinkProps["rel"] = "";

  let isActive: boolean = href === window.location.pathname;
</script>

<a {href} {target} {rel} class={`${isActive ? "active" : ""}`.trim()}>
  <slot />
</a>

<style>
  a {
    display: inline-block;
    text-decoration: none;
  }

  a.active {
    font-weight: bolder;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 2px;
  }
</style>
