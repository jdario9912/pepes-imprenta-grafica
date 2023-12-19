# Pepes imprenta y grafica

Sistema que permite generar ordenes de trabajo express en pdf.

Version: 2.0.

## Comenzando

### Modo desarrollo

> Para ejecutar el entorno de desarrollo es necesario tener Docker instalado ya que implementa un contenedor de MySQL para la base de datos.

Variables de entorno:

```sql
MYSQL_HOST_DEV
MYSQL_PORT_DEV
MYSQL_USER_DEV
MYSQL_ROOT_PASSWORD_DEV
MYSQL_DATABASE_DEV
MYSQL_CONTAINER_NAME_DEV
```

Ejecuta el entorno de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver los resultados.

### Por hacer

* [ ] En la base de datos de produccion cambiar el nombre de la columna tipo_trabajo a producto
* [ ] Buscar lista de colores de plotter

TENGO QUE DESINSTALAR JEST CUANDO TENGA INTERNET

`npm un @testing-library/jest-dom jest jest-environment-jsdom`