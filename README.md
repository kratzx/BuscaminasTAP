# BuscaminasTAP

## Tabla de contenidos

- [Info general](#info-general)
- [Tecnologias](#tecnologias)
- [API REST](#api-rest)
- [Setup](#setup)

## Info general

Desafio tecnico propuesto por el equipo de TAP. El objetivo era crear un backend para un buscaminas que se le comunica por medio de API REST.

## Tecnologias

Proyecto fue realizado con:

- Node.js
- ExpressJS: ver. 4.17.1
- Jest: ver. 27.2.4
- Babel-jest: ver. 27.2.4

## API REST

Los metodos REST que acepta esta API son las siguientes:
| Metodo | Descripcion |
| ------------- |------------- |
| `GET`| Como parámetro debe esperar un ID, este es el identificador de una partida, si viene informado se recupera desde un almacenamiento, si no está informado se crea una nueva partida. |
| `POST` | Guarda la partida, esperando un ID de parametro. |

## Setup

Para correr este API se debe:

1. Instalar node y yarn.
2. Clonar este repositorio con:
   - Con GitHub CLI: `gh repo clone kratzx/BuscaminasTAP`
   - Con GIT: `git clone https://github.com/kratzx/BuscaminasTAP.git`
3. En la terminal, instalar dependencias: `yarn install`
4. Iniciar el servidor con: `yarn start`

Para correr los tests: `yarn test`
