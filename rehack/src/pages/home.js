import { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import FormSection from "../component/Form";


const appID = 'a8f9fe6e';
const apiKey = '11fc5d63edb90973a7a0aa1591f16b27';
const results = 50;

function Home(){
    const [showJob, setShowJob] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/3?app_id=${appID}&app_key=${apiKey}&results_per_page=${results}&what=${title}&where=${location}&distance=${distance}&salary_min=${minSalary}`) 
    //     .then((res) => res.obj()) 
    //     .then((data)=>{
    //        setShowJob(data)
    //     });

    // }, [])
   

    return (
        <section className='searchContainer'>
           <FormSection />
           
        </section>
        
    )
}




export default Home;