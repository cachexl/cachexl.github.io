<script>
  import { onMount } from 'svelte';
  import Landing from '$lib/components/Landing.svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1
    });

    // Target elements after they have rendered in the DOM
    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach((element) => observer.observe(element));

    // Cleanup observer when component is destroyed
    return () => observer.disconnect();
  });
</script>

<div class="app">
  <Landing />
</div>
