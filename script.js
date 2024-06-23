function calculateOperations(grades) {
    let total = 0;
    let highest = grades[0];
    let lowest = grades[0];
    
    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i];
      total += grade;
      
      if (grade > highest) {
        highest = grade;
      }
      if (grade < lowest) {
        lowest = grade;
      }
    }
    
    let average = total / grades.length;
    average = Math.round(average * 10) / 10; 
    
    let passing = average >= 60;
    
    return {
      total: total,
      average: average,
      highest: highest,
      lowest: lowest,
      passing: passing
    };
  }
  
  const grades = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];

  document.getElementById("gradesForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Keeps event from reloading the page

    const operations = calculateOperations(grades);

    const outputDiv = document.getElementById('output');

    outputDiv.textContent = JSON.stringify(operations, null, 2) // null replaces values if a replacer function is specified, 2 adds indentation
  });
  