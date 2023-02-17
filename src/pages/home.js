import { useState } from "react";
import FormSection from "../component/Form";



const appID = 'a8f9fe6e';
const apiKey = '11fc5d63edb90973a7a0aa1591f16b27';
const results = 50;

function Home(){
    
    const [showJob, setShowJob] = useState([]);
    const [getTitle, setTitle] = useState('');
    const [getLocation, setLocation] = useState('');
    const [getDistance, setDistance] = useState();
    const [getSalary, setSalary] = useState();
    //const [getContract, setContract] = useState('');
     
    
    const handleChange = (event)=>{
        setTitle(event.target.value)
        setLocation(event.target.value)
        setDistance(event.target.value)
        setSalary(event.target.value)
        //setContract(event.target.value)
        
    }
     
    const handleClick = ()=>{
        
        fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/3?app_id=${appID}&app_key=${apiKey}&results_per_page=${results}&what=${getTitle}&where=${getLocation}&distance=${getDistance}&salary_min=${getSalary}`) 
        .then((res) => res.obj()) 
        .then((data)=>{
           console.log(data);

           setShowJob(data)
           console.log(showJob);
        });

    }
   

    return (
        <section className='searchContainer'>
           <FormSection />
           
        </section>
        
    )
}




export default Home;