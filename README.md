# Pepes imprenta y grafica

Sistema que permite generar ordenes de trabajo express en pdf.

Version: 2.0.

## Comenzando

### Modo desarrollo

> Para ejecutar el entorno de desarrollo es necesario tener Docker instalado ya que implementa un contenedor de MySQL para la base de datos.

Variables de entorno:

```sql
MYSQL_HOST
MYSQL_PORT
MYSQL_USER
MYSQL_PASSWORD
MYSQL_DATABASE

MYSQL_ROOT_PASSWORD_CONTAINER_DEV
MYSQL_CONTAINER_NAME_DEV
MYSQL_PORTS_CONTAINER_DEV

NEXTAUTH_SECRET
NEXTAUTH_URL

JWT_SECRET

AXIOS_BASE_URL
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
