const Menu = require("../model/items");

 

  const addDatas=async(req,res)=>{
             
     try {
          const { menuName, menuDescription, itemName, itemDescription, price } = req.body;
          console.log(req.body)
      
          const newMenu = new Menu({
            menuName,
            menuDescription,
            itemName,
            itemDescription,
            price,
          });
      
          await newMenu.save();
          console.log("suceess")
          res.status(201).json({ message: 'Menu item added successfully!', data: newMenu });
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
  }

  const getDatas = async (req, res) => {
     try {
      
       const menus = await Menu.find();
   
         console.log(menus)
       
       if (!menus) {
         return res.status(404).json({ message: 'No menus found' });
       }
   
       
       return res.status(200).json(menus);
     } catch (error) {
       
       console.error(error);
       return res.status(500).json({ message: 'Error fetching menus', error: error.message });
     }
   };
   

   module.exports= {
          addDatas,
          getDatas
   }