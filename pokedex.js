
function pokemon() {
    let nomPokemon = $('#nomPokemon').val();

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + nomPokemon,
            type: "GET"
        }).done(
            data => {

                $('#image').attr('src', data.sprites.front_default);
                $('#nom').text('Nom : ' +data.name);
                $('#sonId').text('Id : ' +data.id);
                $('#poids').text('Poids : ' + data.weight);
                $('#types').empty();
                for (const slot of data.types) {
                    let lestypes = $('<p>' + 'Types : ' + slot.type.name + '</p>');
                    $('#types').append(lestypes);
                }

            }
        ).fail(
            () => alert("Pas de pokemon avec ce nom!!!")
        );

}
