$(document).ready(function () {
    $("#ciclos").val("");
    $("#ciclos").change(function () {
        $.ajax({
            type: 'POST',
            url: '/reporte_anio',
            data: {ciclo: $("#ciclos").val()},
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, value) {
                    $('#materias').append($('<option>').text(value).attr('value', value));
                    // alert("json:"+ json);
                });
            },
            error: function (request, status, error) {
                // alert("sin materias:"+status);
                $("#materias").empty();
                $("#clases").empty();
                if ($("#ciclos option:selected").text() === "Seleccionar un año") {
                    $('#materias').append($('<option>').text('Seleccionar una materia'));
                    $('#clases').append($('<option>').text('Seleccionar una clase'));
                    $("#video_alumno div").empty().append("Seleccionar una clase");
                    $("#tiempo_resp_prom div").empty();
                    $("#tiempo_resp_prom div").append("Seleccionar una materia");
                    $("#cons_por_clase div").empty();
                    $("#cons_por_clase div").append("Seleccionar una materia");
                    $("#cons_por_alumno div").empty();
                    $("#cons_por_alumno div").append("Seleccionar una materia");
                    $("#respvist_por_alumno div").empty();
                    $("#respvist_por_alumno div").append("Seleccionar una materia");
                } else {
                    $('#materias').append($('<option>').text('No hay materias para este año'));
                }
            },
        });
    });
    $("#materias").change(function () {
        if ($("#materias option:selected").text() === "Seleccionar una materia") {
            // alert("seleccionar materia");
            $("#clases").empty();
            $('#clases').append($('<option>').text('Seleccionar una clase'));
            $("#video_alumno div").empty().append("Seleccionar una clase");
            $("#tiempo_resp_prom div").empty();
            $("#tiempo_resp_prom div").append("Seleccionar una materia");
            $("#cons_por_clase div").empty();
            $("#cons_por_clase div").append("Seleccionar una materia");
            $("#cons_por_alumno div").empty();
            $("#cons_por_alumno div").append("Seleccionar una materia");
            $("#respvist_por_alumno div").empty();
            $("#respvist_por_alumno div").append("Seleccionar una materia");
        } else {
            // alert("materia seleccionada");
            $("#clases").empty();
            $('#clases').append($('<option>').text('Seleccionar una clase'));
            $("#video_alumno div").empty().append("Seleccionar una clase");
            $("#tiempo_resp_prom div").empty();
            $("#cons_por_clase div").empty();
            $("#cons_por_alumno div").empty();
            $("#respvist_por_alumno div").empty();
            $.ajax({
                type: 'POST',
                url: '/reporte_materia',
                data: {ciclo: $("#ciclos").val(), materia: $("#materias").val()},
                // success: function (json) {
                //     $.each(json, function (i, value) {
                //         $('#materias').append($('<option>').text(value).attr('value', value));
                //     });
                // },
                // error: function (request, status, error) {
                //     $("#materias").empty();
                //     if ($("#ciclos option:selected").text() == "Seleccionar un año") {
                //         $('#materias').append($('<option>').text('Seleccionar una materia'));
                //     } else {
                //         $('#materias').append($('<option>').text('No hay materias para este año'));
                //     }
                // },
            });
        }
    });

    $("#clases").change(function () {
        if ($("#clases option:selected").text() === "Seleccionar una clase") {
            // alert("seleccionar materia");
            $("#video_alumno div").empty().append("Seleccionar una clase");
        } else {
            $("#video_alumno div").empty();
            $.ajax({
                type: 'POST',
                url: '/reporte_clase',
                data: {ciclo: $("#ciclos").val(), materia: $("#materias").val(), clase: $("#clases").val()},
            });
        }

    });

// <%= bar_chart Usuario.group(:role).count %>

});