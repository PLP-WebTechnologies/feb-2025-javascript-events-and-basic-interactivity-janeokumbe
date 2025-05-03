// Event Handling
document.getElementById('myButton').addEventListener('click', () => {
    alert('Button was clicked!');
  });
  
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightblue';
  });
  hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#ddd';
  });
  
  document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById('secretButton').addEventListener('dblclick', () => {
    alert('You found the secret double-click!');
  });
  
  // Interactive Elements - Color Changing Button
  const colorChanger = document.getElementById('colorChanger');
  colorChanger.addEventListener('click', () => {
    colorChanger.textContent = 'Clicked!';
    colorChanger.style.backgroundColor = '#4caf50';
    colorChanger.style.color = '#fff';
  });
  
  // Image Slider
  const images = [
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3'
  ];
  let current = 0;
  const sliderImg = document.getElementById('sliderImg');
  document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % images.length;
    sliderImg.src = images[current];
  });
  document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    sliderImg.src = images[current];
  });
  
  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
      document.getElementById(`tab${btn.dataset.tab}`).classList.remove('hidden');
    });
  });
  
  // Form Validation
  const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const passwordValid = passwordInput.value.length >= 8;
  
    if (!emailValid) alert('Invalid email!');
    if (!passwordValid) alert('Password must be at least 8 characters!');
    if (emailValid && passwordValid) alert('Form submitted successfully!');
  });
  
  // Real-time Feedback
  emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) ? 'green' : 'red';
  });
  passwordInput.addEventListener('input', () => {
    passwordInput.style.borderColor = passwordInput.value.length >= 8 ? 'green' : 'red';
  });
  