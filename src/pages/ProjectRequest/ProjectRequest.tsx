import { useEffect, useRef, useState } from 'react';
import MainButton from '../../components/shared/MainButton/MainButton'
import MainInput from '../../components/shared/MainInput/MainInput'
import './ProjectRequest.css'
import axios from 'axios';
import API from '../../api/axios';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../components/shared/Loading/Loading';

const ProjectRequest = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [photo, setPhoto] = useState<any>('');
    const [error, setError] = useState({});
    const [loading, setLoading] = useState<boolean>(false);

    const file = useRef<any>();

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if(id) {
            setLoading(true);
            axios.get(API.GET.projects)
            .then(res => {
                const project = res.data.data.find(e => e.id == id);                

                if(!project) {
                    navigate('/error');
                }

                setLoading(false);
                setTitle(project.title);
                setCategory(project.category);
                setPhoto(project.image)
            });
        }
    }, [id]);

    const handleAddImage = () => {
        file.current.click();
    }
    
    const handleCreateOrUpdateProject = (e: any) => {
        setLoading(true);

        e.preventDefault();         

        const formData = new FormData();

        if(id) {
            // const data = new FormData();            formData.delete('title');
            formData.append('title', title);
            formData.append('category', category);
            
            if (photo) {
                formData.append('image', photo[0]);
            }                   
            
            console.log(formData.get('title'));
            const data = {
                title: formData.get('title'),
                category: formData.get('category'),
                image: formData.get('image'),
            }

            console.log(data);
            
            axios.patch(API.PUT.projects+id, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                
            }).then(res => {                
                console.log(res.data);
                
                setError({});
                setLoading(false);
                navigate('/dashboard/projects');
            }).catch( (err) => {
                setError({});
                console.log(err.response.data);

                if(err.response.data.errors) {
                    setError(err.response.data.errors);
                }
                setLoading(false);
            })
        } else {
            formData.append('title', title);
            formData.append('category', category);

            if (photo) {
                formData.append('image', photo[0]);
            }  
            setLoading(true);
            axios.post(API.POST.projects, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(res => {
                setLoading(false);
                setError({});
                navigate('/dashboard/projects');
            }).catch( (err) => {
                setError({});
                if(err.response.data.errors) {
                    setError(err.response.data.errors);
                }
                setLoading(false);
            })
        }
    }

    return (
        <section className="page project-request">
            <div className="main-container">
                <h1>Add Project</h1>
                <form method="POST">
                    <MainInput filed='title' setValue={setTitle} value={title} errorRequest={error} label='Title' placeholder='A Title' required={true} type='text'/>
                    <MainInput filed='category' setValue={setCategory} value={category} errorRequest={error} label='Category' placeholder='A Category' required={true} type='text'/>
                    <div className='main-input'>
                        <label>Image</label>
                        <div className='file'>
                            <div onClick={handleAddImage} >
                                <MainButton title='Enter An Image' url='#'/>
                            </div>
                        </div>
                        <input ref={file} type='file' accept='image/*' onChange={(e) => setPhoto(e.target.files)} placeholder='Enter a photo' required/>
                    </div>
                    <div onClick={handleCreateOrUpdateProject}>
                        <MainButton title={id? 'Update': "Add"} url='#'/>
                    </div>
                </form>
            </div>
            <Loading loading={loading}/>
        </section>
    )
}

export default ProjectRequest