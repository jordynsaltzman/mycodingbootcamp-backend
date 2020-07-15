const express = require("express");
const router = express.Router();
const resourceController = require("../controllers/resourcesController");
const verify = require("./verifyToken");

//get all resources
router.get("/:id", verify, resourceController.findAllResources);

//get one resource
router.get("/id/:id", verify, resourceController.findResourceById);
//create a new resource
router.post("/new", verify, resourceController.createNewResource);

//delete a resource
router.delete("/delete", verify, resourceController.removeResource);

//update resource
router.put("/update", verify, resourceController.updateResource);

module.exports = router;

// ui to create a topic => post
// find the user from the db, and update the users topics
//{name: redux} => user.findandupdate({})
//resourece = > return the users topics
//{resource: '', topic: 2} => virtual refs (look up)
// when bringing them to the ui for resource, fetch all their current topics
// when creating a resource, the ref would be the topic id
//fetch the users topics, and the users resources under each topic

//routes
//fetching all topics
//fetching a topic
//fetching all resources under a topic

//creating a topic
//creating a resource => topic => findandupdate => {...resources}

// [
//     {
//         topic: 'Redux',
//         resources: ['action' , 'reducers' , 'store']
//     },
//     {
//         topic: 'React',
//         resources: ['dom, hooks, whatever']
//     }
// ]

// //
// Response.data.map(item => (
//     <p>{item.topic}</p>
//     <select>
//         {
//             item.resources.map(resource => {
//                 return <option value={resource.id}>{resource}</option>
//             })
//         }
//     </select>
// ))
