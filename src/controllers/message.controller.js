const Message = require('../models/message.model');

module.exports = {
   async find(req, res) {
      try {
         //const id = req.params.id
         const result = await Message.find(); //{useFindAndModify: false,new: true}
         res.status(200).send(result);
      } catch (error) {
         res.status(400).send(error);
      }
   },
   async create(req, res) {
      try {
         //const id = req.params.id
         const message = req.body;
         const result = await Message.create(message); //{useFindAndModify: false,new: true}
         res.status(200).send(result);
      } catch (error) {
         res.status(400).send(error);
      }
   }
};
