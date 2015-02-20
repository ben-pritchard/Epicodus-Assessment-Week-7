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
    var toppings = "cheese"

    if ($('input[name=toppings]:checked', '#order-pizza').val() === "pepperoni") {
      toppings = "pepperoni";
    }

    pizza.diameter = parseInt($("#diameter").val());

    $(".result").show();
    $(".toppings").text(toppings);
    $(".slices").text(pizza.slices(pizza.diameter));

  });
});
