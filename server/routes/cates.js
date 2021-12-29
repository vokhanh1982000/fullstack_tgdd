const router = require("express").Router();
const Cate = require("../models/Cate");
const verifyToken = require("../middleware/auth");

//create cate
router.post("/", verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
      const newCate = new Cate({
        nameCate: req.body.nameCate,
      });
  
      try {
        const saveCate = await newCate.save();
        res.status(201).json(saveCate);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allow!");
    }
  });

  
  //delete cate
  router.delete("/:id", verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
      const deletedCate = await Cate.findById(req.params.id);
      try {
        // await Cate.findByIdAndDelete(req.params.id);
        // res.status(200).json("The cate has been deleted...");
        if(deletedCate) {
          await deletedCate.remove();
          res.status(200).json("The cate has been deleted...");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allow!");
    }
  });
  
  // //get movie
  // router.get("/find/:id", verifyToken, async (req, res) => {
  //   try {
  //     const item = await Movie.findById(req.params.id);
  //     res.status(200).json(item);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // //get movie random
  // router.get("/", verifyToken, async (req, res) => {
  //   const category = req.query.category;
  //   let item;
  //   try {
  //     if(!category)
  //     {
  //       item = await Item.find();
  //     }
  //     else{
  //       item = await Item.aggregate([
  //         { $match: {cate: category} },
  //       ])
  //     }
  //     res.status(200).json(item.reverse());
  //   } catch(err) {
  //     res.status(500).json(err);
  //   }
  // })
  
  // get all item
  router.get("/", async (req, res) => {
    
      try {
        const cates = await Cate.find();
        res.status(200).json(cates.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    
  });
  
  //get user stats
  // router.get("/stats", async (req, res) => {
  //   const today = new Date();
  //   const latYear = today.setFullYear(today.setFullYear() - 1);
  
  //   const monthsArray = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "Octorber",
  //     "November",
  //     "December",
  //   ];
  
  //   try {
  //     const data = await User.aggregate([
  //       {
  //         $project: {
  //           month: { $month: "$createAt" },
  //         },
  //       },
  //       {
  //         $group: {
  //           _id: "$month",
  //           total: { $sum: 1 },
  //         },
  //       },
  //     ]);
  //     res.status(200).json(data);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  module.exports = router;
  