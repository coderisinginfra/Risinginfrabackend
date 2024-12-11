const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const port = process.env.PORT
const url = process.env.MONGODB_URL
const multer  = require('multer')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*",
    method: ['GET','POST','PUT','PATCH','DELETE'],
    Credential: true
}))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



// Routes has been started here 
const AddProjectRouter = require('../Routers/AddProjectRouter')
app.use("/api/v1",AddProjectRouter)
const BlogController = require('../Routers/BlogRouter')
app.use("/api/v1",BlogController)
const UpdateBlogRouter = require('../Routers/UpdateBlogRouter')
app.use("/api/v1",UpdateBlogRouter)
const DeleteBlogRouter = require('../Routers/DeleteBlogRouter')
app.use("/api/v1",DeleteBlogRouter)
const Contactus = require('../Routers/ContactusRouter')
app.use("/api/v1",Contactus)
const FetchBlogRouter = require('../Routers/FetchBlogRouter')
app.use("/api/v1",FetchBlogRouter)
const FetchbyidblogRouter = require('../Routers/FetchbyidblogRouter')
app.use("/api/v1",FetchbyidblogRouter)
const CategoryFindRouter = require('../Routers/CategoryFindRouter')
app.use("/api/v1",CategoryFindRouter)

// Fetching the Blogs by The Category 
const LeaseCommercialPropertyFindingRouter = require('../Routers/LeaseCommercialPropertyFindingRouter')
app.use("/api/v1", LeaseCommercialPropertyFindingRouter)
const CommercialPropertyFindingRouter = require('../Routers/CommercialPropertyFindingRouter')
app.use("/api/v1",CommercialPropertyFindingRouter)
const RentingHomePropertyFindingRouter = require('../Routers/RentingHomePropertyFindingRouter')
app.use("/api/v1",RentingHomePropertyFindingRouter)
const ResidentialPropertyFindingRouter = require('../Routers/ResidentialPropertyFindingRouter')
app.use("/api/v1",ResidentialPropertyFindingRouter)
const SellYourPropertyFindingRouter = require('../Routers/SellYourPropertyFindingRouter')
app.use("/api/v1",SellYourPropertyFindingRouter)
const BuyPlotsPropertyFindingRouter = require('../Routers/BuyPlotsPropertyFindingRouter')
app.use("/api/v1",BuyPlotsPropertyFindingRouter)
const BlogReviewSubmitRouter = require('../Routers/BlogReviewSubmitRouter')
app.use("/api/v1",BlogReviewSubmitRouter)
const FetchHomePageDataRouter = require('../Routers/FetchHomePageRouter')
app.use("/api/v1",FetchHomePageDataRouter)

const FetchListingsControllerRouter = require('../Routers/FetchListingControllerRouter')
app.use("/api/v1",FetchListingsControllerRouter)

// Carrers Page data start 
const addJobsRouter = require('../Routers/AddjobsRouter')
app.use("/api/v1",addJobsRouter)
const FetchJobsRouter = require('../Routers/FetchjobRouter')
app.use("/api/v1",FetchJobsRouter)
const FetchJobCategoryRouter = require('../Routers/FetchJobCategoryRouter')
app.use("/api/v1",FetchJobCategoryRouter)
const ApplyNowRouter = require('../Routers/ApplyNowRouter')
app.use("/api/v1",ApplyNowRouter)

// Fetch Projects 
const FetchProjects = require('../Routers/FetchProjects')
app.use("/api/v1",FetchProjects)


const AddTeamMemberRouter = require('../Routers/AddTeamMemberRouter')
app.use("/api/v1",AddTeamMemberRouter)

const FetchTeammemberRouter = require('../Routers/FetchTeamMemberRouter')
app.use("/api/v1",FetchTeammemberRouter)

const EventAddRouter = require('../Routers/EventAddRouter')
app.use("/api/v1",EventAddRouter)

const EventFetchRouter = require('../Routers/EventFetchRouter')
app.use("/api/v1",EventFetchRouter)

const FetchBlogByIdRouter = require('../Routers/FetchBlogByIdRouter')
app.use("/api/v1",FetchBlogByIdRouter)

const PopupformRouter = require('../Routers/PopupRouter')
app.use("/api/v1",PopupformRouter)

// FtechLoaction Wise router 
const GoaPropertyRouter = require('../Routers/GoaPropertyRouter')
app.use("/api/v1",GoaPropertyRouter)
const NoidapropertyRouter = require('../Routers/NoidaPropertyRouter')
app.use("/api/v1",NoidapropertyRouter)
const GurugramPropertyRouter = require('../Routers/GurugrmPropertyRouter')
app.use("/api/v1",GurugramPropertyRouter)
const AyodhyaPropertyRouter = require('../Routers/AyodhyaPropertyRouter')
app.use("/api/v1",AyodhyaPropertyRouter)
const GhaziabadRouter = require('../Routers/GhaziabadRouter')
app.use("/api/v1",GhaziabadRouter)

const FetchResumeRouter = require('../Routers/FetchResumeRouter')
app.use("/api/v1",FetchResumeRouter)

const UserSubmit = require('../Routers/UserSubmit')
app.use("/api",UserSubmit)

const NayaashiyanaRouter = require('../Routers/NayaashiyanaRouter')
app.use("/api/v1",NayaashiyanaRouter)

const signup = require('../Routers/SignupRouter')
app.use("/api/v1",signup)

const login = require('../Routers/LoginRouter')
app.use("/api/v1",login)

// Fetch Projects developers 
const BhutaniFetchRouter = require('../Routers/BhutaniFetchRouter')
app.use("/api/v1",BhutaniFetchRouter)

const GaurFetchRouter = require('../Routers/GaurFetchRouter')
app.use("/api/v1",GaurFetchRouter)

const GyGyGroupRouter = require('../Routers/GyGyGroupFetchRouter')
app.use("/api/v1",GyGyGroupRouter)

const AceGroupFetchRouter = require('../Routers/AceGroupFetchRouter')
app.use("/api/v1",AceGroupFetchRouter)

const ParasGroupRouter = require('../Routers/ParasGroupRouter')
app.use("/api/v1",ParasGroupRouter)

const CrcGroupFetchRouter = require('../Routers/CrcGroupFetchRouter')
app.use("/api/v1",CrcGroupFetchRouter)

const FairFoxGroupFetchRouter = require('../Routers/FairFoxGroupFetchRouter')
app.use("/api/v1",FairFoxGroupFetchRouter)

const FetchContactRouter = require('../Routers/FetchContactRouter')
app.use("/api/v1",FetchContactRouter)

const FetchPopupRouter = require('../Routers/FetchPopupRouter')
app.use("/api/v1",FetchPopupRouter)

const FetchBlogReviewRouter = require('../Routers/FetchBlogReviewRouter')
app.use("/api/v1",FetchBlogReviewRouter)

const FetchUserSubmitRouter = require('../Routers/FetchUserSubmitRouter')
app.use("/api/v1",FetchUserSubmitRouter)

const FetchNayaashiyanaRouter = require("../Routers/FetchNayaashiyanaRouter")
app.use("/api/v1",FetchNayaashiyanaRouter)

const FarmhouseRouter = require('../Routers/FarmhouseRouter')
app.use("/api/v1",FarmhouseRouter)

const BhutaniRouter = require('../Routers/BhutaniRouter')
app.use("/app/v1", BhutaniRouter)

const Godrejsector44Router = require('../Routers/Godrejsector44Router')
app.use("/api/v1", Godrejsector44Router)

const Avenue133Router = require('../Routers/Avenue133Router')
app.use("/api/v1", Avenue133Router)

const culturalbites = require('../Routers/CulturalbitesRouter')
app.use("/api/v1", culturalbites)

mongoose.connect(url)
.then(()=>console.log('mongoDB has been connected'))
.catch(()=>console.log("MongoDB gives an Error"))

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})