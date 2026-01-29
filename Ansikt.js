        let currentImageIndex = 0;
        const images = document.querySelectorAll('#ansikt-sur img');

        function showImage(index) {
            images.forEach(img => img.style.display = 'none');
            images[index].style.display = 'block';
            currentImageIndex = index;
        }
        
        images.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });