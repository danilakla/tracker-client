import React, { useState } from 'react'
import api from '../../api/instance';
import { addContents, createQRCode, deleteQRCode, updateQR } from '../../api';

function FormQR() {
    const formData = new FormData();

    const [mediaFiles, setMediaFiles]: any = useState([]);

    const [addmediaFiles, setaddMediaFiles]: any = useState([]);

    const [img2, setImg]: any = useState();
    const [qriD, setQrid]: any = useState();
    const [name, setName]: any = useState();
    const [desciption, setDesciption]: any = useState();
    async function createQR(e: any) {
        e.preventDefault();

        const arr: any[] = [];
        arr.push(mediaFiles);
        arr.push(mediaFiles);
        const formData = new FormData();
        formData.append('description', "test2");
        formData.append('name', "test1");
        mediaFiles.forEach((e: any) => {
            formData.append('contents', e);

        })
        const data = await createQRCode(formData)


        setImg("data:image/jpeg;base64," + data)
    }
    return (
        <div>
            <form >
                <div>
                    <label>Select Media:</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*,video/*,audio/*"  // Accepts images, videos, and audios
                        onChange={(e: any) => setMediaFiles([...mediaFiles, e.target.files[0]])
                        }
                    />
                </div>
                <div>
                    <button onClick={createQR} type="submit">Upload</button>
                </div>
            </form>

            <img src={img2} width={100} height={100} alt="Image" />
            <input type='text' onChange={e => setQrid(e.target.value)}></input>
            <button onClick={async e => {
                const resp = await deleteQRCode(qriD);
                console.log(resp);
                window.location.reload();



            }}>delete</button>

            <div></div>
            <button onClick={async e => {

                const formData = new FormData();
                console.log(addmediaFiles);

                addmediaFiles.forEach((e: any) => {
                    formData.append('contents', e);

                })
                const resp = await addContents(qriD, formData);
                console.log(resp);

            }}>add some else</button>

            <input
                type="file"
                multiple
                accept="image/*,video/*,audio/*"  // Accepts images, videos, and audios
                onChange={(e: any) => setaddMediaFiles([...addmediaFiles, e.target.files[0]])
                }
            />
        
        <div>

        </div>
        <input type='text' onChange={e => setDesciption(e.target.value)}/>
        <input type='text' onChange={e => setName(e.target.value)}/>
        <button onClick={async e => {

const formData = new FormData();
formData.append('description', desciption)
formData.append('name', name)
const resp = await updateQR(qriD, formData);
console.log(resp);

}}>add some else</button>
        </div>

        
    );
}

export default FormQR