<script>
  import { onMount } from 'svelte';
  
  export let targetDate;

  let timeLeft = {};

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = null;
    }
  };

  const updateTimer = () => {
    calculateTimeLeft();
    if (timeLeft) {
      setTimeout(updateTimer, 1000);
    }
  };

  // Start the timer when the component is mounted
  updateTimer();
  onMount(() => {
    updateTimer();
  });
</script>

<style>
  .timer {
    font-size: 2rem;
  }
</style>

<div class="timer">
  {#if timeLeft}
    <div>
      <span>{timeLeft.days} Days </span>
      <span>{timeLeft.hours} Hours </span>
      <span>{timeLeft.minutes} Minutes </span>
      <span>{timeLeft.seconds} Seconds</span>
    </div>
  {:else}
    <span>Time's up!</span>
  {/if}
</div>
