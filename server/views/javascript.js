//This is just for testing purposes only. We can delete this or re-implement it later.

$("#privacy").on("click", function() {
  $(".account-settings").hide();
  $(".friends-settings").hide();
  $(".privacy-settings").show();
  $(".headline").text("Privacy and Security Settings");
});

$("#account").on("click", function() {
  $(".account-settings").show();
  $(".friends-settings").hide();
  $(".privacy-settings").hide();
  $(".headline").text("Account Settings");
});

$("#friends").on("click", function() {
  $(".account-settings").hide();
  $(".friends-settings").show();
  $(".privacy-settings").hide();
  $(".headline").text("Other Settings");
});

$(".privacy-settings").hide();
$(".friends-settings").hide();
