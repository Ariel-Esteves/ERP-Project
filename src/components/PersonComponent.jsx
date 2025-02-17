import { useEffect, useState } from "react";
import { getPerson } from "../hooks/RequestApi/personRequest";

const PersonComponent = () => {
  const [personList, setPersonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPersonList = async () => {
    try {
      const personList = await getPerson();
      if (personList != undefined) setPersonList(personList);
      console.log("personList: ", personList);
    } catch (error) {
      console.error("Failed to fetch person list:", error);
      setError("Failed to fetch person list.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersonList();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <label htmlFor="person">Person</label>
      <select id="person">
        {personList.length > 0 &&
          personList.map((entidade) => (
            <option key={entidade.id} value={entidade.id}>
              {entidade.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default PersonComponent;
