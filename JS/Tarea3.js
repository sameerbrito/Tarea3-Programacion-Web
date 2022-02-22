var contenido="";
fetch('http://www.raydelto.org/agenda.php').then(response => response.json()).then(json => {
    for(i=0; i < Object.keys(json).length; i++){
        
        contenido += '<tr>\
                        <td class="col1">'+json[i]["nombre"]+'</td>\
                        <td class="col2">'+json[i]["apellido"]+'</td>\
                        <td class="col3">'+json[i]["telefono"]+'</td>\
                    </tr>';          
    }
    document.getElementById("agenda").innerHTML = contenido;
    console.log(json)
})

            function Enviar(){
                var datos = {nombre,apellido,telefono};
                datos.nombre = document.getElementById("nombre").value;
                datos.apellido = document.getElementById("apellido").value;
                datos.telefono = document.getElementById("telefono").value;

                
                fetch('http://www.raydelto.org/agenda.php', {
                method: 'POST', 
                mode: 'no-cors',
                body: JSON.stringify(datos),
                headers:{
                    'Content-Type': 'application/json'
                }
                })
                location.reload()
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
                
                setTimeout(CargarPágina,4000)
            }