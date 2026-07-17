<script>
    import Cover from '../assets/cover.jpg';

    import youtubeIcon from '../assets/icons/youtube.svg';
    import tiktokIcon from '../assets/icons/tiktok.svg';
    import twitterIcon from '../assets/icons/x.svg';
    import githubIcon from '../assets/icons/github.svg';
    import telegramIcon from '../assets/icons/telegram.svg';
</script>

<div class="landing">
    <div class="frame">
        <div class="crop shadow">
            <img src={Cover} class="hero unselectable" draggable="false" alt="my pfp">
        </div>

        <div class="socials">
            
            <a href="https://www.youtube.com/@cachehq" class="icon-btn" target="_blank" rel="noopener noreferrer">
                <div class="icon">
                    <img src={youtubeIcon} alt="YouTube" />
                </div>
            </a>
            <a href="https://www.tiktok.com/@cachexl" class="icon-btn" target="_blank" rel="noopener noreferrer">
                <div class="icon">
                    <img src={tiktokIcon} alt="TikTok" />
                </div>
            </a>
            <a href="https://x.com/cachexl" class="icon-btn" target="_blank" rel="noopener noreferrer">
                <div class="icon">
                    <img src={twitterIcon} alt="X" />
                </div>
            </a>
            <a href="https://github.com/cachexl" class="icon-btn" target="_blank" rel="noopener noreferrer">
                <div class="icon">
                    <img src={githubIcon} alt="GitHub" />
                </div>
            </a>
            <a href="https://t.me/cachexl" class="icon-btn" target="_blank" rel="noopener noreferrer">
                <div class="icon">
                    <img src={telegramIcon} alt="Telegram" />
                </div>
            </a>
        </div>

        <h1 class="title text-shadow unselectable">@cachexl</h1>
    </div>
</div>

<style>
    .landing {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        max-height: 100vh;
    }

    .frame {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items:flex-start;
        gap: 0.75rem;
        padding: 0 1rem;
    }

    .crop {
        position: relative;
        max-width: 350px;
        min-width: 245px;
        height: auto;
        aspect-ratio: 1 / 1;
        overflow: hidden;

        clip-path: inset(200px 200px);
        animation: reveal 0.8s cubic-bezier(.22, 1, .36, 1) forwards;
    }

    .crop::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 45%; /* adjust how far it rises */
        
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0)
        );

        pointer-events: none;
    }

    @keyframes reveal {
        from {
            clip-path: inset(200px 200px);
        }
        to {
            clip-path: inset(0 0);
        }
    }

    .hero {
        width: 100%;
    }

    .socials {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .icon-btn {
        color: var(--text-color);
        opacity: 0;
        animation: iconIn .4s ease forwards;
    }
    
    .icon-btn:nth-child(1) { animation-delay: .35s; }
    .icon-btn:nth-child(2) { animation-delay: .42s; }
    .icon-btn:nth-child(3) { animation-delay: .49s; }
    .icon-btn:nth-child(4) { animation-delay: .56s; }
    .icon-btn:nth-child(5) { animation-delay: .63s; }

    @keyframes iconIn {
        from {
            opacity: 0;
            transform: translateX(10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .icon-btn .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
        transition: transform 0.2s ease, opacity 0.2s ease;
    }

    .icon-btn .icon img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .icon-btn:hover .icon {
        opacity: 1;
        transform: translateX(5px);
    }

    .title {
        position: absolute;
        
        /* right edge at center of socials */
        right: calc(3rem / 2); /* half the socials width */

        /* center of text sits on bottom of cover */
        top: 99%;
        transform: translateY(-50%);

        margin: 0;
        font-size: 3rem;

        opacity: 0;
        animation: titleIn 0.6s ease forwards;
        animation-delay: .35s;
    }

    @keyframes titleIn {
        from {
            opacity: 0;
            transform: translateY(-50%) translateX(20px);
        }

        to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
        }
    }
</style>