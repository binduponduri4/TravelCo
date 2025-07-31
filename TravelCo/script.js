document.addEventListener('DOMContentLoaded', function() {
    const destinationItems = document.querySelectorAll('.destination-item');
    const infoSection = document.getElementById('destinationInfo');
    const infoTitle = document.getElementById('infoTitle');
    const infoContent = document.getElementById('infoContent');

    destinationItems.forEach(item => {
        item.addEventListener('click', function() {
            const place = this.getAttribute('data-place');
            fetchDestinationInfo(place);
        });
    });

    function fetchDestinationInfo(place) {
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${place}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                infoTitle.textContent = data.title;
                infoContent.textContent = data.extract;
                infoSection.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching destination info:', error);
            });
    }
});
