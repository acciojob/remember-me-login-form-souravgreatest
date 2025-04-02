const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const checkbox = document.getElementById('checkbox');
        const existingBtn = document.getElementById('existing');

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (checkbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }
            alert(`Logged in as ${username}`);
            checkExistingUser();
        });

        function checkExistingUser() {
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                existingBtn.style.display = 'block';
            } else {
                existingBtn.style.display = 'none';
            }
        }

        window.onload = function() {
            checkExistingUser();
        };

        existingBtn.addEventListener('click', function() {
            const savedUsername = localStorage.getItem('username');
            alert(`Logged in as ${savedUsername}`);
        });