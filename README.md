# 🍳 Recipe Generator API

This lightweight Node.js API proxy fetches and serves various recipe-related data from the [Recipe Generator API](https://recipe-generator-api-tau.vercel.app). It provides endpoints to get random recipes, categories, ingredient lists, and more — ideal for integration in apps, bots, or any frontend needing recipe data.

## 🚀 Features

- ⚡ Simple proxy API using Express.
- 🔄 Endpoints for random recipes, categories, areas, ingredients, and filtered searches.
- 📦 Uses async/await and `node-fetch` for clean API calls.
- 🔐 Easily deployable on Vercel or any Node.js backend.

## 🛠️ Requirements

- Node.js v14 or higher.
- Vercel or any Node.js hosting service.

## 📡 Usage

### Endpoints

- `GET /random`  
  Returns a random recipe.

- `GET /categories`  
  Returns recipe categories.

- `GET /list-areas`  
  Returns list of areas (regions).

- `GET /list-ingredients`  
  Returns list of ingredients.

- `GET /search?s=term`  
  Searches recipes by name (query parameter `s` required).

- `GET /lookup?id=recipeId`  
  Looks up a recipe by ID (query parameter `id` required).

- `GET /filter-by-category?c=category`  
  Filters recipes by category (query parameter `c` required).

- `GET /filter-by-area?a=area`  
  Filters recipes by area (query parameter `a` required).

- `GET /filter-by-ingredient?i=ingredient`  
  Filters recipes by ingredient (query parameter `i` required).

### Example

Request:

```
GET /search?s=chicken
```

Response:

```json
{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Chicken Handi",
      ...
    }
  ]
}
```

## ⚠️ Error Handling

- If required query parameters are missing, the API returns a `400` error with a message.
- If the upstream API fails, an error may be returned.

## 🛠️ Running Locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Access endpoints at `http://localhost:3000/`.

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/NotFlexCoder/recipe-generator-api/blob/main/LICENSE) file for details.
