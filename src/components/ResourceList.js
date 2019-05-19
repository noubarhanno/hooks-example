import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);
  // the reason that when we click on Todos button the component will be re rendered but componentDidMount lifecycle is going to be called in the second time
  // if the component re-rendered as the component is mounted by a re-rendering is not meaning that the component has been re-mounted
  // to solve this issue we need to use another lifecycle called componentDidUpdate
  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  // it's not allowed to use useEffect with sync function or a function with a promise like below 

  // useEffect(async (resource) => {
        // const response = await axios.get(`URL/${resource}`);
  //})
  // the above code is not allowed in useEffect
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
