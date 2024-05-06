import { FaEdit, FaTrash } from 'react-icons/fa';
import { TTableProps } from '../../../types';
import { useParams } from 'react-router';
import './Table.css'

const Table = ( { data } : TTableProps) => {
    const { section } = useParams();

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
                                <FaTrash className='trash' size={18} onClick={() => console.log('Delete')} />
                            </>
                        ) || (section=='messages' && <FaTrash className='trash' size={18} onClick={() => console.log('Delete')} />)}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default Table;