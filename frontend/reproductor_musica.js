const reproductorMusica = {
    estado: "apagado",
    play : function (cancion){
        if(this.estado === "apagado"){
            console.log (`comenzando reproduccion de cancion...
                                                    ${cancion}`)
            //cambiar estado
            this.estado = "play"
        } else{
            console.log (`Cancion en ejecucion: Stop para pausar`)
        }


    },
    stop : function(){
        if(this.estado === "apagado"){
        console.log(`Reproductor ya esta apagado`)
        }else{
            console.log(`Apagando reproductor...`)
            this.estado = "apagado"
        }
    },
    getEstado : function (){
        return this.estado


    },
    setEstado : function(estado){
        return this.estado
    }
}

reproductorMusica.play("playing with fire - BLACKPINK");
//reproductorMusica.stop();
