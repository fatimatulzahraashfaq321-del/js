import express from "express";
import {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);        // CREATE
router.get("/", getProducts);           // READ ALL
router.get("/:id", getSingleProduct);   // READ ONE
router.put("/:id", updateProduct);      // UPDATE
router.delete("/:id", deleteProduct);   // DELETE

export default router;