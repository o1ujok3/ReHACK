import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../component/FormSection";
import Title from "../component/Title";
import useJobList from "../context/jobList";
import Loading from "../component/Loading";

const appID = "a8f9fe6e";
const apiKey = "11fc5d63edb90973a7a0aa1591f16b27";
const results = 50;

function Home() {
  const { data, isLoading, error, dispatch } = useJobList();
  const navigate = useNavigate();
  console.log({ data, isLoading, error });

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    distance: "",
    salary: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    // Loading => True

    if (
      !formData.distance ||
      !formData.salary ||
      !formData.location ||
      !formData.title
    )
      return alert("Please complete all sections");

    dispatch({
      type: "JOB_LIST_REQUEST",
    });

    fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/3?app_id=${appID}&app_key=${apiKey}&results_per_page=${results}&what=${formData.title}&where=${formData.location}&distance=${formData.distance}&salary_min=${formData.salary}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        // set the data =>
        console.log(data);

        dispatch({
          type: "JOB_LIST_SUCCESS",
          payload: {
            data: data.results,
          },
        });

        navigate("/list");

        setFormData({
          title: "",
          location: "",
          distance: "",
          salary: "",
        });
      });
  };

  return (
    <section className="searchContainer">
      {isLoading && <Loading />}
      <Title />
      <FormSection
        formData={formData}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </section>
  );
}

export default Home;
