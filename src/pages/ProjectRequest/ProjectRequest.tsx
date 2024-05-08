import { useState } from 'react';
import MainButton from '../../components/shared/MainButton/MainButton'
import MainInput from '../../components/shared/MainInput/MainInput'
import './ProjectRequest.css'
import axios from 'axios';
import API from '../../api/axios';

const ProjectRequest = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [photo, setPhoto] = useState<any>('');
    const [error, setError] = useState({});

    const handleCreateProject = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);

    if (photo) {
        formData.append('image', photo[0]);
    }
    // const data = {
    //     title: title,
    //     category: category,
    //     image: photo
    // }    

    axios.post(API.POST.projects, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(res => {
        console.log(res.data);
    }).catch( (err) => {
        console.log(err.response.data);
      // Handle the error, e.g., display an error message to the user
    })
    }

    return (
        <section className="page project-request">
            <div className="main-container">
                <h1>Add Project</h1>
                <form method="POST">
                    <MainInput filed='title' setValue={setTitle} value={title} errorRequest={error} label='Title' placeholder='A Title' required={true} type='text'/>
                    <MainInput filed='category' setValue={setCategory} value={category} errorRequest={error} label='Category' placeholder='A Category' required={true} type='text'/>
                    {/* <MainInput filed='image' setValue={setPhoto} value={photo} errorRequest={error} label='Photo' placeholder='A Photo' required={true} type='file'/> */}
                    <input type='file' accept='image/*' onChange={(e) => setPhoto(e.target.files)}/>
                    <div onClick={handleCreateProject}>
                        <MainButton title='send' url='#'/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ProjectRequest