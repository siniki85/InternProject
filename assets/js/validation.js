function validation() {
    let $regexName = /[a-zA-Z]/;
    let $regexPostalCode = /\d{6}/;
    let $regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let $regexMobileNo = /^[0]?[6789]\d{9}$/;
    let $regexAadhar = /^[0-9]{4}[0-9]{4}[0-9]{4}$/;
    $('input[type="text"]').on('keyup', function () {
        if (!$(this).val().match($regexName)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[type="email"]').on('keyup', function () {
        if (!$(this).val().match($regexEmail)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[id="mobileNo"]').on('keyup', function () {
        if (!$(this).val().match($regexMobileNo)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[id="postal_code"]').on('keyup', function () {
        if (!$(this).val().match($regexPostalCode)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[id="aadhar"]').on('keyup', function () {
      if (!$(this).val().match($regexAadhar)) {
          $(this).closest('div').addClass('invalid');
          $(this).closest('div').removeClass('valid');
      } else {
          $(this).closest('div').addClass('valid');
      }
  });
}
validation();

// Start Select Multiple option in dropDown
$(document).ready(function () {
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
    });
});
// End Select Multiple option in dropDown

