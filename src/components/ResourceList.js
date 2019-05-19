import React from "react";
import useResource from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
