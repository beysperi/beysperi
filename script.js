  // Using your provided navigation and scrolling code
      let menu = document.querySelector("#menu-icon");
      let navbar = document.querySelector(".navbar");
      let sections = document.querySelectorAll("section");
      let navLinks = document.querySelectorAll("header nav a");

      window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach((sec) => {
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              document
                .querySelector("header nav a[href*=" + id + "]")
                .classList.add("active");
            });
          }
        });

        // Close navbar when scrolling (mobile view)
        menu.classList.remove("bx-x");
        navbar.classList.remove("active");
      };
        const dropdown = document.querySelector(".dropdown");
  let timeout;

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    dropdown.querySelector(".dropdown-content").style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      dropdown.querySelector(".dropdown-content").style.display = "none";
    }, 400); // 400ms sonra kaybolur
  });

      // Menu icon click
      menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };
      
 
      

      
      prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentTestimonial);
      });
      
      nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
      });
      
      // Form submission
      const contactForm = document.querySelector('.contact form');
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Demo form submission
        const formData = new FormData(contactForm);
        let isValid = true;
        
        // Simple validation
        formData.forEach((value, key) => {
          if (!value.trim()) {
            isValid = false;
          }
        });
        
        if (isValid) {
          alert('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
        } else {
          alert('Please fill in all fields.');
        }
      });
