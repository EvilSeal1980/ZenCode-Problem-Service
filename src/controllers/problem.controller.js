const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const BadRequest = require("../errors/badrequest.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function addProblem(req, res, next) {
  try {
    // not implemented
    throw new NotImplemented('Add Problem');
  } catch(error) {
    next(error);
  }
}

function getProblem(req, res, next) {
    try {
        // not implemented
        throw new NotImplemented('Get Problem');
      } catch(error) {
        next(error);
      }
}

function getProblems(req, res, next) {
    try {
        // not implemented
        throw new NotImplemented('Get Problems');
      } catch(error) {
        next(error);
      }
}

function deleteProblem(req, res, next) {
    try {
        // not implemented
        throw new NotImplemented('Delete Problem');
      } catch(error) {
        next(error);
      }
}

function updateProblem(req, res, next) {
    try {
        // not implemented
        throw new NotImplemented('Update Problem');
      } catch(error) {
        next(error);
      }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
