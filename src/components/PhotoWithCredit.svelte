<script>
  export let heroImage;
  export let heroImageCredit;
  export let heroImageUrl;

  let showPhotoCredit = false;

  function togglePhotoCredit() {
    showPhotoCredit = !showPhotoCredit;
  }
</script>

{#if heroImage}
  <button type="button" on:click={togglePhotoCredit}>
    <img width={720} height={360} src={heroImage} alt="" />
  </button>
{/if}

{#if heroImageCredit && heroImageUrl}
  <div class="photo-credit" data-visible={showPhotoCredit}>
    <small>
      Photo by {heroImageCredit} (<a href={heroImageUrl}>Unsplash</a>)
    </small>
  </div>
{/if}

<style lang="scss">
  button {
    all: unset;
  }
  .photo-credit {
    color: var(--white);
    display: flex;
    justify-content: flex-end;
    transition: opacity 200ms;

    small {
      background-color: var(--black);
      width: fit-content;
      padding: 4px 8px;
      transform: translateY(-100%) translateX(5%);

      a {
        text-decoration: underline;
        text-decoration-color: var(--accent);
        text-underline-offset: 2px;
      }
    }
  }

  [data-visible="true"] {
    opacity: 1;
  }

  [data-visible="false"] {
    opacity: 0;
  }
</style>
