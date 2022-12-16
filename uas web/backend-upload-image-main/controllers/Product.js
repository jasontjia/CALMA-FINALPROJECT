import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  // SELECT * FROM product
  try {
    const response = await Product.findAll({
      limit:4,
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (req, res) => {
  // SELECT * FROM product WHER id = ?
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (req, res) => {
  // INSERT INTO product VALUES (...)
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { OpenClose, name, price, text_desc, menuId, daerah } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        OpenClose: OpenClose,
        daerah: daerah,
        name: name,
        price: price,
        image: fileName,
        text_desc: text_desc,
        url: url,
        menuId: menuId,
      });
      res.status(201).json({ msg: "Product Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = async (req, res) => {
  // UPDATE product SET (...) WHERE id = ?
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = product.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${product.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const { OpenClose, name, price, text_desc, menuId, daerah } = req.body;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Product.update(
      { OpenClose: OpenClose, name: name, price: price, text_desc: text_desc, menuId: menuId, image: fileName, url: url, daerah: daerah },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Product Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  // DELETE FROM product WHERE id = ?
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${product.image}`;
    fs.unlinkSync(filepath);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRecomendation = async (req, res) => {
  try {
    const response = await Product.findAll({
      where: {
        menuId: 1
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getPopular = async (req, res) => {
  try {
    const response = await Product.findAll({
      where: {
        menuId: 2,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getNew = async (req, res) => {
  try {
    const response = await Product.findAll({
      where: {
        menuId: 3,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
