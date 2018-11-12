$(function () {
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");

    const newDevourState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("devoured", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#burgerForm").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      name: $("#burgerName").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
