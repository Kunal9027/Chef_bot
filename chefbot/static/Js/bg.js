
document.addEventListener('DOMContentLoaded', function() {
    const bgElement = document.getElementById('animated-bg');
    const foodEmojis = ['🍉','🍇','🍕', '🍔', '🍝', '🥗', '🥐', '🍦', '🍰', '🍎', '🥑', '🍷', '🍺', '☕', '🍣', '🌮', '🍜'];
    const itemCount = 40;
    
    // Create food items
    for (let i = 0; i < itemCount; i++) {
      createFoodItem();
    }
    
    function createFoodItem() {
      const foodItem = document.createElement('div');
      foodItem.classList.add('food-item');
      
      // Random properties
      const emoji = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
      const size = Math.random() * 30 + 20;
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      const duration = Math.random() * 60 + 30;
      const delay = Math.random() * 10;
      const rotation = Math.random() * 360;
      
      // Set content and CSS properties
      foodItem.innerHTML = emoji;
      foodItem.style.fontSize = `${size}px`;
      foodItem.style.left = `${xPos}%`;
      foodItem.style.top = `${yPos}%`;
      foodItem.style.transform = `rotate(${rotation}deg)`;
      
      // Add food item to background
      bgElement.appendChild(foodItem);
      
      // Animate the food item
      animateFoodItem(foodItem, duration, delay);
    }
    
    function animateFoodItem(foodItem, duration, delay) {
      // Initial position
      const startX = parseFloat(foodItem.style.left);
      const startY = parseFloat(foodItem.style.top);
      const startRotation = parseFloat(foodItem.style.transform.replace('rotate(', '').replace('deg)', ''));
      
      // Random movement
      const xChange = (Math.random() - 0.5) * 15;
      const yChange = (Math.random() - 0.5) * 15;
      const rotationChange = Math.random() * 180 - 90;
      
      // Start time of animation
      let startTime = null;
      
      function move(timestamp) {
        if (!startTime) startTime = timestamp + delay * 1000;
        const elapsed = timestamp - startTime;
        
        if (elapsed < 0) {
          requestAnimationFrame(move);
          return;
        }
        
        // Calculate progress (0 to 1)
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Create a smooth floating motion using sine for both position and rotation
        const floatEffect = Math.sin(progress * Math.PI * 2);
        const scaleEffect = 0.95 + Math.sin(progress * Math.PI * 4) * 0.05;
        
        // Update position and rotation
        foodItem.style.left = `${startX + xChange * floatEffect}%`;
        foodItem.style.top = `${startY + yChange * floatEffect}%`;
        foodItem.style.transform = `rotate(${startRotation + rotationChange * floatEffect}deg) scale(${scaleEffect})`;
        
        // Continue animation
        if (progress < 1) {
          requestAnimationFrame(move);
        } else {
          // Reset animation
          animateFoodItem(foodItem, duration, 0);
        }
      }
      
      requestAnimationFrame(move);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // No specific action needed as we're using percentages
    });
  });

