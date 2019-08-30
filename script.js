
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

$('#button').on('click',function(){
    setTimeout(function(){
        window.location="form.html";
    },1000)
});
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
})