// ===== LOGIN SYSTEM =====
const loginBtn = document.querySelector('.login-btn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
closeBtn.addEventListener('click', () => loginModal.style.display = 'none');

function login() {
    const username = document.getElementById('username').value.trim();
    if(username === '') {
        alert('Please enter username!');
        return;
    }
    alert(`Welcome ${username}!`);
    loginModal.style.display = 'none';
}

 // ===== AUCTION BID SYSTEM =====
const placeBidBtn = document.getElementById('placeBidBtn');
placeBidBtn.addEventListener('click', () => {
    const bidInput = document.getElementById('bidAmount');
    const bidValue = bidInput.value;

    if(bidValue === '' || bidValue <= 0) {
        alert('Enter a valid bid!');
        return;
    }

    const now = new Date();
    const dateStr = now.toLocaleString();

    const li = document.createElement('li');
    li.textContent = `₹${bidValue} — ${dateStr}`;
    document.getElementById('bidList').prepend(li);

    bidInput.value = '';
});


// Close modal if clicked outside
window.addEventListener('click', (e) => {
    if(e.target === loginModal) loginModal.style.display = 'none';
});
// Get elements
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const signinModal = document.getElementById('signinModal');
const signupModal = document.getElementById('signupModal');
const closeSignin = document.getElementById('closeSignin');
const closeSignup = document.getElementById('closeSignup');

// Open modals
signinBtn.onclick = () => signinModal.style.display = "block";
signupBtn.onclick = () => signupModal.style.display = "block";

// Close modals
closeSignin.onclick = () => signinModal.style.display = "none";
closeSignup.onclick = () => signupModal.style.display = "none";

// Close when clicking outside modal
window.onclick = (e) => {
  if (e.target === signinModal) signinModal.style.display = "none";
  if (e.target === signupModal) signupModal.style.display = "none";
};

