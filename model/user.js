class Usuario extends Connect {

      constructor(){
            super();
            this.id_usuario = 0;
            this.nombre_usuario = '';
      }

      getData (){
            return {
                  id_usuario : this.id_usuario,
                  nombre_usuario : this.nombre_usuario,
            };
      }

      setData(data){
            this.id_usuario = data.id_usuario;
            this.nombre_usuario = data.nombre_usuario;
      }

      login(dataReq, loginCallback){
            const endpoint = 'users/login';
            const method = 'POST';
            this.connect(dataReq, endpoint, method, loginCallback);
      }

};