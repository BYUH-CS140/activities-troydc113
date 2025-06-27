function sendEmail() {
  const message = document.getElementById('suggestionBox').value.trim();

  if (message === "") {
    alert("Please type a message before sending.");
    return false;
  }

  const mailtoLink = `mailto:troi113@go.byuh.edu?subject=Fragrance%20Suggestion&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;

  return false; // Prevent default form submission
}

const perfumes = [
  {
    name: "Lattafa Atlas",
    notes: ["salt", "lemon", "davana", "iris", "ambergris", "oakmoss", "sandalwood"]
  },
  {
    name: "Kilian Angels' Share",
    notes: ["cognac", "cinnamon", "tonka bean", "oak", "hedione", "vanilla", "praline", "sandalwood", "candied almond"]
  },
  {
    name: "Zara Sunrise on the Red Sand Dunes Intense",
    notes: ["mandarine", "ginger", "bergamot", "orange blossom", "blackcurrant", "amber"]
  },
  {
    name: "Paris Corner Ophidian Mango Bliss",
    notes: ["mango", "lemon", "ginger", "jasmine", "coumarin", "woody notes", "musk", "oud", "amber", "cypriol oil"]
  },
  {
    name: "Tobacco Collection Rich Warm Addictive",
    notes: ["rum", "peony", "vanilla"]
  },
  {
    name: "Rabanne 1 Million Royal",
    notes: ["cardamom", "tangerine", "bergamot", "lavender", "violet leaf", "sage", "benzoin", "cedar", "patchouli"]
  }
];

function findPerfumes() {
  const checkedBoxes = document.querySelectorAll('.note-options input:checked');
  const selectedNotes = Array.from(checkedBoxes).map(cb => cb.value.toLowerCase());

  if (selectedNotes.length === 0) {
    document.getElementById("results").innerHTML = "<p>Please select at least one note.</p>";
    return;
  }

  const matching = perfumes.filter(perfume =>
    selectedNotes.every(note => perfume.notes.includes(note))
  );

  const resultsDiv = document.getElementById("results");
  if (matching.length > 0) {
    resultsDiv.innerHTML = `<h3>Matches Found:</h3><ul>${matching
      .map(p => `<li><strong>${p.name}</strong><br><em>Notes:</em> ${p.notes.join(", ")}</li>`)
      .join("")}</ul>`;
  } else {
    resultsDiv.innerHTML = "<p>No perfumes matched all selected notes.</p>";
  }
}
