//https://zokopay.us1.list-manage.com/subscribe/post-json?u=4d08a2f8ebf774077f219270c&amp;id=72ab9a8e23&c=?

$(document).ready(() => {
  $('#mc-embedded-subscribe-form').submit((event) => {
    alert('wow');
    console.log("hey")
    event.preventDefault();

    submitEmail();

    return false;
  });
});

function submitEmail() {
  $.ajax({
    type: 'POST',
    url: 'https://zokopay.us1.list-manage.com/subscribe/post-json?u=4d08a2f8ebf774077f219270c&amp;id=72ab9a8e23&c=?',
    data: $('#mc-embedded-subscribe-form').serialize(),
    cache: false,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    error: (error) => {
      console.log('Error', error);
    },
    success: (res) => {
      console.log('Success');
      console.log(res);
    }
  });
}