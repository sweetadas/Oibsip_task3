function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput').value;
  
    if (celsiusInput) {
      const celsius = parseFloat(celsiusInput);
      const fahrenheit = (celsius * 9/5) + 32;
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Result: ${fahrenheit.toFixed(2)}°F`;
    } else {
      alert('Please enter a valid Celsius temperature.');
    }
  }
  