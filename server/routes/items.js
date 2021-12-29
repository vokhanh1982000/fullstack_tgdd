const router = require("express").Router();
const Item = require("../models/Item");
const verifyToken = require("../middleware/auth");

//create item
router.post("/", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const newItem = new Item({
      name: req.body.name,
      priceOrigin: req.body.priceOrigin,
      discount: req.body.discount,
      gift: req.body.gift,
      rate: req.body.rate,
      img: req.body.img,
      cate: req.body.cate,
      status: req.body.status,
    });

    try {
      const saveItem = await newItem.save();
      res.status(201).json(saveItem);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allow!");
  }
});

//update item
router.put("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allow!");
  }
});

//delete movie
router.delete("/:id", verifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    const deletedItem = await Item.findById(req.params.id);
    try {
      // await Item.findByIdAndDelete(req.params.id);
      if (deletedItem) {
        await deletedItem.remove();
        res.status(200).json("The item has been deleted...");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allow!");
  }
});

//get movie
router.get("/find/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get items random
router.get("/", async (req, res) => {
  const category = req.query.category;
  let item;
  try {
    if (!category) {
      item = await Item.find();
    } else {
      item = await Item.aggregate([{ $match: { cate: category } }]);
    }
    res.status(200).json(item.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getSale", async (req, res) => {
  let item;
  try {
    item = await Item.aggregate([
      { $match: { discount: { $gte: 0 } } },
    ]);
    res.status(200).json(item.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getPhone", async (req, res) => {
  let item;
  try {
    item = await Item.aggregate([
      { $match: { cate: "phone" } },
      { $sample: { size: 10 } },
    ]);
    res.status(200).json(item.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getLaptop", async (req, res) => {
  let item;
  try {
    item = await Item.aggregate([
      { $match: { cate: "laptop" } },
      { $sample: { size: 10 } },
    ]);
    res.status(200).json(item.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all item
// router.get("/", verifyToken, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       const items = await Item.find();
//       res.status(200).json(items.reverse());
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

//get user stats
router.get("/stats", async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octorber",
    "November",
    "December",
  ];

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
