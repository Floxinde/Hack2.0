        function startLoading(button) {
            button.classList.add('loading');
            button.style.backgroundColor = 'gray';
            setTimeout(function() {
                button.querySelector('span').style.color = 'transparent';
            }, 0); 
            setTimeout(function() {
                window.location.href = 'second.html';
            }, 1000);
        }