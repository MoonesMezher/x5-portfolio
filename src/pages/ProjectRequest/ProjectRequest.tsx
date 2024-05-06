import { useState } from 'react';
import MainButton from '../../components/shared/MainButton/MainButton'
import MainInput from '../../components/shared/MainInput/MainInput'
import './ProjectRequest.css'

const ProjectRequest = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');
    const [error, setError] = useState({});

    return (
        <section className="page project-request">
            <div className="main-container">
                <h1>Add Project</h1>
                <form method="POST">
                    <MainInput filed='title' setValue={setTitle} value={title} errorRequest={error} label='Title' placeholder='A Title' required={true} type='text'/>
                    <MainInput filed='category' setValue={setCategory} value={category} errorRequest={error} label='Category' placeholder='A Category' required={true} type='text'/>
                    <MainInput filed='image' setValue={setPhoto} value={photo} errorRequest={error} label='Photo' placeholder='A Photo' required={true} type='file'/>
                    <MainButton title='send' url='#'/>
                </form>
            </div>
        </section>
    )
}

export default ProjectRequest