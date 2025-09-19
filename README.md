# ⚡ Pokémon API App

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/PokéAPI-FFCB05?style=for-the-badge&logo=pokemon&logoColor=3D7DCA" alt="PokeAPI">
</div>

<div align="center">
  <h3>🎮 Una aplicación web interactiva para explorar el mundo Pokémon usando la PokéAPI</h3>
</div>

---

## 📝 Descripción

**Pokémon API App** es una aplicación web que permite a los entrenadores Pokémon explorar información detallada sobre sus criaturas favoritas. Utilizando la famosa **PokéAPI**, la aplicación ofrece una experiencia completa con datos oficiales, estadísticas, tipos, habilidades y mucho más.

### ¿Por qué este proyecto?
- 🎯 Practicar el consumo de APIs REST
- 💡 Implementar JavaScript vanilla avanzado
- 🎨 Crear interfaces dinámicas y responsivas
- 📊 Manejar grandes cantidades de datos
- ⚡ Optimizar rendimiento y UX

---

## ✨ Características Principales

### 🔍 **Exploración Pokémon**
- Catálogo completo con más de 1000 Pokémon
- Información detallada de cada criatura
- Imágenes oficiales en alta calidad
- Datos completos: altura, peso, tipos, habilidades

### 🎮 **Funcionalidades Interactivas**
- 🔎 Búsqueda rápida por nombre o número
- 🏷️ Filtrado por tipos (Fuego, Agua, Planta, etc.)
- 📊 Visualización de estadísticas base
- 🎲 Generación de Pokémon aleatorio
- ❤️ Sistema de favoritos persistente

### 🎨 **Diseño y UX**
- 🌟 Interfaz inspirada en los juegos originales
- 📱 Completamente responsive
- ⚡ Carga optimizada con lazy loading
- 🎭 Animaciones suaves y transiciones
- 🎨 Colores dinámicos según tipo de Pokémon

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Frontend | API & Data | Herramientas |
|----------|------------|--------------|
| ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) | ![PokéAPI](https://img.shields.io/badge/PokéAPI-FFCB05?style=for-the-badge&logo=pokemon&logoColor=3D7DCA) | ![VS Code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white) |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![Fetch API](https://img.shields.io/badge/Fetch%20API-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white) | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) |

</div>

---



---

## 🚀 Instalación y Uso

### Prerequisitos
- Navegador web moderno
- Conexión a internet (para consumir la API)

### Pasos para ejecutar

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Fernando-urb/Poke-Api-2.git
   ```

2. **Navega al directorio**
   ```bash
   cd Poke-Api-2
   ```

3. **Abre en tu navegador**
   ```bash
   # Simplemente abre index.html en tu navegador favorito
   # O usa un servidor local como Live Server en VS Code
   ```

4. **¡A explorar!**
   - No se requieren dependencias adicionales
   - La aplicación es completamente frontend

---

## 🎥 Demo

> **¡Próximamente!** - Demo en vivo disponible pronto

---

## 📊 API Utilizada

Esta aplicación consume datos de la **[PokéAPI](https://pokeapi.co/)**, la API RESTful más completa sobre Pokémon:

### Endpoints principales:
```javascript
// Obtener lista de Pokémon
GET https://pokeapi.co/api/v2/pokemon?limit=151

// Obtener Pokémon específico
GET https://pokeapi.co/api/v2/pokemon/{id or name}

// Obtener información de tipos
GET https://pokeapi.co/api/v2/type/{id or name}

// Obtener especies
GET https://pokeapi.co/api/v2/pokemon-species/{id or name}
```

### Datos disponibles:
- 📋 Lista completa de Pokémon (1000+)
- 🖼️ Sprites oficiales y artwork
- 📊 Estadísticas base (HP, Attack, Defense, etc.)
- 🏷️ Tipos y efectividades
- 🎯 Habilidades y movimientos
- 🌍 Información de especies y evoluciones

---

## 🎮 Funcionalidades Detalladas

### 🏠 **Página Principal**
- Grid responsivo de tarjetas Pokémon
- Paginación inteligente
- Carga progresiva de imágenes
- Barra de búsqueda prominente

### 🔍 **Sistema de Búsqueda**
- Búsqueda por nombre (inglés/español)
- Búsqueda por número de Pokédex
- Sugerencias en tiempo real
- Historial de búsquedas

### 📊 **Vista Detallada**
- Información completa del Pokémon
- Gráfico de estadísticas base
- Lista de habilidades y movimientos
- Cadena evolutiva
- Variantes de color

### 🎲 **Pokémon Aleatorio**
- Generación de Pokémon sorpresa
- Perfecto para descubrir nuevas criaturas
- Animación de "sorteo"

### ❤️ **Sistema de Favoritos**
- Marca tus Pokémon favoritos
- Persistencia con localStorage
- Página dedicada a favoritos
- Contador de favoritos

---

## 🎨 Tipos Pokémon y Colores

La aplicación usa un sistema de colores dinámico basado en tipos:

| Tipo | Color | Ejemplo |
|------|-------|---------|
| 🔥 Fuego | `#F08030` | Charizard |
| 💧 Agua | `#6890F0` | Blastoise |
| 🌱 Planta | `#78C850` | Venusaur |
| ⚡ Eléctrico | `#F8D030` | Pikachu |
| 🧠 Psíquico | `#F85888` | Mewtwo |
| 👻 Fantasma | `#705898` | Gengar |
| 🥊 Lucha | `#C03028` | Machamp |
| ☠️ Veneno | `#A040A0` | Crobat |

---

## 📱 Responsive Design

Optimizado para todos los dispositivos:

- 📱 **Móvil:** 320px - 768px (Grid 1-2 columnas)
- 📟 **Tablet:** 768px - 1024px (Grid 3-4 columnas)
- 💻 **Desktop:** 1024px+ (Grid 4-6 columnas)
- 🖥️ **Large:** 1440px+ (Grid 6+ columnas)

---

## ⚡ Optimizaciones de Rendimiento

- 🚀 **Lazy Loading:** Imágenes se cargan bajo demanda
- 💾 **Caché Inteligente:** Datos se almacenan localmente
- 🔄 **Paginación:** Carga gradual de contenido
- ⏱️ **Debouncing:** Optimización en búsquedas
- 🎯 **Fetch Selectivo:** Solo datos necesarios

---

## 🤝 Contribuciones

¡Tu ayuda es bienvenida! Para contribuir:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/mejora-increible`)
3. Commit tus cambios (`git commit -m 'Añadir mejora increíble'`)
4. Push a la rama (`git push origin feature/mejora-increible`)
5. Abre un Pull Request

### Ideas para contribuir:
- 🎨 Mejorar diseño y animaciones
- 🔍 Añadir más filtros de búsqueda
- 📊 Implementar comparador de Pokémon
- 🎮 Añadir mini-juegos
- 🌍 Soporte multiidioma
- 📱 Mejorar UX móvil

---

## 📚 Recursos y Referencias

- 🔗 [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- 🎮 [Pokémon Official Website](https://www.pokemon.com/)
- 🎨 [Color Palette Generator](https://coolors.co/)
- 📱 [Responsive Design Guide](https://web.dev/responsive-web-design-basics/)
- ⚡ [JavaScript Performance Tips](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

## 🏆 Características Técnicas Destacadas

- **Manejo de Errores:** Sistema robusto de error handling
- **Estados de Carga:** Indicadores visuales durante peticiones
- **Accesibilidad:** Navegación por teclado y screen readers
- **SEO Friendly:** Meta tags y estructura semántica
- **Progressive Enhancement:** Funciona sin JavaScript básico

---

## 👨‍💻 Autor

**Fernando Urbano**

[![GitHub](https://img.shields.io/badge/GitHub-Fernando--urb-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fernando-urb)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ufer2025-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ufer2025)
[![Email](https://img.shields.io/badge/Email-fernando__urbano%40outlook.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernando_urbano@outlook.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=Fernando-urb&color=yellow&style=flat-square&label=Visitas+al+repositorio"/>
</div>

<div align="center">
  
  **"¡Gotta catch 'em all!"** ⚡🔴⚪
  
</div>

---

⭐ **¡Si te gustó este proyecto, dale una estrella!** ⭐
