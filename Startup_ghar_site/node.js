let currentBanner = 0;
        const banners = document.querySelectorAll('.banner-slide');
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const exploreBtn = document.querySelector('.explore-btn');

        nextBtn.addEventListener('click', () => {
            banners[currentBanner].style.display = 'none';
            currentBanner = (currentBanner + 1) % banners.length;
            banners[currentBanner].style.display = 'block';
        });

        prevBtn.addEventListener('click', () => {
            banners[currentBanner].style.display = 'none';
            currentBanner = (currentBanner - 1 + banners.length) % banners.length;
            banners[currentBanner].style.display = 'block';
        });

        exploreBtn.addEventListener('click', () => {
            document.querySelector('#why-choose').scrollIntoView({ behavior: 'smooth' });
        });