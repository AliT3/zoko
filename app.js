//https://zokopay.us1.list-manage.com/subscribe/post-json?u=4d08a2f8ebf774077f219270c&amp;id=72ab9a8e23&c=?

$(document).ready(() => {
  $('#mc-embedded-subscribe-form').submit((event) => {
    event.preventDefault();

    $('#email_validation_message').hide();
    $('#thank_you').hide();

    if($('#mce-EMAIL').val() == "") {
      $('#email_validation_message').fadeIn();
    }
    else {
      submitEmail();

      $('#submit_text').hide();
      $('#submit_loading').show();
    }

    return false;
  });
});

function submitEmail() {
  $('#mc-embedded-subscribe').prop('disabled', true);

  $.ajax({
    type: 'POST',
    url: 'https://zokopay.us1.list-manage.com/subscribe/post-json?u=4d08a2f8ebf774077f219270c&amp;id=72ab9a8e23&c=?',
    data: $('#mc-embedded-subscribe-form').serialize(),
    cache: false,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    error: (error) => {
      console.log('Error', error);
      $('#mc-embedded-subscribe').prop('disabled', false);
      showThankYou();
    },
    success: (res) => {
      console.log('Success');
      console.log(res);
      $('#mc-embedded-subscribe').prop('disabled', false);
      showThankYou();
    }
  });
}

function showThankYou() {
  $('#thank_you').fadeIn();
  $('#mce-EMAIL').val('');

  $('#submit_text').show();
  $('#submit_loading').hide();
}