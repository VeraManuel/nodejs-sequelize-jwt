'user strict'

allAccess = (req, res) => {
    res.status(200).send({ message: "Public Content."});
};

userBoard = (req, res) => {
    res.status(200).send({ message: "User Content."});
};

moderatorBoard = (req, res) => {
    res.status(200).send({ message: "Moderator Content."});
};

adminBoard = (req,res) => {
    res.status(200).send({ message: "Admistrator Content."});
};

module.exports = {
    allAccess,
    userBoard,
    moderatorBoard,
    adminBoard
};