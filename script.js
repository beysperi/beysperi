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
      
      // Testimonial slider
      let currentTestimonial = 0;
      const testimonials = [
        {
          text: "Working with Beysperi was an absolute pleasure. They delivered a stunning website that perfectly captured our brand identity. Their attention to detail and creative approach exceeded our expectations.",
          name: "Sarah Johnson",
          role: "CEO, TechStart"
        },
        {
          text: "Beysperi transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates. Their expertise in both design and development is truly impressive.",
          name: "Michael Chen",
          role: "Marketing Director, InnovateCorp"
        },
        {
          text: "I've worked with many designers, but Beysperi stands out for their creativity and technical skills. They not only understand design principles but also how to implement them effectively.",
          name: "Emma Rodriguez",
          role: "Product Manager, DesignHub"
        }
      ];
      
      const testimonialContent = document.querySelector('.testimonial-content');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const paginationDiv = document.querySelector('.swiper-pagination');
      
      // Create pagination bullets
      testimonials.forEach((_, index) => {
        const bullet = document.createElement('span');
        bullet.classList.add('swiper-pagination-bullet');
        if (index === 0) bullet.classList.add('swiper-pagination-bullet-active');
        bullet.addEventListener('click', () => {
          updateTestimonial(index);
        });
        paginationDiv.appendChild(bullet);
      });
      
      function updateTestimonial(index) {
        currentTestimonial = index;
        const testimonial = testimonials[index];
        
        testimonialContent.innerHTML = `
          <i class="bx bxs-quote-alt-left quote"></i>
          <div class="description">${testimonial.text}</div>
          <div class="name">${testimonial.name}</div>
          <div class="role">${testimonial.role}</div>
        `;
        
        // Update pagination
        document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, i) => {
          if (i === index) {
            bullet.classList.add('swiper-pagination-bullet-active');
          } else {
            bullet.classList.remove('swiper-pagination-bullet-active');
          }
        });
      }
      
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
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dropdownToggle");
    const content = document.getElementById("dropdownContent");

    // Tek tıklamada aç/kapat
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      content.classList.toggle("show");
    });

    // Dışarı tıklanırsa kapat
    document.addEventListener("click", function (e) {
      const isClickInside = toggle.contains(e.target) || content.contains(e.target);
      if (!isClickInside) {
        content.classList.remove("show");
      }
    });

    // Scroll ile kapanmayı engelle
    window.addEventListener("scroll", function () {
      // İstersen buraya content.classList.remove("show") ekleme
    });
  });
