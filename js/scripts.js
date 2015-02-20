var Pizza = {
  diameter: 0,
  toppings: "",
  slices: function(diameter) {
    return Math.floor(this.diameter / 3) * 2;
  }
}

$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
    var pizza = Object.create(Pizza);

    pizza.diameter = parseInt($("#diameter").val());
    pizza.toppings = $('input[name=toppings]:checked', '#order-pizza').val();

    $(".result").show();
    $(".toppings").text(pizza.toppings);
    $(".slices").text(pizza.slices(pizza.diameter));

  });
});
