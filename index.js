import express from "express";
import fetch from "node-fetch";

const app = express();

const BASE = "https://recipe-generator-api-tau.vercel.app";

app.get("/random", async (req, res) => {
  const response = await fetch(`${BASE}/random`);
  const data = await response.json();
  res.json(data);
});

app.get("/categories", async (req, res) => {
  const response = await fetch(`${BASE}/categories`);
  const data = await response.json();
  res.json(data);
});

app.get("/list-areas", async (req, res) => {
  const response = await fetch(`${BASE}/list-areas`);
  const data = await response.json();
  res.json(data);
});

app.get("/list-ingredients", async (req, res) => {
  const response = await fetch(`${BASE}/list-ingredients`);
  const data = await response.json();
  res.json(data);
});

app.get("/search", async (req, res) => {
  const { s } = req.query;
  if (!s) return res.status(400).json({ error: "Missing query parameter s" });
  const response = await fetch(`${BASE}/search?s=${encodeURIComponent(s)}`);
  const data = await response.json();
  res.json(data);
});

app.get("/lookup", async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Missing query parameter id" });
  const response = await fetch(`${BASE}/lookup?id=${encodeURIComponent(id)}`);
  const data = await response.json();
  res.json(data);
});

app.get("/filter-by-category", async (req, res) => {
  const { c } = req.query;
  if (!c) return res.status(400).json({ error: "Missing query parameter c" });
  const response = await fetch(`${BASE}/filter-by-category?c=${encodeURIComponent(c)}`);
  const data = await response.json();
  res.json(data);
});

app.get("/filter-by-area", async (req, res) => {
  const { a } = req.query;
  if (!a) return res.status(400).json({ error: "Missing query parameter a" });
  const response = await fetch(`${BASE}/filter-by-area?a=${encodeURIComponent(a)}`);
  const data = await response.json();
  res.json(data);
});

app.get("/filter-by-ingredient", async (req, res) => {
  const { i } = req.query;
  if (!i) return res.status(400).json({ error: "Missing query parameter i" });
  const response = await fetch(`${BASE}/filter-by-ingredient?i=${encodeURIComponent(i)}`);
  const data = await response.json();
  res.json(data);
});

app.listen(process.env.PORT || 3000);
