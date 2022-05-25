


  const productsGet = (req, res) => {
      
      res.json({
        msg: "get API controlador",
      });
 }

 const productsPut = (req, res) => {
   res.json({
     msg: "put API controlador",
   });
 };


 const productsPost = (req, res) => {
     const body = req.body
     
     res.json({
        
         msg: "post API controlador",
         body
   });
 };


const productsDelete = (req, res) => {
  res.json({
    msg: "delete API controlador",
  });
};
 
module.exports = {
    productsGet,
    productsPut,
    productsPost,
    productsDelete
}
    
