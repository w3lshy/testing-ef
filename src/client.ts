import axios from 'axios';

export async function getFile(id: string): Promise<any> {
  //   const resp = await axios.get(`http://localhost:8010/rc/data/${id}`);
  const resp = await axios.get(`https://cat-fact.herokuapp.com/facts`);
  console.log(resp);
}
