const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Network response was not ok"));
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const displayDogFacts = () => {
  const dogFactsSection = document.getElementById("dogFactsSection");

  fetchData("https://dog-api.kinduff.com/api/facts")
    .then((dogFacts) => {
      dogFacts.facts.forEach((fact) => {
        const factElement = document.createElement("p");
        factElement.className = "dog-fact";
        factElement.textContent = fact;
        dogFactsSection.appendChild(factElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

displayDogFacts();
