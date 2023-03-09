const element = (
  <div class="bg-Container">
    <h1 class="heading">Congratulations</h1>
    <div class="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        class="profile-Image"
        alt="profile"
      />
      <p class="name">Kiran V</p>
      <p class="college">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        class="watch_Image"
        alt="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
