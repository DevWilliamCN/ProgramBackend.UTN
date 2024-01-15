import { Router } from "express";
import Usuarios from "./Usuarios";
import Estudiantes from "./Estudiantes";
import auth from "./auth";
import { checkjwt } from "../middleware/jwt";
import Profesionales from "./Profesionales";
import SolicitudesCita from "./SolicitudesCita";
import Citas from "./Citas";
import Formularios from "./Formularios";
import Respuestas from "./Respuestas";
import Preguntas from "./Preguntas";
import Comentarios from "./Comentarios";
import Evaluaciones from "./Evaluaciones";
import Referencias from "./Referencias";
import BitacorasProfesor from "./BitacorasProfesor";
import BoletasMatricula from "./BoletasMatricula";
const routes = Router();

//Rutas para los niveles de acceso y login
routes.use("/usuarios", Usuarios);
routes.use("/auth", auth);

//Rutas para inserción de los participes de Bienestar Estudiantil
routes.use("/estudiante", Estudiantes);
routes.use("/profesional", Profesionales);
routes.use("/boletasMatricula", BoletasMatricula);
routes.use("/bitacoraProfesor", BitacorasProfesor);

//Rutas para la Inserción de componentes relevantes para los servicios de Bienestar Estudiantil
routes.use("/solicitud", SolicitudesCita);
routes.use("/cita", Citas);
routes.use("/formulario", Formularios);
routes.use("/pregunta", Preguntas);
routes.use("/respuesta", Respuestas);
routes.use("/comentario", Comentarios);
routes.use("/evaluacion", Evaluaciones);
routes.use("/referencia", Referencias);
export default routes;
