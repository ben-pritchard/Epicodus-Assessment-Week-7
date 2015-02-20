var Pizza = {
  diameter: 0,
  slices: function(diameter) {
    return Math.floor(this.diameter / 3) * 2;
  }
}

$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
    var pizza = Object.create(Pizza);

    pizza.diameter = parseInt($("#diameter").val());

    $(".result").show();

    $(".slices").text(pizza.slices(pizza.diameter));
  });
});
