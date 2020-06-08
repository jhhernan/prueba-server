const Vote = require('../models/vote.model');

module.exports = {
    async list(req, res){
        const votes= await Vote.find();
        res.status(200).json(votes);
    },
    async create(req, res){

        try{
            const vote = await Vote.create({voterId:req.user.id, ...req.body});
            res.status(200).json("OK");
        } catch (error){
            res.status(401).json({ message: error.message });
        }  
    }, 
    async showVotesUser (req, res){
        const userId = req.params.userId;
        const votes = await Vote.find({voterId: userId});
        res.status(200).json(votes);
    },
    async test(req, res){

        const votesMarkUp = await Vote.count({"character":"Mark", "vote":"up"});
        const votesMarkDown = await Vote.count({"character":"Mark", "vote":"down"});
        const votesMalalaUp = await Vote.count({"character":"Malala", "vote":"up"});
        const votesMalalaDown = await Vote.count({"character":"Malala", "vote":"down"});
   
        res.status(200).json([{"name":"Mark","up":votesMarkUp, "down":votesMarkDown},
            {"name":"Malala","up":votesMalalaUp, "down":votesMalalaDown},]);
    },
} 