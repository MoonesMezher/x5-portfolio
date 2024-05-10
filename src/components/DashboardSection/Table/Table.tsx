import { FaEdit, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router';
import './Table.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Table = () => {
    const [reload,setReload] = useState(1)
    const [data,setdata] = useState([])
    const { section } = useParams();

    useEffect(()=>{
        if(section=='messages'){
            axios.get(`http://127.0.0.1:8000/api/messages`)
            .then(res=>{
                setdata(res.data.data);
            })
        }else{
            axios.get(`http://127.0.0.1:8000/api/projects`)
            .then(res=>{
                setdata(res.data.data);
            })
        }
       
    },[reload])
    
    const deleteMessage = async (id:BigInteger) => {
        if(section=='messages'){
            await axios.delete(`http://127.0.0.1:8000/api/messages/${id}`)
            .then(res=>{
             console.log(res)
     
            })
             .catch(function(err){
                 console.log(err)
             })
        }else{
            await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`)
            .then(res=>{
             console.log(res)
     
            })
             .catch(function(err){
                 console.log(err)
             })
        }

        setReload(reload +1)
    }
    
    return (
        <div className="table-container">
        <table className="table">
            <thead>
                <tr>
                    {section == 'projects' &&
                    <>
                        <th>ID</th>
                        <th>Img</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </>
                    }
                    {section == 'messages' &&
                    <>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </>
                    }
                </tr>
            </thead>
            <tbody>
            {data.map((item: any) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    {section == 'projects' && <td><img src={item.img} alt={item.img}/></td>}
                    <td>{(section=='projects' && item.title) || (section=='messages' && item.name)}</td>
                    <td>{(section=='projects' && item.category) || (section=='messages' && item.email)}</td>
                    {section == 'messages' && <td>{item.body}</td>}
                    <td className="actions">
                        {(section=='projects' && <>
                                <FaEdit className='edit' size={18} onClick={() => console.log('Edit')} />
                                <FaTrash className='trash' size={18} onClick={() => deleteMessage(item.id)} />
                            </>
                        ) || (section=='messages' && <FaTrash className='trash' size={18} onClick={() => deleteMessage(item.id)} />)}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default Table;