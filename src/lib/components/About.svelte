<script>
    import { reveal, revealLines } from '$lib/animate';

    import Image1 from '$lib/assets/image1.png';
</script>

<div class="about">
    <div class="frame">
        <p use:revealLines class="title text-shadow unselectable">
            <span class="line"> <b>Cache</b> <i>(@cachexl)</i> is a</span>
            <span class="line">software developer and</span>
            <span class="line">a video editor.</span>
        </p>
        <img src={Image1} use:reveal class="hero unselectable shadow reveal-element" draggable="false" alt="my hand">
    </div>
</div>

<style>
    .about {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 5rem;
        height: 50vh;
    }

    .frame {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        max-width: 800px;
        gap: 2rem;
    }

    .hero {
        max-width: 350px;
        min-width: 245px;
    }

    .title {
        position: relative;
        
        margin: 0;
        font-size: 2rem;
        max-width: 400px;
    }

    .line {
        display: block;
        opacity: 0;
        transform: translateY(20px);
        will-change: transform, opacity;
    }

    @media (max-width: 768px) {
        .frame {
            flex-direction: column;
            align-items: center;
        }

        .title {
            font-size: 1.75rem;
            padding: 0 1rem;
        }
    }
</style>