const { Router } = require("express");
const {
  createNewJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controller/job.controller");

const router = Router();

router.post("/addNewJob", createNewJob);
router.get("/getAllJobs", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);
module.exports = router;
