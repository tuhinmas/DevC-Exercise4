
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('#button').on('click',function(){
        setTimeout(function(){
            window.location="form.html";
        },1000);
    });
    var okToSubmit = false;
    $('form').submit(function (e) {
        if ( ! okToSubmit) {
            e.preventDefault();

        // Do something asynchronous to simulate an ajax call
        var $form = $(this);
        setTimeout(function () {
            // Assuming everything checked out, submit the form
            okToSubmit = true;
            $form.submit();
        }, 3000);
    }
});

 $(document).ready(function(){
        $("#nama").keyup(function(){
            $("#alamat").slideDown();
        });

        $("#alamat").keyup(function(){
            $("#pekerjaan").slideDown();
        });
        $('#pekerjaan').keyup(function(){
            $('#btnSubmit').slideDown();
        });
        
    });
$('#btnSubmit').on('click',function(){
    var nama=$('#nama').val();
    var alamat=$('#alamat').val();
    var pekerjaan=$('#pekerjaan').val();
    $('#namaModal').text(nama);
    $('#alamatModal').text(alamat);
    $('#pekerjaanModal').text(pekerjaan);
    setTimeout(function(){
        $('#exampleModalCenter').modal('hide')
      }, 3000);
});
$('#btnInfo').on('click',function(){
    window.location="info.html";
});
$('#btnBack').on('click',function(){
    window.location="form.html";
});






