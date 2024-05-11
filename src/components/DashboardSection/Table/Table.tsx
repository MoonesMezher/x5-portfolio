import { FaEdit, FaTrash } from 'react-icons/fa';
import { TTableProps } from '../../../types';
import { useNavigate, useParams } from 'react-router';
import './Table.css'
import limitString from '../../../helpers/limitString';
import { useState } from 'react';
import MainButton from '../../shared/MainButton/MainButton';
import axios from 'axios';
import API from '../../../api/axios';
import Loading from '../../shared/Loading/Loading';

const Table = ( { data, setDeleted } : TTableProps) => {
    const [showBodyOfMessage, setShowBodyOfMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const { section } = useParams();

    const navigate = useNavigate();

    const navigateToEditPage = (id: number) => {
        navigate('/dashboard/project-request/'+id);
    }    

    const handleDeleteMessage = (id) => {
        setLoading(true);
        axios.delete(API.DELETE.messages+id)
            .then(res => {
                setDeleted(prev => !prev);

                setLoading(false);
            });
    }

    const handleDeleteProject = (id) => {
        setLoading(true);
        axios.delete(API.DELETE.projects+id)
            .then(res => {
                setDeleted(prev => !prev);

                setLoading(false);
            });
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
            {data?.map((item: any) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    {section == 'projects' && <td><img src={'http://127.0.0.1:8000/images/'+item.image} alt={item.image}/></td>}
                    <td>{(section=='projects' && item.title) || (section=='messages' && item.name)}</td>
                    <td>{(section=='projects' && item.category) || (section=='messages' && item.email)}</td>
                    {section == 'messages' && <td onClick={() => setShowBodyOfMessage(item.body)}>{limitString(item.body, 50)}</td>}
                    <td className="actions">
                        {(section=='projects' && <>
                                <FaEdit className='edit' size={18} onClick={() => navigateToEditPage(item.id)} />
                                <FaTrash className='trash' size={18} onClick={() => handleDeleteProject(item.id)} />
                            </>
                        ) || (section=='messages' && <FaTrash className='trash' size={18} onClick={() => handleDeleteMessage(item.id)} />)}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        {showBodyOfMessage && 
        <div className='message-show'>
            <p>{showBodyOfMessage}</p>
            <div onClick={() => setShowBodyOfMessage("")}>
                <MainButton title='close' url='#'/>
            </div>
        </div>}
        <Loading loading={loading}/>
    </div>
    );
};

export default Table;