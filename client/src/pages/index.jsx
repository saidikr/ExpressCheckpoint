import React from 'react'
import { Card } from '../components/Card';
import { getContent } from '../services/API_connect';



const HomePage = () => {
  const {data,loading,error}=getContent(`http://localhost:4000/api/`);
    return (
    <>
    <div className="text-3xl font-bold underline mb-10 text-center" >HomePage</div>
    <div className="text-center md:text-center p-4 shadow-md ">
            
            {loading&&<h1>Loading.....</h1>}
            {error&&<h1 className="text-red-600">Error Fetch.....</h1>}
            <div className="space-y-2">

                {data&& data!="no"
                ?data.map((el)=>(
                    <Card key={el.id} title={el.title} body={el.body} />
                ))
                :
                <h3>This site is not available now</h3>
            }
            </div>
        </div>



</>
  )
}

export default HomePage