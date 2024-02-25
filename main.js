$.getJSON(
  "https://makerslab.em-lyon.com/dww/data/shows.json",
  function (myDataset) {
    // display the full json in the console
    //console.log(myDataset);

    let mus = myDataset.musicals;
    let musContainer = $("#musicals-container");

    for (let i = 0; i < mus.length; i++) {
      let placeToDisplay; 
      
      if(mus[i].isActive == "true"){
        placeToDisplay = `<h5 class="card-info">${mus[i].location} active </h5>`;
      } else {
        placeToDisplay = `<h5 class="card-info">${mus[i].location}</h5>`;
      }
      
      
      let musical = `
     <div class="card">
     
       <img src="${mus[i].image}" alt="event image">
       
       <h2>${mus[i].title}</h2>
       <h3 class="card-info">${mus[i].dates.from} <i class="fa-solid fa-arrow-right"></i> ${mus[i].dates.to} </h3>
       <h4 class="card-info"><i class="fa-solid fa-euro-sign"></i> ${mus[i].price} ${mus[i].tickets_remaining} remaining tickets</h4>
       ${placeToDisplay}
       <h6>musicals</h6>
       
      <div class="ui-button">
        <input class="secondary" type="button" value="see more">
        <input class="primary" type="button" value="buy tickets">
      </div>     
      
     </div>
     `;

      musContainer.append(musical);

      //console.log(com[i].title);
    };
  }
);






