Componentes:
- LoginDlg(handlerIngreso, handlerCancela): Frame para el Login. 
      Recibe 2 funciones:
      - handlerIngreso: Se ejecuta una vez que el usuario sea autenticado 
                        exitosamente. Típicamente es un "() => navigate("/", {replace: true});"
      - handlerCancela: Se ejecuta cuando el usuario pulsa el botón Cancela.
                        Típicamente es un "() => navigate("???", {replace: true});"
- LogoutBtn: Boton para Logout
- LoggedUserFrm: Frame que muestra el Usuario logueado
- AuthContext: Contexto para el manejo de la autenticación