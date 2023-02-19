import { useState } from "react";
import FormSection from "../component/FormSection";
import Title from "../component/Title";


const appID = 'a8f9fe6e';
const apiKey = '11fc5d63edb90973a7a0aa1591f16b27';
const results = 50;

function Home(){
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        distance: '',
        salary: ''
    });

    const [showJob, setShowJob] = useState([]);
     
     
    const handleChange = (event)=>{
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })   
    }
     
    const handleClick = ()=>{
        
        fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/3?app_id=${appID}&app_key=${apiKey}&results_per_page=${results}&what=${formData.title}&where=${formData.location}&distance=${formData.distance}&salary_min=${formData.salary}`) 
        .then((res) => res.json()) 
        .then((data)=>{
           console.log(data);
            setFormData({
                title: '',
                location: '',
                distance: '',
                salary: ''
            })
           setShowJob(data)
           console.log({
                title: data.results[0].title,
                location: data.results[0].location.display_name,
                description: data.results[0].description,
                salary: data.results[0].salary_min,
                created: data.results[0].created,
                company: data.results[0].company.display_name,
                contract_type: data.results[0].contract_type,
                link: data.results[0].redirect_url
           });
        });
    }
   

    return (
        <section className='searchContainer'>
            <Title />
           <FormSection formData={formData} handleChange={handleChange} handleClick={handleClick}/>
           
        </section>
        
    )
}


export default Home;