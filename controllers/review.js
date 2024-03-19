const Review = require("../models/review");

exports.getreviews = (req, res, next) => {
  res.render("reviews");
};

exports.postreview = (req, res, next) => {
  const reviews = {
    name: req.body.name,
    pros: req.body.pros,
    cons: req.body.cons,
    rating: req.body.rating,
  };
  Review.create(reviews)
    .then(() => {
      console.log("inserted succesfully");
      res.redirect("/addreview");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getpostreview = (req, res, next) => {
    res.render('get-reviews');
};

exports.searchreview = (req, res, next) => {
    const searchreview = req.body.searchname;
    Review.findAll({where: {name: searchreview}}).then((reviews) => {
        console.log(reviews);
        let sum = 0;
        for (let i=0;i<reviews.length;i++){
            sum += reviews[i].rating
        }
        let avg = sum / reviews.length;
        const viewData = {
            pagetitle: 'home-page',
            reviews,
            avg
        };
        res.render('search-review', viewData);
    })
}
