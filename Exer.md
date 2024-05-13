Mardown Exercism
### Calculadora de Edad en Otros Planetas

Esta es una calculadora de edad que permite calcular la edad en años terrestres equivalentes en otros planetas del sistema solar.

#### Uso

```tsx
import CalculadoraEdad from './CalculadoraEdad';

const App = () => {
  return (
    <div>
      <CalculadoraEdad />
    </div>
  );
};

export default App;
```

#### Propiedades

- Ninguna.

#### Comportamiento

- Selecciona un planeta del menú desplegable.
- Ingresa la cantidad de segundos vividos.
- Haz clic en "Calcular Edad" para obtener la edad aproximada en el planeta seleccionado.

### Personaje de Dungeons & Dragons

Este componente muestra las características de un personaje ficticio generado al azar para el juego Dungeons & Dragons.

#### Uso

```tsx
import DnDCharacter from './DnDCharacter';

const App = () => {
  return (
    <div>
      <DnDCharacter />
    </div>
  );
};

export default App;
```

#### Propiedades

- Ninguna.

#### Comportamiento

- Genera aleatoriamente las puntuaciones de habilidad para las características del personaje.
- Calcula automáticamente los puntos de vida basados en la constitución del personaje.
- Las puntuaciones de habilidad y puntos de vida se actualizan cada vez que el componente se renderiza.

