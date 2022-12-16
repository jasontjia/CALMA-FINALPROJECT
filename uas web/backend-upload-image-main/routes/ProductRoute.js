import express from "express";
import {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
  getRecomendation,
  getPopular,
  getNew,
} from "../controllers/Product.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/recomendation", getRecomendation);
router.get("/popular", getPopular);
router.get("/new",getNew)

export default router;
