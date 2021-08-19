/// keep the car logic

/// GET ALL CARS

//1. Send and AJAX request to the API to fetch all of the cars
//2. Iterate over each car
//3. Insert each car in a new row in the cars table(display)

const garageName = "LeWagonAndSons";

const fetchAndDisplayCars = (garage) => {
  fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
  .then(response => response.json())
  .then((data) => {
    data.forEach(element => {
      const carCard = `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
          </div>
          <div class="car-info">
            <h4>${element.brand} ${element.model}</h4>
            <p><strong>Owner:</strong> ${element.owner}</p>
            <p><strong>Plate:</strong> ${element.plate}</p>
          </div>
        </div>`
      document.querySelector(".cars-list").insertAdjacentHTML('beforeend', carCard);
    });
  })
}

const createNewCar = (form) => {
  const newCar = {};
  newCar.brand = form.querySelector("#brand").value;
  newCar.model = form.querySelector("#model").value;
  newCar.plate = form.querySelector("#plate").value;
  newCar.owner = form.querySelector("#owner").value;
  return newCar;
}

const sendNewCar = (car) => {
  const garageName = "LeWagonAndSons";
  fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(car)
})
}

const AddCar = (carName) => {
  const carForm = document.querySelector("#new-car");
  carForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log(createNewCar(carForm))
    sendNewCar(createNewCar(carForm));
    fetchAndDisplayCars(garageName);
  });

}



/// ADD a new car

//1. Add and event listener on the form
//2. Prevent the default behaviour of the form
//3. Get the data input from the user
//4. send a POST request to the API;
//5. Refresh the car list


export {fetchAndDisplayCars, AddCar}
