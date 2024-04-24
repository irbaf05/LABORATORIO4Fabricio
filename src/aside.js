import React from 'react';
const Aside = () => {
return (
<aside>
<h2>Registro de usuario</h2>
<form>
<label htmlFor="nombre">Nombre:</label><br />
<input type="text" id="nombre" name="nombre" required /><br /><br /
>
<label htmlFor="correo">Correo electrónico:</label><br />
<input type="email" id="correo" name="correo" required /><br
/><br />
<label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label><br /
>
<input type="date" id="fecha_nacimiento" name="fecha_nacimiento"
required /><br /><br />
<label htmlFor="contraseña">Contraseña:</label><br />
<input type="password" id="contraseña" name="contraseña" required /
><br /><br />
<label htmlFor="telefono">Teléfono:</label><br />
<input type="tel" id="telefono" name="telefono" required /><br
/><br />
<label htmlFor="direccion">Dirección:</label><br />
<textarea id="direccion" name="direccion" required></textarea><br /
><br />
<button type="submit">Registrar usuario</button>
</form>
</aside>
);
}
export default Aside;