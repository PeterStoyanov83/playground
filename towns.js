$(document).ready(function () {
    $('#btnAdd').click(addTown);
});

function addTown() {
    let townName = $('#townNameForAdd').val();
    $('#townNameForAdd').val('');
    $('#towns').append($('<option>').text(townName));
    showMessage(townName + " added.");
}
