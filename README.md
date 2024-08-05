# Weather API

## Descripción

Weather API es una aplicación que proporciona información meteorológica utilizando la API de OpenWeatherMap. La aplicación permite a los usuarios buscar el clima de diferentes ciudades y ver pronósticos detallados para los próximos días.

## Características

- **Búsqueda de Ciudades**: Permite a los usuarios buscar el clima de una ciudad específica.
- **Pronóstico de 3 Días**: Muestra el pronóstico del clima para los próximos 3 días.
- **Interfaz de Usuario**: Interfaz intuitiva y responsiva para una mejor experiencia de usuario.
- **Ordenación**: Opciones para ordenar ciudades alfabéticamente o por temperatura.

## Tecnologías Utilizadas

- **Frontend**: React.js
- **Estilos**: Material-UI
- **API**: OpenWeatherMap
- **JavaScript**: ES6+

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/weather-api.git
    cd weather-api
    ```

2. **Instala las dependencias**:

    ```bash
    npm install --legacy-peer-deps
    ```

3. **Configura las variables de entorno**:

    Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de OpenWeatherMap:

    ```
    REACT_APP_WEATHER_API_KEY=tu_clave_de_api
    ```

4. **Inicia la aplicación**:

    ```bash
    npm run start
    ```

    La aplicación estará disponible en `http://localhost:8080`.

## Uso

1. **Buscar el Clima**:
    - Ingresa el nombre de una ciudad en la barra de búsqueda y presiona Enter o el botón de búsqueda.
  
2. **Ver Pronóstico**:
    - Después de realizar una búsqueda, el pronóstico para los próximos 3 días se mostrará en la interfaz de usuario.

3. **Ordenar Ciudades**:
    - Usa el botón flotante para alternar entre el orden alfabético y por temperatura de las ciudades.

## API de OpenWeatherMap

La aplicación utiliza la API de OpenWeatherMap para obtener datos meteorológicos. Consulta la [documentación de OpenWeatherMap](https://openweathermap.org/api) para obtener más detalles sobre los endpoints utilizados.

### Endpoints Utilizados

- **Pronóstico del Clima Actual**: `https://api.openweathermap.org/data/2.5/weather`
- **Pronóstico de 5 Días**: `https://api.openweathermap.org/data/2.5/forecast`

## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, sigue estos pasos:

1. **Haz un Fork del Repositorio**
2. **Crea una Rama para tu Característica**: `git checkout -b mi-nueva-caracteristica`
3. **Haz Commit de tus Cambios**: `git commit -am 'Agrega nueva característica'`
4. **Empuja a tu Rama**: `git push origin mi-nueva-caracteristica`
5. **Crea un Pull Request**


## Arquitectura y Decisiones de Diseño

### Arquitectura General

La arquitectura de la aplicación "Weather API" se basa en componentes reutilizables utilizando React.js para el frontend. La estructura de la aplicación es la siguiente:

- **Componentes de React**:
  - **Barra de Búsqueda**: Permite a los usuarios ingresar el nombre de una ciudad y realizar búsquedas.
  - **Resultado de Búsqueda**: Muestra los datos meteorológicos de la ciudad seleccionada.
  - **Pronóstico**: Muestra el pronóstico del clima para los próximos 3 días.
  - **Botón Flotante**: Permite alternar entre el orden alfabético y por temperatura de las ciudades.

- **Gestión de Estado**:
  - **Estado Local**: Maneja el estado de los componentes individuales, como la búsqueda y los resultados.
  - **Para implementar // Context API o Redux**: Considerar su uso para la gestión global del estado si la aplicación crece y necesita compartir el estado entre varios componentes.

- **Estilos**:
  - **Material-UI**: Proporciona una interfaz moderna y responsiva utilizando componentes y estilos predefinidos de Material Design.

### Decisiones de Diseño

1. **Estructura del Proyecto**:
   - **Componentización**: Dividir la aplicación en componentes modulares para mejorar la mantenibilidad y escalabilidad.
   - **Separación de Preocupaciones**: Separar la lógica de negocio (como la gestión de datos y llamadas a la API) de la lógica de presentación (como la renderización de componentes).

2. **Gestión de Datos**:
   - **API de OpenWeatherMap**: Utilizar esta API para obtener datos meteorológicos en tiempo real y pronósticos. La elección se basa en su cobertura global y la riqueza de datos disponibles.
   - **Manejo de Errores**: Implementar manejo de errores para situaciones como ciudades no encontradas o problemas de red.

3. **Optimización**:
   - **Caché**: Implementar caché para búsquedas recientes para mejorar el rendimiento y reducir las llamadas a la API.
   - **Para implementar // Lazy Loading**: Cargar componentes de manera diferida para mejorar los tiempos de carga iniciales.

4. **Diseño Responsivo**:
   - **Material-UI**: Utilizar herramientas de diseño responsivo de Material-UI para asegurar un buen funcionamiento en diferentes tamaños de pantalla.
   - **Media Queries**: Aplicar consultas de medios en CSS para ajustar el diseño en pantallas más pequeñas.

5. **Accesibilidad**:
   - **Etiquetas ARIA**: Utilizar etiquetas ARIA para mejorar la accesibilidad para usuarios con discapacidades.
   - **Contraste y Tipografía**: Seleccionar colores y tipografía que garanticen un buen contraste y legibilidad.

6. **Seguridad**:
   - **Validación de Entradas**: Validar las entradas del usuario para prevenir inyecciones y otros ataques.
   - **Claves de API**: Mantener las claves de API en un archivo `.env` para evitar su exposición en el código fuente.

### Diagrama de Arquitectura

Para una comprensión visual, se recomienda incluir un diagrama que represente la arquitectura general de la aplicación, mostrando la interacción entre los componentes de React y la API de OpenWeatherMap.


## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

## Contacto

Si tienes alguna pregunta o comentario, no dudes en contactarme en [jmb972012@gmail.com](mailto:jmb972012@example.com).
