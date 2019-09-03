const Team = require('../models/team');

module.exports = {
    create,
    delete:deleteCom
}

function create(req, res) {
    Team.findById(req.params.id, function(err, team){
        team.comments.push(req.body);
        team.save(function(err){
            res.redirect(`/teams/${team._id}`);
        });
    });
}
function deleteCom(req, res) {
    Team.findById(req.params.id, function(err, team){
        team.comments.pop(req.body);
        team.save(function(err){
            res.redirect(`/teams/${team._id}`);
        });
    });
}