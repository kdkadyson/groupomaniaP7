////// Testing Authorization

// For public access => /api/test/all 
exports.allAccess = (req, res) => {
    res.status(200).send("Contenu publique.");
};

// For loggedin users (role: user/admin) => /api/test/user
exports.userBoard = (req, res) => {
    res.status(200).send("Contenu utilisateur.");
};

// For users having admin role => /api/test/admin
exports.adminBoard = (req, res) => {
    res.status(200).send("Contenu Admin.");
};