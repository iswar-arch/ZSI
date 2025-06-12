 function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("active");
    }

    function filterCards() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        const title = card.querySelector("h2").innerText.toLowerCase();
        const sciName = card.querySelector("p").innerText.toLowerCase();

        if (title.includes(input) || sciName.includes(input)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // Typed text animation
    let phrases = [
      "Welcome to Species Explorer",
      "Explore Indian Fauna",
      "Discover the Diversity of Nature"
    ];
    let typedText = document.getElementById("typed-text");
    let phraseIndex = 0, charIndex = 0, typing = true;

    function typeLoop() {
      let phrase = phrases[phraseIndex];
      if (typing) {
        typedText.innerText = phrase.substring(0, charIndex++);
        if (charIndex > phrase.length) {
          typing = false;
          setTimeout(typeLoop, 1500);
        } else {
          setTimeout(typeLoop, 100);
        }
      } else {
        typedText.innerText = phrase.substring(0, charIndex--);
        if (charIndex === 0) {
          typing = true;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeLoop, 500);
        } else {
          setTimeout(typeLoop, 50);
        }
      }
    }
    typeLoop();