# Ya Ganaste Challenge

Esta es una aplicación desarrollada con Expo que te permite mostrar un listado de bancos de la siguiente api: https://dev.obtenmas.com/catom/api/challenge/banks

### Instalación

Para instalar, sigue los siguientes pasos:

1. Clonar el repositorio

```
git clone https://github.com/devpitre/ya-ganaste-challenge
```

2. Instalar dependencias

```
cd ya-ganaste
yarn install
```

### Uso

Para ejecutar, simplemente ejecuta el siguiente comando:

```
yarn start
```

Esto abrirá la aplicación en tu navegador. Desde allí, puedes escanear el código QR en tu dispositivo móvil para abrir la aplicación en tu dispositivo.

Si deseas ejecutar la app en un emulador IOS

```
yarn ios
```

Si deseas ejecutar la app en un emulador ANDROID

```
yarn android
```

### Test Unitarios

Esta app incluye tests unitarios escritos con Jest y [Testing Library](https://testing-library.com). Para ejecutar los tests, ejecuta el siguiente comando:

```
yarn test
```

Para ver el coverage de la app:

```
yarn testFinal
```

> Esta app no tiene un coverage del 100%, pero su funcionalidad principal si está testeada a la totalidad.

Para correr las pruebas en modo debugger:

```
yarn testDebug
```
